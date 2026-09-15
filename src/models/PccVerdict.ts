/**
 * What a combination says once every session that measured it has been read. Five of the nine answer for the measurement rather than for the device; `aboutTheDevice` says which, and folding those into \"not supported\" is how this data gets misread.
 * @export
 * @enum {string}
 */
export enum PccVerdict {
  PLAYED = 'played',
  CLAIMED_BUT_NOT_VERIFIED = 'claimed-but-not-verified',
  DECLARES_NO_SUPPORT = 'declares-no-support',
  INCONSISTENT_CLAIM = 'inconsistent-claim',
  INCONCLUSIVE = 'inconclusive',
  UNMEASURED = 'unmeasured',
  NOT_APPLICABLE = 'not-applicable',
  INFRASTRUCTURE_FAULT = 'infrastructure-fault',
  NEVER_REACHED = 'never-reached'
}

export default PccVerdict;

