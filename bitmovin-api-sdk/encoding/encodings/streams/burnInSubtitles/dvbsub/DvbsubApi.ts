import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import StreamDvbSubSubtitle from '../../../../../models/StreamDvbSubSubtitle';
import PaginationResponse from '../../../../../models/PaginationResponse';
import StreamDvbSubSubtitleListQueryParams from './StreamDvbSubSubtitleListQueryParams';

/**
 * DvbsubApi - object-oriented interface
 * @export
 * @class DvbsubApi
 * @extends {BaseAPI}
 */
export default class DvbsubApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Burn-In DVB-SUB Subtitle into Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {StreamDvbSubSubtitle} [streamDvbSubSubtitle]
   * @throws {RequiredError}
   * @memberof DvbsubApi
   */
  public create(encodingId: string, streamId: string, streamDvbSubSubtitle?: StreamDvbSubSubtitle): Promise<StreamDvbSubSubtitle> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<StreamDvbSubSubtitle>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/dvbsub', pathParamMap, streamDvbSubSubtitle).then((response) => {
      return new StreamDvbSubSubtitle(response);
    });
  }

  /**
   * @summary Delete Burn-In DVB-SUB Subtitle from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the subtitle.
   * @throws {RequiredError}
   * @memberof DvbsubApi
   */
  public delete(encodingId: string, streamId: string, subtitleId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/dvbsub/{subtitle_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Get Burn-In DVB-SUB Subtitle Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the subtitle.
   * @throws {RequiredError}
   * @memberof DvbsubApi
   */
  public get(encodingId: string, streamId: string, subtitleId: string): Promise<StreamDvbSubSubtitle> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.get<StreamDvbSubSubtitle>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/dvbsub/{subtitle_id}', pathParamMap).then((response) => {
      return new StreamDvbSubSubtitle(response);
    });
  }

  /**
   * @summary List the Burn-In DVB-SUB subtitles of a stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DvbsubApi
   */
  public list(encodingId: string, streamId: string, queryParams?: StreamDvbSubSubtitleListQueryParams): Promise<PaginationResponse<StreamDvbSubSubtitle>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<PaginationResponse<StreamDvbSubSubtitle>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/dvbsub', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<StreamDvbSubSubtitle>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new StreamDvbSubSubtitle(i));
      }
      return paginationResponse;
    });
  }
}
