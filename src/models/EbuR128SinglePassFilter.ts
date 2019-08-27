import {map} from '../common/Mapper';
import Filter from './Filter';

/**
 * @export
 * @class EbuR128SinglePassFilter
 */
export class EbuR128SinglePassFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof EbuR128SinglePassFilter
   */
  public type: 'EBU_R128_SINGLE_PASS' = 'EBU_R128_SINGLE_PASS';

  /**
   * Set the targeted integrated loudness value. Range is from '-70.0' to '-5.0'. Default value is '-24.0'. Value is measured in LUFS (Loudness Units, referenced to Full Scale)
   * @type {number}
   * @memberof EbuR128SinglePassFilter
   */
  public integratedLoudness?: number;

  /**
   * Set the targeted loudness range target. Range is from '1.0' to '20.0'. Default value is '7.0'. Loudness range measures the variation of loudness on a macroscopic time-scale in units of LU (Loudness Units). For programmes shorter than 1 minute, the use of the measure Loudness Range is not recommended due to too few data points (Loudness Range is based on the Short-term-Loudness values (3-seconds-window)).
   * @type {number}
   * @memberof EbuR128SinglePassFilter
   */
  public loudnessRange?: number;

  /**
   * Set maximum true peak. Range is from '-9.0' to '0.0'. Default value is '-2.0'. Values are measured in dBTP (db True Peak)
   * @type {number}
   * @memberof EbuR128SinglePassFilter
   */
  public maximumTruePeakLevel?: number;

  constructor(obj: Partial<EbuR128SinglePassFilter>) {
    super(obj);

    this.integratedLoudness = obj.integratedLoudness;
    this.loudnessRange = obj.loudnessRange;
    this.maximumTruePeakLevel = obj.maximumTruePeakLevel;
  }
}

export default EbuR128SinglePassFilter;

