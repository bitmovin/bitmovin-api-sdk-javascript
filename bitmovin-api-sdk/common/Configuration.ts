import {FetchAPI} from './RestClient';
import Logger from './Logger';

export default interface Configuration {
  apiKey: string;
  tenantOrgId?: string;
  baseUrl?: string;
  fetch?: FetchAPI;
  logger?: Logger;
}
