import {map} from '../common/Mapper';
import AdaptiveQuantMode from './AdaptiveQuantMode';
import BAdapt from './BAdapt';
import Cea608708SubtitleConfiguration from './Cea608708SubtitleConfiguration';
import ColorConfig from './ColorConfig';
import EncodingMode from './EncodingMode';
import H264BPyramid from './H264BPyramid';
import H264InterlaceMode from './H264InterlaceMode';
import H264MotionEstimationMethod from './H264MotionEstimationMethod';
import H264NalHrd from './H264NalHrd';
import H264Partition from './H264Partition';
import H264SubMe from './H264SubMe';
import H264Trellis from './H264Trellis';
import LevelH264 from './LevelH264';
import MvPredictionMode from './MvPredictionMode';
import PixelFormat from './PixelFormat';
import PresetConfiguration from './PresetConfiguration';
import ProfileH264 from './ProfileH264';
import VideoConfiguration from './VideoConfiguration';
import WeightedPredictionPFrames from './WeightedPredictionPFrames';

/**
 * @export
 * @class H264VideoConfiguration
 */
export class H264VideoConfiguration extends VideoConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof H264VideoConfiguration
   */
  public type: 'H264' = 'H264';

  /**
   * Use a set of well defined configurations preset to support certain use cases. Can be overwritten with more specific values.
   * @type {PresetConfiguration}
   * @memberof H264VideoConfiguration
   */
  public presetConfiguration?: PresetConfiguration;

  /**
   * Sets the constant rate factor for quality-based variable bitrate. Either bitrate or crf is required.
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public crf?: number;

  /**
   * When setting a profile, all other settings must not exceed the limits which are defined in the profile. Otherwise, a higher profile may be automatically chosen. (required)
   * @type {ProfileH264}
   * @memberof H264VideoConfiguration
   */
  public profile?: ProfileH264;

  /**
   * Sets the amount of b frames.
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public bframes?: number;

  /**
   * Sets the amount of reference frames.
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public refFrames?: number;

  /**
   * Sets the minimum of quantization factor.
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public qpMin?: number;

  /**
   * Sets the maximum of quantization factor.
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public qpMax?: number;

  /**
   * @type {MvPredictionMode}
   * @memberof H264VideoConfiguration
   */
  public mvPredictionMode?: MvPredictionMode;

  /**
   * Sets the maximum Motion-Vector-Search-Range
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public mvSearchRangeMax?: number;

  /**
   * Enable or disable CABAC
   * @type {boolean}
   * @memberof H264VideoConfiguration
   */
  public cabac?: boolean;

  /**
   * Maximum Bitrate
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public maxBitrate?: number;

  /**
   * Minimum Bitrate
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public minBitrate?: number;

  /**
   * Playback device buffer size
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public bufsize?: number;

  /**
   * Minimum GOP length, the minimum distance between I-frames
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public minGop?: number;

  /**
   * Maximum GOP length, the maximum distance between I-frames
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public maxGop?: number;

  /**
   * Enable open-gop, allows referencing frames from a previous gop
   * @type {boolean}
   * @memberof H264VideoConfiguration
   */
  public openGop?: boolean;

  /**
   * Minimum interval in seconds between key frames
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public minKeyframeInterval?: number;

  /**
   * Maximum interval in seconds between key frames
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public maxKeyframeInterval?: number;

  /**
   * If three-pass encoding is used and a level is set for the encoder, the bitrate for some segments may exceed the bitrate limit which is defined by the level.
   * @type {LevelH264}
   * @memberof H264VideoConfiguration
   */
  public level?: LevelH264;

  /**
   * @type {BAdapt}
   * @memberof H264VideoConfiguration
   */
  public bAdaptiveStrategy?: BAdapt;

  /**
   * @type {H264MotionEstimationMethod}
   * @memberof H264VideoConfiguration
   */
  public motionEstimationMethod?: H264MotionEstimationMethod;

  /**
   * Number of frames for frame-type decision lookahead
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public rcLookahead?: number;

  /**
   * Subpixel motion estimation and mode decision
   * @type {H264SubMe}
   * @memberof H264VideoConfiguration
   */
  public subMe?: H264SubMe;

  /**
   * Enables or disables Trellis quantization. NOTE: This requires cabac
   * @type {H264Trellis}
   * @memberof H264VideoConfiguration
   */
  public trellis?: H264Trellis;

  /**
   * Partitions to consider. Analyzing more partition options improves quality at the cost of speed.
   * @type {H264Partition[]}
   * @memberof H264VideoConfiguration
   */
  public partitions?: H264Partition[];

  /**
   * Number of slices per frame.
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public slices?: number;

  /**
   * Using TOP_FIELD_FIRST or BOTTOM_FIELD_FIRST will output interlaced video
   * @type {H264InterlaceMode}
   * @memberof H264VideoConfiguration
   */
  public interlaceMode?: H264InterlaceMode;

  /**
   * Scene change sensitivity. The higher the value, the more likely an I-frame will be inserted. Set to 0 to disable it which is advised for scenarios where fixed GOP is required, e.g., adaptive streaming outputs like DASH, HLS and Smooth. Having this setting enabled can improve quality for progressive output with an increased internal chunk length (see `internalChunkLength` of muxings).
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public sceneCutThreshold?: number;

  /**
   * Signal hypothetical reference decoder (HRD) information (requires bufsize to be set)
   * @type {H264NalHrd}
   * @memberof H264VideoConfiguration
   */
  public nalHrd?: H264NalHrd;

  /**
   * Keep some B-frames as references
   * @type {H264BPyramid}
   * @memberof H264VideoConfiguration
   */
  public bPyramid?: H264BPyramid;

  /**
   * Defines whether CEA 608/708 subtitles are copied from the input video stream
   * @type {Cea608708SubtitleConfiguration}
   * @memberof H264VideoConfiguration
   */
  public cea608708SubtitleConfig?: Cea608708SubtitleConfiguration;

  /**
   * Strength of the in-loop deblocking filter. Higher values deblock more effectively but also soften the image
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public deblockAlpha?: number;

  /**
   * Threshold of the in-loop deblocking filter. Higher values apply deblocking stronger on non flat blocks, lower values on flat blocks
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public deblockBeta?: number;

  /**
   * Controls the adaptive quantization algorithm
   * @type {AdaptiveQuantMode}
   * @memberof H264VideoConfiguration
   */
  public adaptiveQuantizationMode?: AdaptiveQuantMode;

  /**
   * Values greater than 1 reduce blocking and blurring in flat and textured areas. Values less than 1 reduces ringing artifacts at the cost of more banding artifacts. Negative values are not allowed
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public adaptiveQuantizationStrength?: number;

  /**
   * Allow references on a per partition basis, rather than per-macroblock basis
   * @type {boolean}
   * @memberof H264VideoConfiguration
   */
  public mixedReferences?: boolean;

  /**
   * Enables adaptive spatial transform (high profile 8x8 transform)
   * @type {boolean}
   * @memberof H264VideoConfiguration
   */
  public adaptiveSpatialTransform?: boolean;

  /**
   * Enables fast skip detection on P-frames. Disabling this very slightly increases quality but at a large speed loss
   * @type {boolean}
   * @memberof H264VideoConfiguration
   */
  public fastSkipDetectionPFrames?: boolean;

  /**
   * Enable open-gop, allows referencing frames from a previous gop
   * @type {boolean}
   * @memberof H264VideoConfiguration
   */
  public weightedPredictionBFrames?: boolean;

  /**
   * Defines the mode for weighted prediction for P-frames
   * @type {WeightedPredictionPFrames}
   * @memberof H264VideoConfiguration
   */
  public weightedPredictionPFrames?: WeightedPredictionPFrames;

  /**
   * Enable macroblock tree ratecontrol. Macroblock tree rate control tracks how often blocks of the frame are used for prediciting future frames
   * @type {boolean}
   * @memberof H264VideoConfiguration
   */
  public macroblockTreeRatecontrol?: boolean;

  /**
   * Ratio between constant bitrate (0.0) and constant quantizer (1.0). Valid range 0.0 - 1.0
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public quantizerCurveCompression?: number;

  /**
   * Psychovisual Rate Distortion retains fine details like film grain at the expense of more blocking artifacts. Higher values make the video appear sharper and more detailed but with a higher risk of blocking artifacts. Needs to have subMe with RD_IP, RD_ALL, RD_REF_IP or RD_REF_ALL
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public psyRateDistortionOptimization?: number;

  /**
   * Higher values will improve sharpness and detail retention but might come at costs of artifacts. Needs to have trellis enabled
   * @type {number}
   * @memberof H264VideoConfiguration
   */
  public psyTrellis?: number;

  constructor(obj: Partial<H264VideoConfiguration>) {
    super(obj);

    this.presetConfiguration = obj.presetConfiguration;
    this.crf = obj.crf;
    this.profile = obj.profile;
    this.bframes = obj.bframes;
    this.refFrames = obj.refFrames;
    this.qpMin = obj.qpMin;
    this.qpMax = obj.qpMax;
    this.mvPredictionMode = obj.mvPredictionMode;
    this.mvSearchRangeMax = obj.mvSearchRangeMax;
    this.cabac = obj.cabac;
    this.maxBitrate = obj.maxBitrate;
    this.minBitrate = obj.minBitrate;
    this.bufsize = obj.bufsize;
    this.minGop = obj.minGop;
    this.maxGop = obj.maxGop;
    this.openGop = obj.openGop;
    this.minKeyframeInterval = obj.minKeyframeInterval;
    this.maxKeyframeInterval = obj.maxKeyframeInterval;
    this.level = obj.level;
    this.bAdaptiveStrategy = obj.bAdaptiveStrategy;
    this.motionEstimationMethod = obj.motionEstimationMethod;
    this.rcLookahead = obj.rcLookahead;
    this.subMe = obj.subMe;
    this.trellis = obj.trellis;
    this.partitions = obj.partitions || [];
    this.slices = obj.slices;
    this.interlaceMode = obj.interlaceMode;
    this.sceneCutThreshold = obj.sceneCutThreshold;
    this.nalHrd = obj.nalHrd;
    this.bPyramid = obj.bPyramid;
    this.cea608708SubtitleConfig = map<Cea608708SubtitleConfiguration>(obj.cea608708SubtitleConfig, Cea608708SubtitleConfiguration);
    this.deblockAlpha = obj.deblockAlpha;
    this.deblockBeta = obj.deblockBeta;
    this.adaptiveQuantizationMode = obj.adaptiveQuantizationMode;
    this.adaptiveQuantizationStrength = obj.adaptiveQuantizationStrength;
    this.mixedReferences = obj.mixedReferences;
    this.adaptiveSpatialTransform = obj.adaptiveSpatialTransform;
    this.fastSkipDetectionPFrames = obj.fastSkipDetectionPFrames;
    this.weightedPredictionBFrames = obj.weightedPredictionBFrames;
    this.weightedPredictionPFrames = obj.weightedPredictionPFrames;
    this.macroblockTreeRatecontrol = obj.macroblockTreeRatecontrol;
    this.quantizerCurveCompression = obj.quantizerCurveCompression;
    this.psyRateDistortionOptimization = obj.psyRateDistortionOptimization;
    this.psyTrellis = obj.psyTrellis;
  }
}

export default H264VideoConfiguration;

