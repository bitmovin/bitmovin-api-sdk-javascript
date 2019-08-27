import {map} from '../common/Mapper';

/**
 * @export
 * @class AutoRestartConfiguration
 */
export class AutoRestartConfiguration {
  /**
   * If no segments were generated for the given number of seconds, a restart is triggered. Minimum: 30.0
   * @type {number}
   * @memberof AutoRestartConfiguration
   */
  public segmentsWrittenTimeout?: number;

  /**
   * If no data was written for the given number of seconds, a restart is triggered. Minimum: 30.0
   * @type {number}
   * @memberof AutoRestartConfiguration
   */
  public bytesWrittenTimeout?: number;

  /**
   * If no frames were generated for the given number of seconds, a restart is triggered. Minimum: 30.0
   * @type {number}
   * @memberof AutoRestartConfiguration
   */
  public framesWrittenTimeout?: number;

  /**
   * If HLS manifests were not updated for the given number of seconds, a restart is triggered. Minimum: 30.0
   * @type {number}
   * @memberof AutoRestartConfiguration
   */
  public hlsManifestsUpdateTimeout?: number;

  /**
   * If DASH manifests were not updated for the given number of seconds, a restart is triggered. Minimum: 30.0
   * @type {number}
   * @memberof AutoRestartConfiguration
   */
  public dashManifestsUpdateTimeout?: number;

  /**
   * Defines a schedule for restarts using the unix crontab syntax. This example would trigger a restart every monday at 05:30 (AM)
   * @type {string}
   * @memberof AutoRestartConfiguration
   */
  public scheduleExpression?: string;

  constructor(obj: Partial<AutoRestartConfiguration>) {

    this.segmentsWrittenTimeout = obj.segmentsWrittenTimeout;
    this.bytesWrittenTimeout = obj.bytesWrittenTimeout;
    this.framesWrittenTimeout = obj.framesWrittenTimeout;
    this.hlsManifestsUpdateTimeout = obj.hlsManifestsUpdateTimeout;
    this.dashManifestsUpdateTimeout = obj.dashManifestsUpdateTimeout;
    this.scheduleExpression = obj.scheduleExpression;
  }
}

export default AutoRestartConfiguration;

