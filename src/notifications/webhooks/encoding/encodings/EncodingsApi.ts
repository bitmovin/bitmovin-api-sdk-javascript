import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import FinishedApi from './finished/FinishedApi';
import ErrorApi from './error/ErrorApi';
import TransferErrorApi from './transferError/TransferErrorApi';
import LiveInputStreamChangedApi from './liveInputStreamChanged/LiveInputStreamChangedApi';

/**
 * EncodingsApi - object-oriented interface
 * @export
 * @class EncodingsApi
 * @extends {BaseAPI}
 */
export default class EncodingsApi extends BaseAPI {
  public finished: FinishedApi;
  public error: ErrorApi;
  public transferError: TransferErrorApi;
  public liveInputStreamChanged: LiveInputStreamChangedApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.finished = new FinishedApi(configuration);
    this.error = new ErrorApi(configuration);
    this.transferError = new TransferErrorApi(configuration);
    this.liveInputStreamChanged = new LiveInputStreamChangedApi(configuration);
  }
}
