/**
 * platform which initiated the creation of the resource
 * @export
 * @enum {string}
 */
export enum SignupSource {
  AWS = 'AWS',
  AZURE = 'AZURE',
  BITMOVIN = 'BITMOVIN',
  GOOGLE = 'GOOGLE'
}

export default SignupSource;

