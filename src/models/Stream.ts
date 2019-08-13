import {map} from '../common/Mapper';
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
   * @type {StreamInput[]}
   * @memberof Stream
   */
  public inputStreams: StreamInput[];

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
  public codecConfigId: string;

  /**
   * Number of encoded segments. Available after encoding finishes.
   * @type {number}
   * @memberof Stream
   */
  public segmentsEncoded?: number;

  /**
   * Conditions to evaluate before creating the stream. If this evaluation fails, the stream won't be created. All muxings that depend on the stream will also not be created.
   * @type {AbstractCondition}
   * @memberof Stream
   */
  public conditions?: AbstractCondition;

  /**
   * If this is set and contains objects, then this stream has been ignored during the encoding process
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
   * The encoding mode of the stream which was applied by the assigned codec configuration
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

  constructor(obj: Partial<Stream>) {
    super(obj);
    this.inputStreams = map<StreamInput>(obj.inputStreams, StreamInput);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
    this.createQualityMetaData = map(obj.createQualityMetaData);
    this.codecConfigId = map(obj.codecConfigId);
    this.segmentsEncoded = map(obj.segmentsEncoded);
    this.conditions = map<AbstractCondition>(obj.conditions, AbstractCondition);
    this.ignoredBy = map<Ignoring>(obj.ignoredBy, Ignoring);
    this.mode = map(obj.mode);
    this.selectedEncodingMode = map(obj.selectedEncodingMode);
    this.perTitleSettings = map<StreamPerTitleSettings>(obj.perTitleSettings, StreamPerTitleSettings);
    this.metadata = map<StreamMetadata>(obj.metadata, StreamMetadata);
    this.decodingErrorMode = map(obj.decodingErrorMode);
    this.appliedSettings = map<AppliedStreamSettings>(obj.appliedSettings, AppliedStreamSettings);
  }
}

export default Stream;

