/**
 * HLS Manifest ad marker types
 * @export
 * @enum {string}
 */
export enum HlsManifestAdMarkerType {
  EXT_X_CUE_OUT_IN = 'EXT_X_CUE_OUT_IN',
  EXT_OATCLS_SCTE35 = 'EXT_OATCLS_SCTE35',
  EXT_X_SPLICEPOINT_SCTE35 = 'EXT_X_SPLICEPOINT_SCTE35',
  EXT_X_DATERANGE = 'EXT_X_DATERANGE',
  EXT_X_SCTE35 = 'EXT_X_SCTE35'
}

export default HlsManifestAdMarkerType;

