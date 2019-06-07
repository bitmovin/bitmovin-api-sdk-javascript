import {map} from '../common/Mapper';

/**
 * @export
 * @class MuxingStream
 */
export class MuxingStream {
  constructor(obj: any) {
    this.streamId = map(obj.streamId);
  }

  /**
   * @type {string}
   * @memberof MuxingStream
   */
  public streamId: string;
}

export default MuxingStream;

