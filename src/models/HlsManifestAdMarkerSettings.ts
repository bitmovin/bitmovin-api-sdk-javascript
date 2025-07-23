import {map, mapArray} from '../common/Mapper';
import HlsManifestAdMarkerType from './HlsManifestAdMarkerType';

/**
 * @export
 * @class HlsManifestAdMarkerSettings
 */
export class HlsManifestAdMarkerSettings {
  /**
   * Ad marker types that will be inserted. More than one type is possible.  - EXT_X_CUE_OUT_IN: Ad markers will be inserted using `#EXT-X-CUE-OUT` and `#EXT-X-CUE-IN` tags - EXT_OATCLS_SCTE35: Ad markers will be inserted using `#EXT-OATCLS-SCTE35` tags. They contain the base64 encoded raw bytes of the original SCTE-35 trigger. - EXT_X_SPLICEPOINT_SCTE35: Ad markers will be inserted using `#EXT-X-SPLICEPOINT-SCTE35` tags. They contain the base64 encoded raw bytes of the original SCTE-35 trigger. - EXT_X_DATERANGE: Ad markers will be inserted using `#EXT-X-DATERANGE` tags. They contain the ID, start timestamp and hex encoded raw bytes of the original SCTE-35 trigger. - EXT_X_SCTE35: Ad markers will be inserted using `#EXT-X-SCTE35` tags. They contain the base64 encoded raw bytes of the original SCTE-35 trigger. 
   * @type {HlsManifestAdMarkerType[]}
   * @memberof HlsManifestAdMarkerSettings
   */
  public enabledMarkerTypes?: HlsManifestAdMarkerType[];

  /**
   * Certain tags, such as EXT_X_DATERANGE, may be preannounced in the HLS manifest. This means they are inserted as early as possible, before the actual ad break begins or ends. Preannouncing helps clients anticipate upcoming splice points, but may cause compatibility issues with some downstream consumers (e.g., AWS MediaTailor SSAI). When this setting is enabled, preannouncing of tags is disabled, and tags are inserted at the segment corresponding to the event's splice time. 
   * @type {boolean}
   * @memberof HlsManifestAdMarkerSettings
   */
  public disablePreannouncing?: boolean;

  constructor(obj?: Partial<HlsManifestAdMarkerSettings>) {
    if(!obj) {
      return;
    }
    this.enabledMarkerTypes = mapArray(obj.enabledMarkerTypes);
    this.disablePreannouncing = map(obj.disablePreannouncing);
  }
}

export default HlsManifestAdMarkerSettings;

