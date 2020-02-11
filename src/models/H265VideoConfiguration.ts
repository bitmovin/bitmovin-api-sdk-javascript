import {map, mapArray} from '../common/Mapper';
import AdaptiveQuantMode from './AdaptiveQuantMode';
import BAdapt from './BAdapt';
import Cea608708SubtitleConfiguration from './Cea608708SubtitleConfiguration';
import CodecConfigType from './CodecConfigType';
import ColorConfig from './ColorConfig';
import EncodingMode from './EncodingMode';
import ForceFlushMode from './ForceFlushMode';
import LevelH265 from './LevelH265';
import LimitReferences from './LimitReferences';
import LimitTransformUnitDepthRecursionMode from './LimitTransformUnitDepthRecursionMode';
import MaxCtuSize from './MaxCtuSize';
import MaxTransformUnitSize from './MaxTransformUnitSize';
import MinCodingUnitSize from './MinCodingUnitSize';
import MotionSearch from './MotionSearch';
import PixelFormat from './PixelFormat';
import PresetConfiguration from './PresetConfiguration';
import ProfileH265 from './ProfileH265';
import QuantizationGroupSize from './QuantizationGroupSize';
import RateDistortionLevelForQuantization from './RateDistortionLevelForQuantization';
import RateDistortionPenaltyMode from './RateDistortionPenaltyMode';
import TransformSkipMode from './TransformSkipMode';
import TuInterDepth from './TuInterDepth';
import TuIntraDepth from './TuIntraDepth';
import VideoConfiguration from './VideoConfiguration';
import VideoFormat from './VideoFormat';

/**
 * @export
 * @class H265VideoConfiguration
 */
