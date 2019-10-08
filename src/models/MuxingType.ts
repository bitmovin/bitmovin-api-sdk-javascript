/**
 * @export
 * @enum {string}
 */
export enum MuxingType {
  FMP4 = 'FMP4',
  CMAF = 'CMAF',
  MP4 = 'MP4',
  TS = 'TS',
  WEBM = 'WEBM',
  MP3 = 'MP3',
  PROGRESSIVE_WEBM = 'PROGRESSIVE_WEBM',
  PROGRESSIVE_MOV = 'PROGRESSIVE_MOV',
  PROGRESSIVE_TS = 'PROGRESSIVE_TS',
  BROADCAST_TS = 'BROADCAST_TS',
  CHUNKED_TEXT = 'CHUNKED_TEXT',
  TEXT = 'TEXT',
  SEGMENTED_RAW = 'SEGMENTED_RAW'
}

export default MuxingType;

