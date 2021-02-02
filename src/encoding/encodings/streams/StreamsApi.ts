import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import InputApi from './input/InputApi';
import InputsApi from './inputs/InputsApi';
import FiltersApi from './filters/FiltersApi';
import BurnInSubtitlesApi from './burnInSubtitles/BurnInSubtitlesApi';
import WatermarkingApi from './watermarking/WatermarkingApi';
import CaptionsApi from './captions/CaptionsApi';
import BifsApi from './bifs/BifsApi';
import HdrApi from './hdr/HdrApi';
import ThumbnailsApi from './thumbnails/ThumbnailsApi';
import SpritesApi from './sprites/SpritesApi';
import QcApi from './qc/QcApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import Stream from '../../../models/Stream';
import PaginationResponse from '../../../models/PaginationResponse';
import {StreamListQueryParams, StreamListQueryParamsBuilder} from './StreamListQueryParams';

/**
 * StreamsApi - object-oriented interface
 * @export
 * @class StreamsApi
 * @extends {BaseAPI}
 */
export default class StreamsApi extends BaseAPI {
  public customdata: CustomdataApi;
  public input: InputApi;
  public inputs: InputsApi;
  public filters: FiltersApi;
  public burnInSubtitles: BurnInSubtitlesApi;
  public watermarking: WatermarkingApi;
  public captions: CaptionsApi;
  public bifs: BifsApi;
  public hdr: HdrApi;
  public thumbnails: ThumbnailsApi;
  public sprites: SpritesApi;
  public qc: QcApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.input = new InputApi(configuration);
    this.inputs = new InputsApi(configuration);
    this.filters = new FiltersApi(configuration);
    this.burnInSubtitles = new BurnInSubtitlesApi(configuration);
    this.watermarking = new WatermarkingApi(configuration);
    this.captions = new CaptionsApi(configuration);
    this.bifs = new BifsApi(configuration);
    this.hdr = new HdrApi(configuration);
    this.thumbnails = new ThumbnailsApi(configuration);
    this.sprites = new SpritesApi(configuration);
    this.qc = new QcApi(configuration);
  }

  /**
   * @summary Add Stream
   * @param {string} encodingId Id of the encoding.
   * @param {Stream} stream The Stream to be created
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public create(encodingId: string, stream?: Stream): Promise<Stream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Stream>('/encoding/encodings/{encoding_id}/streams', pathParamMap, stream).then((response) => {
      return map(response, Stream);
    });
  }

  /**
   * @summary Delete Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public delete(encodingId: string, streamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public get(encodingId: string, streamId: string): Promise<Stream> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<Stream>('/encoding/encodings/{encoding_id}/streams/{stream_id}', pathParamMap).then((response) => {
      return map(response, Stream);
    });
  }

  /**
   * @summary List Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public list(encodingId: string, queryParameters?: StreamListQueryParams | ((q: StreamListQueryParamsBuilder) => StreamListQueryParamsBuilder)): Promise<PaginationResponse<Stream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: StreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Stream>>('/encoding/encodings/{encoding_id}/streams', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Stream>(response, Stream);
    });
  }
}
