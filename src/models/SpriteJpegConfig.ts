import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SpriteJpegConfig
 */
export class SpriteJpegConfig {
  /**
   * Quality of the JPEG file in percent. Allowed values 20 - 100 (required)
   * @type {number}
   * @memberof SpriteJpegConfig
   */
  public quality?: number;

  constructor(obj?: Partial<SpriteJpegConfig>) {
    if(!obj) {
      return;
    }
    this.quality = map(obj.quality);
  }
}

export default SpriteJpegConfig;

