import {map, mapArray} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';

/**
 * @export
 * @class SpriteRepresentation
 */
export class SpriteRepresentation extends DashRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof SpriteRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.SPRITE;

  /**
   * UUID of an encoding (required)
   * @type {string}
   * @memberof SpriteRepresentation
   */
  public encodingId?: string;

  /**
   * UUID of a stream (required)
   * @type {string}
   * @memberof SpriteRepresentation
   */
  public streamId?: string;

  /**
   * UUID of a Sprite (required)
   * @type {string}
   * @memberof SpriteRepresentation
   */
  public spriteId?: string;

  /**
   * Path to sprite segments. Will be used as the representation id in the manifest. (required)
   * @type {string}
   * @memberof SpriteRepresentation
   */
  public segmentPath?: string;

  constructor(obj?: Partial<SpriteRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
    this.streamId = map(obj.streamId);
    this.spriteId = map(obj.spriteId);
    this.segmentPath = map(obj.segmentPath);
  }
}

export default SpriteRepresentation;

