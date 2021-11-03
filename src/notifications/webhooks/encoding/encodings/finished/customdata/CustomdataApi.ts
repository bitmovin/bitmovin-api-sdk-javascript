import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomData from '../../../../../../models/CustomData';

/**
 * CustomdataApi - object-oriented interface
 * @export
 * @class CustomdataApi
 * @extends {BaseAPI}
 */
export default class CustomdataApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary 'Encoding Finished' Webhook Custom Data for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public getCustomDataByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.get<CustomData>('/notifications/webhooks/encoding/encodings/{encoding_id}/finished/{webhook_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }

  /**
   * @summary 'Encoding Finished' Webhook Custom Data
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public getCustomDataByWebhookId(webhookId: string): Promise<CustomData> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.get<CustomData>('/notifications/webhooks/encoding/encodings/finished/{webhook_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
