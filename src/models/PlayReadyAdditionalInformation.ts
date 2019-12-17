import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PlayReadyAdditionalInformation
 */
export class PlayReadyAdditionalInformation {
  /**
   * Custom attributes that you want to add to the WRM header. This string must be valid xml. Some DRM providers require some information in the custom attributes of the msr:pro tag of the DASH manifest, otherwise the content does not play on certain devices.
   * @type {string}
   * @memberof PlayReadyAdditionalInformation
   */
  public wrmHeaderCustomAttributes?: string;

  constructor(obj?: Partial<PlayReadyAdditionalInformation>) {
    if(!obj) {
      return;
    }
    this.wrmHeaderCustomAttributes = map(obj.wrmHeaderCustomAttributes);
  }
}

export default PlayReadyAdditionalInformation;

