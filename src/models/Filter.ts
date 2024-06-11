import AudioMixFilter from './AudioMixFilter';
import AudioVolumeFilter from './AudioVolumeFilter';
import AzureSpeechToCaptionsFilter from './AzureSpeechToCaptionsFilter';
import BitmovinResource from './BitmovinResource';
import ConformFilter from './ConformFilter';
import CropFilter from './CropFilter';
import DeinterlaceFilter from './DeinterlaceFilter';
import DenoiseHqdn3dFilter from './DenoiseHqdn3dFilter';
import EbuR128SinglePassFilter from './EbuR128SinglePassFilter';
import EnhancedDeinterlaceFilter from './EnhancedDeinterlaceFilter';
import EnhancedWatermarkFilter from './EnhancedWatermarkFilter';
import FilterType from './FilterType';
import InterlaceFilter from './InterlaceFilter';
import RotateFilter from './RotateFilter';
import ScaleFilter from './ScaleFilter';
import TextFilter from './TextFilter';
import UnsharpFilter from './UnsharpFilter';
import WatermarkFilter from './WatermarkFilter';

export type FilterUnion =
  CropFilter |
  ConformFilter |
  WatermarkFilter |
  EnhancedWatermarkFilter |
  RotateFilter |
  DeinterlaceFilter |
  EnhancedDeinterlaceFilter |
  AudioMixFilter |
  DenoiseHqdn3dFilter |
  TextFilter |
  UnsharpFilter |
  ScaleFilter |
  InterlaceFilter |
  AudioVolumeFilter |
  EbuR128SinglePassFilter |
  AzureSpeechToCaptionsFilter;

/**
 * @export
 * @class Filter
 */
export class Filter extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof FilterType]: string; } = {
    CROP: 'CropFilter',
    CONFORM: 'ConformFilter',
    WATERMARK: 'WatermarkFilter',
    ENHANCED_WATERMARK: 'EnhancedWatermarkFilter',
    ROTATE: 'RotateFilter',
    DEINTERLACE: 'DeinterlaceFilter',
    ENHANCED_DEINTERLACE: 'EnhancedDeinterlaceFilter',
    AUDIO_MIX: 'AudioMixFilter',
    DENOISE_HQDN3D: 'DenoiseHqdn3dFilter',
    TEXT: 'TextFilter',
    UNSHARP: 'UnsharpFilter',
    SCALE: 'ScaleFilter',
    INTERLACE: 'InterlaceFilter',
    AUDIO_VOLUME: 'AudioVolumeFilter',
    EBU_R128_SINGLE_PASS: 'EbuR128SinglePassFilter',
    AZURE_SPEECH_TO_CAPTIONS: 'AzureSpeechToCaptionsFilter'
  };

  constructor(obj?: Partial<Filter>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default Filter;

