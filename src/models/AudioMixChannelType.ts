/**
 * Type of this channel
 * @export
 * @enum {string}
 */
export const enum AudioMixChannelType {
  CHANNEL_NUMBER = 'CHANNEL_NUMBER',
  FRONT_LEFT = 'FRONT_LEFT',
  FRONT_RIGHT = 'FRONT_RIGHT',
  CENTER = 'CENTER',
  LOW_FREQUENCY = 'LOW_FREQUENCY',
  BACK_LEFT = 'BACK_LEFT',
  BACK_RIGHT = 'BACK_RIGHT',
  SURROUND_LEFT = 'SURROUND_LEFT',
  SURROUND_RIGHT = 'SURROUND_RIGHT'
}

export default AudioMixChannelType;

