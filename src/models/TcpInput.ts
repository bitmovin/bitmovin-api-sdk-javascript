import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class TcpInput
 */
export class TcpInput extends Input {
  constructor(obj: Partial<TcpInput>) {
    super(obj);
  }
}

export default TcpInput;

