import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class BitmovinResponseList
 */
export class BitmovinResponseList extends Array<BitmovinResponse> {
  constructor(obj?: any) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default BitmovinResponseList;

