import {map} from '../common/Mapper';

/**
 * @export
 * @class AppliedStreamSettings
 */
export class AppliedStreamSettings {
  /**
   * The applied width. Useful if the width in the configuration was undefined
   * @type {number}
   * @memberof AppliedStreamSettings
   */
  public width?: number;

  /**
   * The applied height. Useful if the height in the configuration was undefined
   * @type {number}
   * @memberof AppliedStreamSettings
   */
  public height?: number;

  constructor(obj: Partial<AppliedStreamSettings>) {
    this.width = map(obj.width);
    this.height = map(obj.height);
  }
}

export default AppliedStreamSettings;