export class H265VideoConfiguration extends VideoConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof H265VideoConfiguration
   */
  public type: CodecConfigType.H265 = CodecConfigType.H265;

  /**
   * Use a set of well defined configurations preset to support certain use cases. Can be overwritten with more specific values.
   * @type {PresetConfiguration}
   * @memberof H265VideoConfiguration
   */
  public presetConfiguration?: PresetConfiguration;

  /**
   * Sets the constant rate factor for quality-based variable bitrate. Either bitrate or crf is required.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public crf?: number;

  /**
   * @type {ProfileH265}
   * @memberof H265VideoConfiguration
   */
  public profile?: ProfileH265;

  /**
   * Sets the amount of b frames
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public bframes?: number;

  /**
   * Sets the amount of reference frames
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public refFrames?: number;

  /**
   * Sets the quantization factor
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public qp?: number;

  /**
   * Maximum Bitrate
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public maxBitrate?: number;

  /**
   * Minimum Bitrate
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public minBitrate?: number;

  /**
   * Specify the size of the VBV buffer (kbits)
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public bufsize?: number;

  /**
   * Minimum GOP length, the minimum distance between I-frames
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public minGop?: number;

  /**
   * Maximum GOP length, the maximum distance between I-frames
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public maxGop?: number;

  /**
   * Enable open-gop, allows referencing frames from a previous gop
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public openGop?: boolean;

  /**
   * Minimum interval in seconds between key frames
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public minKeyframeInterval?: number;

  /**
   * Maximum interval in seconds between key frames
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public maxKeyframeInterval?: number;

  /**
   * @type {LevelH265}
   * @memberof H265VideoConfiguration
   */
  public level?: LevelH265;

  /**
   * Number of frames for slice-type decision lookahead
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public rcLookahead?: number;

  /**
   * Set the level of effort in determining B frame placement
   * @type {BAdapt}
   * @memberof H265VideoConfiguration
   */
  public bAdapt?: BAdapt;

  /**
   * @type {MaxCtuSize}
   * @memberof H265VideoConfiguration
   */
  public maxCTUSize?: MaxCtuSize;

  /**
   * @type {TuIntraDepth}
   * @memberof H265VideoConfiguration
   */
  public tuIntraDepth?: TuIntraDepth;

  /**
   * @type {TuInterDepth}
   * @memberof H265VideoConfiguration
   */
  public tuInterDepth?: TuInterDepth;

  /**
   * @type {MotionSearch}
   * @memberof H265VideoConfiguration
   */
  public motionSearch?: MotionSearch;

  /**
   * Set the amount of subpel refinement to perform.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public subMe?: number;

  /**
   * Set the Motion search range.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public motionSearchRange?: number;

  /**
   * Enable weighted prediction in P slices
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public weightPredictionOnPSlice?: boolean;

  /**
   * Enable weighted prediction in B slices
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public weightPredictionOnBSlice?: boolean;

  /**
   * Toggle sample adaptive offset loop filter
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public sao?: boolean;

  /**
   * Set the mastering display color volume SEI info (SMPTE ST 2086). For example `G(13250,34500)B(7500,3000)R(34000,16000)WP(15635,16450)L(10000000,1)` describes a P3D65 1000-nits monitor, where G(x=0.265, y=0.690), B(x=0.150, y=0.060), R(x=0.680, y=0.320), WP(x=0.3127, y=0.3290), L(max=1000, min=0.0001). Part of HDR-10 metadata.
   * @type {string}
   * @memberof H265VideoConfiguration
   */
  public masterDisplay?: string;

  /**
   * Set the max content light level (MaxCLL). Use together with maxPictureAverageLightLevel (which will be 0 if not set). Part of HDR-10 metadata.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public maxContentLightLevel?: number;

  /**
   * Set the maximum picture average light level (MaxFALL). Use together with maxContentLightLevel (which will be 0 if not set). Part of HDR-10 metadata.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public maxPictureAverageLightLevel?: number;

  /**
   * Force signaling of HDR parameters in SEI packets. Enabled automatically when masterDisplay or maxContentLightLevel/maxPictureAverageLightLevel are set. Useful when there is a desire to signal 0 values for maxContentLightLevel and maxPictureAverageLightLevel.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public hdr?: boolean;

  /**
   * Scene Change sensitivity. The higher the value, the more likely an I-Frame will be inserted. Set to 0 to disable it.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public sceneCutThreshold?: number;

  /**
   * Controls the adaptive quantization algorithm
   * @type {AdaptiveQuantMode}
   * @memberof H265VideoConfiguration
   */
  public adaptiveQuantizationMode?: AdaptiveQuantMode;

  /**
   * By enabling this video stream will be signaled as HLG
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public enableHlgSignaling?: boolean;

  /**
   * Specifies the source format of the original analog video prior to digitizing and encoding
   * @type {VideoFormat}
   * @memberof H265VideoConfiguration
   */
  public videoFormat?: VideoFormat;

  /**
   * Psycho-visual rate-distortion retains fine details like film grain at the expense of more blocking artifacts. Higher values make the video appear sharper and more detailed but with a higher risk of blocking artifacts. Needs to have subMe with RD_IP, RD_ALL, RD_REF_IP, RD_REF_ALL, QPRD or FULL_RD
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public psyRateDistortionOptimization?: number;

  /**
   * Strength of psycho-visual optimizations in quantization. Only has an effect in presets which use RDOQ (rd-levels 4 and 5). The value must be between 0 and 50, 1.0 is typical
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public psyRateDistortionOptimizedQuantization?: number;

  /**
   * Signal hypothetical reference decoder (HRD) information
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public enableHrdSignaling?: boolean;

  /**
   * Enables the use of lookahead’s lowres motion vector fields to determine the amount of reuse of each block to tune adaptive quantization factors.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public cutree?: boolean;

  /**
   * Minimum CU size (width and height). By using 16 or 32 the encoder will not analyze the cost of CUs below that minimum threshold, saving considerable amounts of compute with a predictable increase in bitrate. This setting has a large effect on performance on the faster presets.
   * @type {MinCodingUnitSize}
   * @memberof H265VideoConfiguration
   */
  public minCodingUnitSize?: MinCodingUnitSize;

  /**
   * Use multiple worker threads to measure the estimated cost of each frame within the lookahead. The higher this parameter, the less accurate the frame costs will be which will result in less accurate B-frame and scene-cut decisions. Valid range: 0 - 16
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public lookaheadSlices?: number;

  /**
   * If enabled, limit references per depth, CU or both.
   * @type {LimitReferences}
   * @memberof H265VideoConfiguration
   */
  public limitReferences?: LimitReferences;

  /**
   * Enable analysis of rectangular motion partitions Nx2N and 2NxN.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public rectangularMotionPartitionsAnalysis?: boolean;

  /**
   * Enable analysis of asymmetric motion partitions.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public asymetricMotionPartitionsAnalysis?: boolean;

  /**
   * When enabled, will limit modes analyzed for each CU using cost metrics from the 4 sub-CUs. This can significantly improve performance when `rectangularMotionPartitionsAnalysis` and/or `asymetricMotionPartitionsAnalysis` are enabled at minimal compression efficiency loss.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public limitModes?: boolean;

  /**
   * Maximum number of neighbor (spatial and temporal) candidate blocks that the encoder may consider for merging motion predictions. Valid range: 1 - 5
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public maxMerge?: number;

  /**
   * Measure 2Nx2N merge candidates first; if no residual is found, additional modes at that depth are not analysed.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public earlySkip?: boolean;

  /**
   * If enabled exits early from CU depth recursion. When a skip CU is found, additional heuristics are used to decide whether to terminate recursion.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public recursionSkip?: boolean;

  /**
   * Enable faster search method for angular intra predictions.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public fastSearchForAngularIntraPredictions?: boolean;

  /**
   * Enables the evaluation of intra modes in B slices.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public evaluationOfIntraModesInBSlices?: boolean;

  /**
   * Hide sign bit of one coefficient per coding tree unit.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public signHide?: boolean;

  /**
   * Level of rate-distortion optimization in mode decision. The lower the value the faster the encode, the higher the value higher the compression efficiency. Valid range: 0 - 4
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public rateDistortionLevelForModeDecision?: number;

  /**
   * Specify the amount of rate-distortion analysis to use within quantization.
   * @type {RateDistortionLevelForQuantization}
   * @memberof H265VideoConfiguration
   */
  public rateDistortionLevelForQuantization?: RateDistortionLevelForQuantization;

  /**
   * Sets the minimum of quantization factor. Valid value range: 0 - 69
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public qpMin?: number;

  /**
   * Sets the maximum of quantization factor. Valid value range: 0 - 69
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public qpMax?: number;

  /**
   * The encoder may begin encoding a row as soon as the row above it is at least two CTUs ahead in the encode process. Default is enabled.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public wavefrontParallelProcessing?: boolean;

  /**
   * Encode each incoming frame as multiple parallel slices that may be decoded independently. Default is 1.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public slices?: number;

  /**
   * Copy buffers of input picture in frame. Default is enabled.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public copyPicture?: boolean;

  /**
   * If high tier is disabled the encoder will attempt to encode only at the main tier. Default is enabled.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public levelHighTier?: boolean;

  /**
   * Enable skipping split rate distortion analysis when sum of split CU RD cost larger than one split CU RD cost for intra CU. Default disabled.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public skipSplitRateDistortionAnalysis?: boolean;

  /**
   * If enabled, consider lossless mode in CU RDO decisions. Default is disabled.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public codingUnitLossless?: boolean;

  /**
   * Enable evaluation of transform skip (bypass DCT but still use quantization) coding for 4x4 TU coded blocks. Default is NONE.
   * @type {TransformSkipMode}
   * @memberof H265VideoConfiguration
   */
  public transformSkip?: TransformSkipMode;

  /**
   * Enable QP based rate distortion refinement. Default is disabled.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public refineRateDistortionCost?: boolean;

  /**
   * Enables early exit from transform unit depth recursion, for inter coded blocks. Default is DISABLED.
   * @type {LimitTransformUnitDepthRecursionMode}
   * @memberof H265VideoConfiguration
   */
  public limitTransformUnitDepthRecursion?: LimitTransformUnitDepthRecursionMode;

  /**
   * An integer value, which denotes strength of noise reduction in intra CUs. Default 0.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public noiseReductionIntra?: number;

  /**
   * An integer value, which denotes strength of noise reduction in inter CUs. Default 0.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public noiseReductionInter?: number;

  /**
   * Penalty for 32x32 intra transform units in non-I slices. Default DISABLED.
   * @type {RateDistortionPenaltyMode}
   * @memberof H265VideoConfiguration
   */
  public rateDistortionPenalty?: RateDistortionPenaltyMode;

  /**
   * Penalty for 32x32 intra transform units in non-I slices. Default DISABLED.
   * @type {MaxTransformUnitSize}
   * @memberof H265VideoConfiguration
   */
  public maximumTransformUnitSize?: MaxTransformUnitSize;

  /**
   * Increases the RD level at points where quality drops due to VBV rate control enforcement. Default 0.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public dynamicRateDistortionStrength?: number;

  /**
   * It is used for mode selection during analysis of CTUs and can achieve significant gain in terms of objective quality metrics SSIM and PSNR. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public ssimRateDistortionOptimization?: boolean;

  /**
   * Enable temporal motion vector predictors in P and B slices. Default true.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public temporalMotionVectorPredictors?: boolean;

  /**
   * Enable motion estimation with source frame pixels, in this mode, motion estimation can be computed independently. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public analyzeSourceFramePixels?: boolean;

  /**
   * Enable strong intra smoothing for 32x32 intra blocks. Default true.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public strongIntraSmoothing?: boolean;

  /**
   * When generating intra predictions for blocks in inter slices, only intra-coded reference pixels are used. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public constrainedIntraPrediction?: boolean;

  /**
   * This value represents the percentage difference between the inter cost and intra cost of a frame used in scenecut detection. Default 5.0.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public scenecutBias?: number;

  /**
   * Number of RADL pictures allowed infront of IDR. Requires fixed keyframe interval. Valid values 0 - `bframes`. Default 0.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public allowedRADLBeforeIDR?: number;

  /**
   * Number of frames for GOP boundary decision lookahead. Valid values 0 - `rcLookahead`. Default 0
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public gopLookahead?: number;

  /**
   * Bias towards B frames in slicetype decision. The higher the bias the more likely the encoder is to use B frames. Default 0
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public bframeBias?: number;

  /**
   * Force the encoder to flush frames. Default is DISABLED.
   * @type {ForceFlushMode}
   * @memberof H265VideoConfiguration
   */
  public forceFlush?: ForceFlushMode;

  /**
   * Adjust the strength of the adaptive quantization offsets. Default 1.0.
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public adaptiveQuantizationStrength?: number;

  /**
   * Adjust the AQ offsets based on the relative motion of each block with respect to the motion of the frame. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public adaptiveQuantizationMotion?: boolean;

  /**
   * Enable adaptive quantization for sub-CTUs. This parameter specifies the minimum CU size at which QP can be adjusted. Default is same as `maxCTUSize`.
   * @type {QuantizationGroupSize}
   * @memberof H265VideoConfiguration
   */
  public quantizationGroupSize?: QuantizationGroupSize;

  /**
   * Enables stricter conditions to control bitrate deviance from the target bitrate in ABR mode. Bit rate adherence is prioritised over quality. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public strictCbr?: boolean;

  /**
   * Offset of Cb chroma QP from the luma QP selected by rate control. This is a general way to spend more or less bits on the chroma channel. Default 0
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public qpOffsetChromaCb?: number;

  /**
   * Offset of Cr chroma QP from the luma QP selected by rate control. This is a general way to spend more or less bits on the chroma channel. Default 0
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public qpOffsetChromaCr?: number;

  /**
   * QP ratio factor between I and P slices. This ratio is used in all of the rate control modes. Default 1.4
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public ipRatio?: number;

  /**
   * QP ratio factor between P and B slices. This ratio is used in all of the rate control modes. Default 1.3
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public pbRatio?: number;

  /**
   * Sets the quantizer curve compression factor. It weights the frame quantizer based on the complexity of residual (measured by lookahead). Default 0.6
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public quantizerCurveCompressionFactor?: number;

  /**
   * The maximum single adjustment in QP allowed to rate control. Default 4
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public qpStep?: number;

  /**
   * Enables a specialised ratecontrol algorithm for film grain content. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public grainOptimizedRateControl?: boolean;

  /**
   * Temporally blur quants. Default 0.5
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public blurQuants?: number;

  /**
   * Temporally blur complexity. Default 20.0
   * @type {number}
   * @memberof H265VideoConfiguration
   */
  public blurComplexity?: number;

  /**
   * Specify how to handle depencency between SAO and deblocking filter. When enabled, non-deblocked pixels are used for SAO analysis. When disabled, SAO analysis skips the right/bottom boundary areas. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public saoNonDeblock?: boolean;

  /**
   * Limit SAO filter computation by early terminating SAO process based on inter prediction mode, CTU spatial-domain correlations, and relations between luma and chroma. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public limitSao?: boolean;

  /**
   * Will use low-pass subband dct approximation instead of the standard dct for 16x16 and 32x32 blocks. Default false.
   * @type {boolean}
   * @memberof H265VideoConfiguration
   */
  public lowpassDct?: boolean;

  /**
   * Defines whether CEA 608/708 subtitles are extracted from the input video stream
   * @type {Cea608708SubtitleConfiguration}
   * @memberof H265VideoConfiguration
   */
  public cea608708SubtitleConfig?: Cea608708SubtitleConfiguration;

  constructor(obj?: Partial<H265VideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.presetConfiguration = map(obj.presetConfiguration);
    this.crf = map(obj.crf);
    this.profile = map(obj.profile);
    this.bframes = map(obj.bframes);
    this.refFrames = map(obj.refFrames);
    this.qp = map(obj.qp);
    this.maxBitrate = map(obj.maxBitrate);
    this.minBitrate = map(obj.minBitrate);
    this.bufsize = map(obj.bufsize);
    this.minGop = map(obj.minGop);
    this.maxGop = map(obj.maxGop);
    this.openGop = map(obj.openGop);
    this.minKeyframeInterval = map(obj.minKeyframeInterval);
    this.maxKeyframeInterval = map(obj.maxKeyframeInterval);
    this.level = map(obj.level);
    this.rcLookahead = map(obj.rcLookahead);
    this.bAdapt = map(obj.bAdapt);
    this.maxCTUSize = map(obj.maxCTUSize);
    this.tuIntraDepth = map(obj.tuIntraDepth);
    this.tuInterDepth = map(obj.tuInterDepth);
    this.motionSearch = map(obj.motionSearch);
    this.subMe = map(obj.subMe);
    this.motionSearchRange = map(obj.motionSearchRange);
    this.weightPredictionOnPSlice = map(obj.weightPredictionOnPSlice);
    this.weightPredictionOnBSlice = map(obj.weightPredictionOnBSlice);
    this.sao = map(obj.sao);
    this.masterDisplay = map(obj.masterDisplay);
    this.maxContentLightLevel = map(obj.maxContentLightLevel);
    this.maxPictureAverageLightLevel = map(obj.maxPictureAverageLightLevel);
    this.hdr = map(obj.hdr);
    this.sceneCutThreshold = map(obj.sceneCutThreshold);
    this.adaptiveQuantizationMode = map(obj.adaptiveQuantizationMode);
    this.enableHlgSignaling = map(obj.enableHlgSignaling);
    this.videoFormat = map(obj.videoFormat);
    this.psyRateDistortionOptimization = map(obj.psyRateDistortionOptimization);
    this.psyRateDistortionOptimizedQuantization = map(obj.psyRateDistortionOptimizedQuantization);
    this.enableHrdSignaling = map(obj.enableHrdSignaling);
    this.cutree = map(obj.cutree);
    this.minCodingUnitSize = map(obj.minCodingUnitSize);
    this.lookaheadSlices = map(obj.lookaheadSlices);
    this.limitReferences = map(obj.limitReferences);
    this.rectangularMotionPartitionsAnalysis = map(obj.rectangularMotionPartitionsAnalysis);
    this.asymetricMotionPartitionsAnalysis = map(obj.asymetricMotionPartitionsAnalysis);
    this.limitModes = map(obj.limitModes);
    this.maxMerge = map(obj.maxMerge);
    this.earlySkip = map(obj.earlySkip);
    this.recursionSkip = map(obj.recursionSkip);
    this.fastSearchForAngularIntraPredictions = map(obj.fastSearchForAngularIntraPredictions);
    this.evaluationOfIntraModesInBSlices = map(obj.evaluationOfIntraModesInBSlices);
    this.signHide = map(obj.signHide);
    this.rateDistortionLevelForModeDecision = map(obj.rateDistortionLevelForModeDecision);
    this.rateDistortionLevelForQuantization = map(obj.rateDistortionLevelForQuantization);
    this.qpMin = map(obj.qpMin);
    this.qpMax = map(obj.qpMax);
    this.wavefrontParallelProcessing = map(obj.wavefrontParallelProcessing);
    this.slices = map(obj.slices);
    this.copyPicture = map(obj.copyPicture);
    this.levelHighTier = map(obj.levelHighTier);
    this.skipSplitRateDistortionAnalysis = map(obj.skipSplitRateDistortionAnalysis);
    this.codingUnitLossless = map(obj.codingUnitLossless);
    this.transformSkip = map(obj.transformSkip);
    this.refineRateDistortionCost = map(obj.refineRateDistortionCost);
    this.limitTransformUnitDepthRecursion = map(obj.limitTransformUnitDepthRecursion);
    this.noiseReductionIntra = map(obj.noiseReductionIntra);
    this.noiseReductionInter = map(obj.noiseReductionInter);
    this.rateDistortionPenalty = map(obj.rateDistortionPenalty);
    this.maximumTransformUnitSize = map(obj.maximumTransformUnitSize);
    this.dynamicRateDistortionStrength = map(obj.dynamicRateDistortionStrength);
    this.ssimRateDistortionOptimization = map(obj.ssimRateDistortionOptimization);
    this.temporalMotionVectorPredictors = map(obj.temporalMotionVectorPredictors);
    this.analyzeSourceFramePixels = map(obj.analyzeSourceFramePixels);
    this.strongIntraSmoothing = map(obj.strongIntraSmoothing);
    this.constrainedIntraPrediction = map(obj.constrainedIntraPrediction);
    this.scenecutBias = map(obj.scenecutBias);
    this.allowedRADLBeforeIDR = map(obj.allowedRADLBeforeIDR);
    this.gopLookahead = map(obj.gopLookahead);
    this.bframeBias = map(obj.bframeBias);
    this.forceFlush = map(obj.forceFlush);
    this.adaptiveQuantizationStrength = map(obj.adaptiveQuantizationStrength);
    this.adaptiveQuantizationMotion = map(obj.adaptiveQuantizationMotion);
    this.quantizationGroupSize = map(obj.quantizationGroupSize);
    this.strictCbr = map(obj.strictCbr);
    this.qpOffsetChromaCb = map(obj.qpOffsetChromaCb);
    this.qpOffsetChromaCr = map(obj.qpOffsetChromaCr);
    this.ipRatio = map(obj.ipRatio);
    this.pbRatio = map(obj.pbRatio);
    this.quantizerCurveCompressionFactor = map(obj.quantizerCurveCompressionFactor);
    this.qpStep = map(obj.qpStep);
    this.grainOptimizedRateControl = map(obj.grainOptimizedRateControl);
    this.blurQuants = map(obj.blurQuants);
    this.blurComplexity = map(obj.blurComplexity);
    this.saoNonDeblock = map(obj.saoNonDeblock);
    this.limitSao = map(obj.limitSao);
    this.lowpassDct = map(obj.lowpassDct);
    this.cea608708SubtitleConfig = map(obj.cea608708SubtitleConfig, Cea608708SubtitleConfiguration);
  }
}

export default H265VideoConfiguration;

