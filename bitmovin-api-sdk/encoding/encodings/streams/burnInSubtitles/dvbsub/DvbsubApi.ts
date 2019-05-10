import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import StreamDvbSubSubtitle from '../../../../../models/StreamDvbSubSubtitle';

/**
 * DvbsubApi - object-oriented interface
 * @export
 * @class DvbsubApi
 * @extends {BaseAPI}
 */
export default class DvbsubApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
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
}
