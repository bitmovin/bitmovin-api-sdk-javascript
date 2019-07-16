import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class BitmovinResponseList
 */
export class BitmovinResponseList extends Array<BitmovinResponse> {
  constructor(obj: any) {
    super(obj);
  }
}

export default BitmovinResponseList;

