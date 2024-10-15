import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import CaptionCharacterEncoding from './CaptionCharacterEncoding';
import Cea608ChannelType from './Cea608ChannelType';
import InputPath from './InputPath';

/**
 * @export
 * @class SrtToCea608708Caption
 */
export class SrtToCea608708Caption extends BitmovinResource {
  /**
   * Input location of the SRT file (required)
   * @type {InputPath}
   * @memberof SrtToCea608708Caption
   */
  public input?: InputPath;

  /**
   * The channel number to embed the CEA subtitles in (required)
   * @type {Cea608ChannelType}
   * @memberof SrtToCea608708Caption
   */
  public ccChannel?: Cea608ChannelType;

  /**
   * Character encoding of the input SRT file (required)
   * @type {CaptionCharacterEncoding}
   * @memberof SrtToCea608708Caption
   */
  public characterEncoding?: CaptionCharacterEncoding;

  constructor(obj?: Partial<SrtToCea608708Caption>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.input = map(obj.input, InputPath);
    this.ccChannel = map(obj.ccChannel);
    this.characterEncoding = map(obj.characterEncoding);
  }
}

export default SrtToCea608708Caption;

