import VirtualLicense from './VirtualLicense';
import VirtualLicenseLicensesListItem from './VirtualLicenseLicensesListItem';

/**
 * @export
 * @class VirtualLicenseCreateRequest
 */
export class VirtualLicenseCreateRequest extends VirtualLicense {
  constructor(obj?: Partial<VirtualLicenseCreateRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default VirtualLicenseCreateRequest;

