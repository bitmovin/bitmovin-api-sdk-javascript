import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import PsnrApi from './psnr/PsnrApi';

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
