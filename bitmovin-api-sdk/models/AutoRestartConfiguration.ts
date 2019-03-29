import {map} from '../common/Mapper';

/**
 * @export
 * @class AutoRestartConfiguration
 */
export default class AutoRestartConfiguration {
  constructor(obj: any) {
    this.segmentsWrittenTimeout = map(obj.segmentsWrittenTimeout);
    this.bytesWrittenTimeout = map(obj.bytesWrittenTimeout);
    this.framesWrittenTimeout = map(obj.framesWrittenTimeout);
    this.hlsManifestsUpdateTimeout = map(obj.hlsManifestsUpdateTimeout);
    this.dashManifestsUpdateTimeout = map(obj.dashManifestsUpdateTimeout);
    this.scheduleExpression = map(obj.scheduleExpression);
  }

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
}
