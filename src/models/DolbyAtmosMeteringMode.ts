/**
 * Algorithm to be used for measuring loudness
 * @export
 * @enum {string}
 */
export enum DolbyAtmosMeteringMode {
  ITU_R_BS_1770_1 = 'ITU-R BS.1770-1',
  ITU_R_BS_1770_2 = 'ITU-R BS.1770-2',
  ITU_R_BS_1770_3 = 'ITU-R BS.1770-3',
  ITU_R_BS_1770_4 = 'ITU-R BS.1770-4',
  LEQ_A = 'Leq (A)'
}

export default DolbyAtmosMeteringMode;

