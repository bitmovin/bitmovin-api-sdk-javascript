/**
 * @export
 * @enum {string}
 */
export enum S3StorageClass {
  GLACIER_IR = 'GLACIER_IR',
  INTELLIGENT_TIERING = 'INTELLIGENT_TIERING',
  ONEZONE_IA = 'ONEZONE_IA',
  REDUCED_REDUNDANCY = 'REDUCED_REDUNDANCY',
  STANDARD = 'STANDARD',
  STANDARD_IA = 'STANDARD_IA'
}

export default S3StorageClass;

