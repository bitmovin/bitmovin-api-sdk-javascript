import BitmovinResponse from './BitmovinResponse';
import ContentProtection from './ContentProtection';
import DashChunkedTextRepresentation from './DashChunkedTextRepresentation';
import DashCmafRepresentation from './DashCmafRepresentation';
import DashFmp4DrmRepresentation from './DashFmp4DrmRepresentation';
import DashFmp4Representation from './DashFmp4Representation';
import DashImscRepresentation from './DashImscRepresentation';
import DashMp4DrmRepresentation from './DashMp4DrmRepresentation';
import DashMp4Representation from './DashMp4Representation';
import DashProgressiveWebmRepresentation from './DashProgressiveWebmRepresentation';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';
import DashVttRepresentation from './DashVttRepresentation';
import DashWebmRepresentation from './DashWebmRepresentation';
import SpriteRepresentation from './SpriteRepresentation';

export type DashRepresentationUnion =
  DashFmp4DrmRepresentation |
  DashFmp4Representation |
  DashWebmRepresentation |
  DashCmafRepresentation |
  DashChunkedTextRepresentation |
  DashMp4Representation |
  DashMp4DrmRepresentation |
  DashProgressiveWebmRepresentation |
  DashVttRepresentation |
  SpriteRepresentation |
  DashImscRepresentation |
  ContentProtection;

/**
 * @export
 * @class DashRepresentation
 */
export class DashRepresentation extends BitmovinResponse {
  protected static readonly _discriminatorName = 'typeDiscriminator';
  protected static readonly _discriminatorMapping: { [key in keyof typeof DashRepresentationTypeDiscriminator]: string; } = {
    DRM_FMP4: 'DashFmp4DrmRepresentation',
    FMP4: 'DashFmp4Representation',
    WEBM: 'DashWebmRepresentation',
    CMAF: 'DashCmafRepresentation',
    CHUNKED_TEXT: 'DashChunkedTextRepresentation',
    MP4: 'DashMp4Representation',
    DRM_MP4: 'DashMp4DrmRepresentation',
    PROGRESSIVE_WEBM: 'DashProgressiveWebmRepresentation',
    VTT: 'DashVttRepresentation',
    SPRITE: 'SpriteRepresentation',
    IMSC: 'DashImscRepresentation',
    CONTENT_PROTECTION: 'ContentProtection'
  };

  constructor(obj?: Partial<DashRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DashRepresentation;

