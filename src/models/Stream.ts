import {map, mapArray} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import AppliedStreamSettings from './AppliedStreamSettings';
import BitmovinResource from './BitmovinResource';
import DecodingErrorMode from './DecodingErrorMode';
import EncodingMode from './EncodingMode';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import StreamInput from './StreamInput';
import StreamMetadata from './StreamMetadata';
import StreamMode from './StreamMode';
import StreamPerTitleSettings from './StreamPerTitleSettings';

/**
 * @export
 * @class Stream
 */
export class Stream extends BitmovinResource {
  /**
   * Determines the input source(s) for the stream. All video streams of an encoding need to have identical input configurations (required)
   * @type {StreamInput[]}
   * @memberof Stream
   */
  public inputStreams?: StreamInput[];

  /**
   * @type {EncodingOutput[]}
   * @memberof Stream
   */
  public outputs?: EncodingOutput[];

  /**
   * Set true to create quality metadata for this stream
   * @type {boolean}
   * @memberof Stream
   */
  public createQualityMetaData?: boolean;

  /**
   * Id of the codec configuration (required)
   * @type {string}
   * @memberof Stream
   */
  public codecConfigId?: string;

  /**
   * Number of encoded segments. Available after encoding finishes.
   * @type {number}
   * @memberof Stream
   */
  public segmentsEncoded?: number;

  /**
   * Defines a condition that is evaluated against the input of the Stream. If the condition is not fulfilled, the Stream will be ignored during the encoding process. The 'streamConditionMode' of a Muxing allows to control how ignored Streams affect the Muxing. When retrieving the resource after the analysis step of the encoding has finished, 'ignoredBy' will indicate if and why it has been ignored. See [Stream Conditions](https://bitmovin.com/docs/encoding/articles/stream-conditions) for more information
   * @type {AbstractCondition}
   * @memberof Stream
   */
  public conditions?: AbstractCondition;

  /**
   * This read-only property is set during the analysis step of the encoding. If it contains items, the Stream has been ignored during the encoding process due to its 'conditions'
   * @type {Ignoring[]}
   * @memberof Stream
   */
  public ignoredBy?: Ignoring[];

  /**
   * Mode of the stream
   * @type {StreamMode}
   * @memberof Stream
   */
  public mode?: StreamMode;

  /**
   * The encoding mode that was used for this stream. This is derived from `encodingMode`, which can be specified in the codec configuration or in the encoding start request. Note that all streams of an encoding need to use the same encoding mode. This will therefore always match `selectedEncodingMode` of the related Encoding resource. Especially useful when `encodingMode` was not set explicitly or set to STANDARD (which translates to one of the other possible values on encoding start).
   * @type {EncodingMode}
   * @memberof Stream
   */
  public selectedEncodingMode?: EncodingMode;

  /**
   * Settings to configure Per-Title on stream level
   * @type {StreamPerTitleSettings}
   * @memberof Stream
   */
  public perTitleSettings?: StreamPerTitleSettings;

  /**
   * @type {StreamMetadata}
   * @memberof Stream
   */
  public metadata?: StreamMetadata;

  /**
   * Determines how to react to errors during decoding
   * @type {DecodingErrorMode}
   * @memberof Stream
   */
  public decodingErrorMode?: DecodingErrorMode;

  /**
   * Contains stream properties which may not have been defined in the configuration
   * @type {AppliedStreamSettings}
   * @memberof Stream
   */
  public appliedSettings?: AppliedStreamSettings;

  constructor(obj?: Partial<Stream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputStreams = mapArray(obj.inputStreams, StreamInput);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
    this.createQualityMetaData = map(obj.createQualityMetaData);
    this.codecConfigId = map(obj.codecConfigId);
    this.segmentsEncoded = map(obj.segmentsEncoded);
    this.conditions = map(obj.conditions, AbstractCondition);
    this.ignoredBy = mapArray(obj.ignoredBy, Ignoring);
    this.mode = map(obj.mode);
    this.selectedEncodingMode = map(obj.selectedEncodingMode);
    this.perTitleSettings = map(obj.perTitleSettings, StreamPerTitleSettings);
    this.metadata = map(obj.metadata, StreamMetadata);
    this.decodingErrorMode = map(obj.decodingErrorMode);
    this.appliedSettings = map(obj.appliedSettings, AppliedStreamSettings);
  }
}

export default Stream;

