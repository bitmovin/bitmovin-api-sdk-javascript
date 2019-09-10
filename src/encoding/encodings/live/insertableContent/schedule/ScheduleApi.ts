import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import ScheduledInsertableContent from '../../../../../models/ScheduledInsertableContent';

/**
 * ScheduleApi - object-oriented interface
 * @export
 * @class ScheduleApi
 * @extends {BaseAPI}
 */
export default class ScheduleApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Schedule Insertable Content For a Live Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {string} contentId Id of the insertable content.
   * @param {ScheduledInsertableContent} scheduledInsertableContent The scheduled insertable content to be created
   * @throws {BitmovinError}
   * @memberof ScheduleApi
   */
  public create(encodingId: string, contentId: string, scheduledInsertableContent?: ScheduledInsertableContent): Promise<ScheduledInsertableContent> {
    const pathParamMap = {
      encoding_id: encodingId,
      content_id: contentId
    };
    return this.restClient.post<ScheduledInsertableContent>('/encoding/encodings/{encoding_id}/live/insertable-content/{content_id}/schedule', pathParamMap, scheduledInsertableContent).then((response) => {
      return map(response, ScheduledInsertableContent);
    });
  }

  /**
   * @summary Deschedule Insertable Content
   * @param {string} encodingId Id of the encoding.
   * @param {string} contentId Id of the insertable content.
   * @param {string} scheduledContentId Id of the scheduled insertable content
   * @throws {BitmovinError}
   * @memberof ScheduleApi
   */
  public delete(encodingId: string, contentId: string, scheduledContentId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      content_id: contentId,
      scheduled_content_id: scheduledContentId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/live/insertable-content/{content_id}/schedule/{scheduled_content_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
