import {map} from '../common/Mapper';
import EmailNotification from './EmailNotification';

/**
 * @export
 * @class EncodingErrorEmailNotification
 */
export class EncodingErrorEmailNotification extends EmailNotification {
  constructor(obj: Partial<EncodingErrorEmailNotification>) {
    super(obj);
  }
}

export default EncodingErrorEmailNotification;

