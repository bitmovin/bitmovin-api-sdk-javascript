import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import CdnProvider from './CdnProvider';
import Output from './Output';
import OutputType from './OutputType';

/**
 * @export
 * @class CdnOutput
 */
export class CdnOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof CdnOutput
   */
  public readonly type: OutputType = OutputType.CDN;

  /**
   * Domain name for public access to CDN content
   * @type {string}
   * @memberof CdnOutput
   */
  public domainName?: string;

  /**
   * CDN Provider of the Output
   * @type {CdnProvider}
   * @memberof CdnOutput
   */
  public cdnProvider?: CdnProvider;

  constructor(obj?: Partial<CdnOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.domainName = map(obj.domainName);
    this.cdnProvider = map(obj.cdnProvider);
  }
}

export default CdnOutput;

