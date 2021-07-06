/**
 * A 90° phase shift can be applied to the surround channels during encoding. This is useful for generating multichannel bitstreams which, when downmixed, can create a true Dolby Surround compatible output (Left/Right) 
 * @export
 * @enum {string}
 */
export enum DolbyDigitalPlusNinetyDegreePhaseShift {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED'
}

export default DolbyDigitalPlusNinetyDegreePhaseShift;

