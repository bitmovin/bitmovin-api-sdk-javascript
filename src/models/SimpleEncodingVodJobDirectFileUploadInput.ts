import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobInput from './SimpleEncodingVodJobInput';
import SimpleEncodingVodJobInputSourceType from './SimpleEncodingVodJobInputSourceType';
import SimpleEncodingVodJobInputType from './SimpleEncodingVodJobInputType';

/**
 * @export
 * @class SimpleEncodingVodJobDirectFileUploadInput
 */
export class SimpleEncodingVodJobDirectFileUploadInput extends SimpleEncodingVodJobInput {
  /**
   * Discriminator property for SimpleEncodingVodJobInput
   * @type {string}
   * @memberof SimpleEncodingVodJobDirectFileUploadInput
   */
  public readonly type: SimpleEncodingVodJobInputSourceType = SimpleEncodingVodJobInputSourceType.DIRECT_FILE_UPLOAD;

  /**
   * Id of a DirectFileUploadInput (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobDirectFileUploadInput
   */
  public inputId?: string;

  /**
   * Defines the type of the input file, if no type is set it is assumed that the input file contains at least one video stream and optionally one or multiple audio streams.  Note that when defining video and audio inputs, you can either - add one single input without inputType, in which case that source file must contain a video stream and (if you want audio) one audio stream, or - add one single input with inputType=VIDEO and (if you want audio) one or more inputs with inputType=AUDIO (each containing one audio stream)  Other combinations are not valid. 
   * @type {SimpleEncodingVodJobInputType}
   * @memberof SimpleEncodingVodJobDirectFileUploadInput
   */
  public inputType?: SimpleEncodingVodJobInputType;

  /**
   * The language of the audio track, the subtitles, or closed captions file. The language code  must be compliant with [BCP 47](https://datatracker.ietf.org/doc/html/rfc5646).  This property is mandatory if the input provided is of type SUBTITLES or CLOSED_CAPTIONS and  recommended for input type AUDIO and an input that does not specify an input type (combined  audio and video). If an audio input does not specify the language, it is defaulted to `und`  (undefined). 
   * @type {string}
   * @memberof SimpleEncodingVodJobDirectFileUploadInput
   */
  public language?: string;

  constructor(obj?: Partial<SimpleEncodingVodJobDirectFileUploadInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputType = map(obj.inputType);
    this.language = map(obj.language);
  }
}

export default SimpleEncodingVodJobDirectFileUploadInput;

