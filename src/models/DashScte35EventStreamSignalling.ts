/**
 * Defines how SCTE-35 events are delivered using DASH EventStream. <ul>   <li>XML: Events will contain an XML representation of a SCTE-35 cue message as a SpliceInfoSection element as defined in SCTE-35. The schemeIdUri will be \"urn:scte:scte35:2013:xml.</li>   <li>XML_BIN: Events will contain an XML representation of a SCTE-35 cue message as a Signal.Binary element as defined in SCTE-35. The schemeIdUri will be \"urn:scte:scte35:2014:xml+bin</li> </ul> 
 * @export
 * @enum {string}
 */
export enum DashScte35EventStreamSignalling {
  XML = 'XML',
  XML_BIN = 'XML_BIN'
}

export default DashScte35EventStreamSignalling;

