import AudioMixFilter from './AudioMixFilter';
import AudioVolumeFilter from './AudioVolumeFilter';
import BitmovinResource from './BitmovinResource';
import CropFilter from './CropFilter';
import DeinterlaceFilter from './DeinterlaceFilter';
import DenoiseHqdn3dFilter from './DenoiseHqdn3dFilter';
import EbuR128SinglePassFilter from './EbuR128SinglePassFilter';
import EnhancedWatermarkFilter from './EnhancedWatermarkFilter';
import InterlaceFilter from './InterlaceFilter';
import RotateFilter from './RotateFilter';
import ScaleFilter from './ScaleFilter';
import TextFilter from './TextFilter';
import UnsharpFilter from './UnsharpFilter';
import WatermarkFilter from './WatermarkFilter';

export type FilterUnion =
  CropFilter |
  WatermarkFilter |
  EnhancedWatermarkFilter |
  RotateFilter |
  DeinterlaceFilter |
  AudioMixFilter |
  DenoiseHqdn3dFilter |
  TextFilter |
  UnsharpFilter |
  ScaleFilter |
  InterlaceFilter |
  AudioVolumeFilter |
  EbuR128SinglePassFilter;

/**
 * @export
 * @class Filter
 */
export class Filter extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key: string]: string; } = {
    'CROP': 'CropFilter',
    'WATERMARK': 'WatermarkFilter',
    'ENHANCED_WATERMARK': 'EnhancedWatermarkFilter',
    'ROTATE': 'RotateFilter',
    'DEINTERLACE': 'DeinterlaceFilter',
    'AUDIO_MIX': 'AudioMixFilter',
    'DENOISE_HQDN3D': 'DenoiseHqdn3dFilter',
    'TEXT': 'TextFilter',
    'UNSHARP': 'UnsharpFilter',
    'SCALE': 'ScaleFilter',
    'INTERLACE': 'InterlaceFilter',
    'AUDIO_VOLUME': 'AudioVolumeFilter',
    'EBU_R128_SINGLE_PASS': 'EbuR128SinglePassFilter'
  };

  constructor(obj: Partial<Filter>) {
    super(obj);

  }
}

export default Filter;

