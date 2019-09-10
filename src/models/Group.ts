import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Group
 */
export class Group extends BitmovinResource {
  constructor(obj?: Partial<Group>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default Group;

