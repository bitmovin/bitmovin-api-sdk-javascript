import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import PsnrApi from './psnr/PsnrApi';
import {getType, map} from '../../../../common/Mapper';

/**
 * QcApi - object-oriented interface
 * @export
 * @class QcApi
 * @extends {BaseAPI}
 */
export default class QcApi extends BaseAPI {
  public psnr: PsnrApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.psnr = new PsnrApi(configuration);
  }
}
