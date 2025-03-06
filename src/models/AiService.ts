import {map, mapArray} from '../common/Mapper';
import AiServiceProvider from './AiServiceProvider';

/**
 * @export
 * @class AiService
 */
export class AiService {
  /**
   * AI service provider
   * @type {AiServiceProvider}
   * @memberof AiService
   */
  public provider?: AiServiceProvider;

  constructor(obj?: Partial<AiService>) {
    if(!obj) {
      return;
    }
    this.provider = map(obj.provider);
  }
}

export default AiService;

