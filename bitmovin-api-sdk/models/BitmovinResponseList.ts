import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class BitmovinResponseList
 */
export default class BitmovinResponseList extends Array<BitmovinResponse> {
  constructor(obj: any) {
    super(obj);
  }

}
