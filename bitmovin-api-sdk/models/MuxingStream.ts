import {map} from '../common/Mapper';

/**
 * @export
 * @class MuxingStream
 */
export default class MuxingStream {
  constructor(obj: any) {
    this.streamId = map(obj.streamId);
  }

  /**
   * @type {string}
   * @memberof MuxingStream
   */
  public streamId: string;
}
