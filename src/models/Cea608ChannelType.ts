/**
 * CEA-608 caption channel, as defined in ANSI/CTA-608-E. Only the primary channel of each field is selectable.
 * @export
 * @enum {string}
 */
export enum Cea608ChannelType {
  CC1 = 'CC1',
  CC3 = 'CC3'
}

export default Cea608ChannelType;

