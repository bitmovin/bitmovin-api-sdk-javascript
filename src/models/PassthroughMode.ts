/**
 * Configure if the encoding should use the video stream as the passthrough mode or a dedicated caption stream.
 * @export
 * @enum {string}
 */
export enum PassthroughMode {
  VIDEO_STREAM = 'VIDEO_STREAM',
  CAPTION_STREAM = 'CAPTION_STREAM'
}

export default PassthroughMode;

