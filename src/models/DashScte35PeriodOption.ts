/**
 * Controls how SCTE-35 signals are applied at the DASH period level. <ul>   <li>SINGLE_PERIOD: Applies SCTE markers to a single DASH period.</li>   <li>MULTI_PERIOD: Multiple periods are created based on received SCTE-35 messages.</li> </ul> 
 * @export
 * @enum {string}
 */
export enum DashScte35PeriodOption {
  SINGLE_PERIOD = 'SINGLE_PERIOD',
  MULTI_PERIOD = 'MULTI_PERIOD'
}

export default DashScte35PeriodOption;

