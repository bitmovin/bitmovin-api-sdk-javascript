import {map} from '../common/Mapper';
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

/**
 * @export
 * @class Filter
 */
export class Filter extends BitmovinResource {
  constructor(obj: Partial<Filter>) {
    super(obj);
  }
}

export default Filter;

