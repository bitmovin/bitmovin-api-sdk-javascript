import {map, mapArray} from '../common/Mapper';

/**
 * Represents a main subject or object detected within a shot, including its classification, spatial position, and appearance timing
 * @export
 * @class MainSubject
 */
export class MainSubject {
  /**
   * The category or type of the detected subject based on the YOLOv8 OIv7 (Open Images V7) object detection model (e.g., 'person', 'vehicle', 'building') (required)
   * @type {string}
   * @memberof MainSubject
   */
  public classification?: string;

  /**
   * A detailed textual description of the subject's appearance and characteristics (required)
   * @type {string}
   * @memberof MainSubject
   */
  public description?: string;

  /**
   * The timestamp in seconds when this subject first appears or is most prominently visible in the shot (required)
   * @type {number}
   * @memberof MainSubject
   */
  public appearanceTimeInSeconds?: number;

  /**
   * The horizontal center position of the subject as a percentage from the left edge (0-100, where 0 is the left edge and 100 is the right edge) (required)
   * @type {number}
   * @memberof MainSubject
   */
  public centerX?: number;

  /**
   * The vertical center position of the subject as a percentage from the top edge (0-100, where 0 is the top edge and 100 is the bottom edge) (required)
   * @type {number}
   * @memberof MainSubject
   */
  public centerY?: number;

  constructor(obj?: Partial<MainSubject>) {
    if(!obj) {
      return;
    }
    this.classification = map(obj.classification);
    this.description = map(obj.description);
    this.appearanceTimeInSeconds = map(obj.appearanceTimeInSeconds);
    this.centerX = map(obj.centerX);
    this.centerY = map(obj.centerY);
  }
}

export default MainSubject;

