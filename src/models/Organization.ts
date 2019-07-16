import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Organization
 */
export class Organization extends BitmovinResource {
  constructor(obj: Partial<Organization>) {
    super(obj);
  }
}

export default Organization;

