/**
 * It indicates if downmixing mode is Dolby Surround compatible (`LT_RT`: Left total/Right total) or Dolby Pro Logic II (`PRO_LOGIC_II`).  `LO_RO` for Left only/Right only: A downmix from a multichannel to a two‐channel output that is compatible for stereo or mono reproduction. 
 * @export
 * @enum {string}
 */
export enum DolbyDigitalPlusDownmixingPreferredMode {
  LO_RO = 'LO_RO',
  LT_RT = 'LT_RT',
  PRO_LOGIC_II = 'PRO_LOGIC_II'
}

export default DolbyDigitalPlusDownmixingPreferredMode;

