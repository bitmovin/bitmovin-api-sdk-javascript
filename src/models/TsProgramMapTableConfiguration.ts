import {map} from '../common/Mapper';

/**
 * @export
 * @class TsProgramMapTableConfiguration
 */
export class TsProgramMapTableConfiguration {
  constructor(obj: any) {
    this.pid = map(obj.pid);
  }

  /**
   * An integer value. Packet Identifier (PID) for the MPEG Transport Stream PMT.
   * @type {number}
   * @memberof TsProgramMapTableConfiguration
   */
  public pid?: number;
}

export default TsProgramMapTableConfiguration;

