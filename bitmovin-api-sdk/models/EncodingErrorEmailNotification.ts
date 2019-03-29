import {map} from '../common/Mapper';
import EmailNotification from './EmailNotification';

/**
 * @export
 * @class EncodingErrorEmailNotification
 */
export default class EncodingErrorEmailNotification extends EmailNotification {
  constructor(obj: any) {
    super(obj);
  }

}
