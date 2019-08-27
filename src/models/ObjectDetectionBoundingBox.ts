import {map} from '../common/Mapper';

/**
 * @export
 * @class ObjectDetectionBoundingBox
 */
export class ObjectDetectionBoundingBox {
  /**
   * Horizontal position of the top left corner, given as a fraction of the frame width
   * @type {number}
   * @memberof ObjectDetectionBoundingBox
   */
  public topLeftX?: number;

  /**
   * Vertical position of the top left corner, given as a fraction of the frame height
   * @type {number}
   * @memberof ObjectDetectionBoundingBox
   */
  public topLeftY?: number;

  /**
   * Horizontal position of the bottom right corner, given as a fraction of the frame width
   * @type {number}
   * @memberof ObjectDetectionBoundingBox
   */
  public bottomRightX?: number;

  /**
   * Vertical position of the bottom right corner, given as a fraction of the frame height
   * @type {number}
   * @memberof ObjectDetectionBoundingBox
   */
  public bottomRightY?: number;

  constructor(obj: Partial<ObjectDetectionBoundingBox>) {

    this.topLeftX = obj.topLeftX;
    this.topLeftY = obj.topLeftY;
    this.bottomRightX = obj.bottomRightX;
    this.bottomRightY = obj.bottomRightY;
  }
}

export default ObjectDetectionBoundingBox;

