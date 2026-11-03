import {map, mapArray} from '../common/Mapper';

/**
 * A subject or object identified in a shot. Positions describe sampled appearances, not continuous tracking.
 * @export
 * @class MainSubject
 */
export class MainSubject {
  /**
   * Category of the subject, usually an Open Images V7 class name such as Person or Vehicle. Other values can occur. Retains its original value in language-specific results. (required)
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
   * Time in seconds from the start of this shot when the subject first appears. (required)
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

  /**
   * Bounding box at the subject's sampled appearance, in [ymin, xmin, ymax, xmax] order. Coordinates use a 0-1000 scale with a top-left origin, normalized independently against the full frame height and width. Omitted when no bounding box is available; the center coordinates remain valid.
   * @type {number[]}
   * @memberof MainSubject
   */
  public box2d?: number[];

  constructor(obj?: Partial<MainSubject>) {
    if(!obj) {
      return;
    }
    this.classification = map(obj.classification);
    this.description = map(obj.description);
    this.appearanceTimeInSeconds = map(obj.appearanceTimeInSeconds);
    this.centerX = map(obj.centerX);
    this.centerY = map(obj.centerY);
    this.box2d = mapArray(obj.box2d);
  }
}

export default MainSubject;

