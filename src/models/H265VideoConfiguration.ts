import {map} from '../common/Mapper';
import AdaptiveQuantMode from './AdaptiveQuantMode';
import BAdapt from './BAdapt';
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
  public type: 'H265' = 'H265';

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

  constructor(obj: Partial<H265VideoConfiguration>) {
    super(obj);

    this.presetConfiguration = obj.presetConfiguration;
    this.crf = obj.crf;
    this.profile = obj.profile;
    this.bframes = obj.bframes;
    this.refFrames = obj.refFrames;
    this.qp = obj.qp;
    this.maxBitrate = obj.maxBitrate;
    this.minBitrate = obj.minBitrate;
    this.bufsize = obj.bufsize;
    this.minGop = obj.minGop;
    this.maxGop = obj.maxGop;
    this.openGop = obj.openGop;
    this.minKeyframeInterval = obj.minKeyframeInterval;
    this.maxKeyframeInterval = obj.maxKeyframeInterval;
    this.level = obj.level;
    this.rcLookahead = obj.rcLookahead;
    this.bAdapt = obj.bAdapt;
    this.maxCTUSize = obj.maxCTUSize;
    this.tuIntraDepth = obj.tuIntraDepth;
    this.tuInterDepth = obj.tuInterDepth;
    this.motionSearch = obj.motionSearch;
    this.subMe = obj.subMe;
    this.motionSearchRange = obj.motionSearchRange;
    this.weightPredictionOnPSlice = obj.weightPredictionOnPSlice;
    this.weightPredictionOnBSlice = obj.weightPredictionOnBSlice;
    this.sao = obj.sao;
    this.masterDisplay = obj.masterDisplay;
    this.maxContentLightLevel = obj.maxContentLightLevel;
    this.maxPictureAverageLightLevel = obj.maxPictureAverageLightLevel;
    this.hdr = obj.hdr;
    this.sceneCutThreshold = obj.sceneCutThreshold;
    this.adaptiveQuantizationMode = obj.adaptiveQuantizationMode;
    this.enableHlgSignaling = obj.enableHlgSignaling;
    this.videoFormat = obj.videoFormat;
    this.psyRateDistortionOptimization = obj.psyRateDistortionOptimization;
    this.psyRateDistortionOptimizedQuantization = obj.psyRateDistortionOptimizedQuantization;
    this.enableHrdSignaling = obj.enableHrdSignaling;
    this.cutree = obj.cutree;
    this.minCodingUnitSize = obj.minCodingUnitSize;
    this.lookaheadSlices = obj.lookaheadSlices;
    this.limitReferences = obj.limitReferences;
    this.rectangularMotionPartitionsAnalysis = obj.rectangularMotionPartitionsAnalysis;
    this.asymetricMotionPartitionsAnalysis = obj.asymetricMotionPartitionsAnalysis;
    this.limitModes = obj.limitModes;
    this.maxMerge = obj.maxMerge;
    this.earlySkip = obj.earlySkip;
    this.recursionSkip = obj.recursionSkip;
    this.fastSearchForAngularIntraPredictions = obj.fastSearchForAngularIntraPredictions;
    this.evaluationOfIntraModesInBSlices = obj.evaluationOfIntraModesInBSlices;
    this.signHide = obj.signHide;
    this.rateDistortionLevelForModeDecision = obj.rateDistortionLevelForModeDecision;
    this.rateDistortionLevelForQuantization = obj.rateDistortionLevelForQuantization;
    this.qpMin = obj.qpMin;
    this.qpMax = obj.qpMax;
    this.wavefrontParallelProcessing = obj.wavefrontParallelProcessing;
    this.slices = obj.slices;
    this.copyPicture = obj.copyPicture;
    this.levelHighTier = obj.levelHighTier;
    this.skipSplitRateDistortionAnalysis = obj.skipSplitRateDistortionAnalysis;
    this.codingUnitLossless = obj.codingUnitLossless;
    this.transformSkip = obj.transformSkip;
    this.refineRateDistortionCost = obj.refineRateDistortionCost;
    this.limitTransformUnitDepthRecursion = obj.limitTransformUnitDepthRecursion;
    this.noiseReductionIntra = obj.noiseReductionIntra;
    this.noiseReductionInter = obj.noiseReductionInter;
    this.rateDistortionPenalty = obj.rateDistortionPenalty;
    this.maximumTransformUnitSize = obj.maximumTransformUnitSize;
    this.dynamicRateDistortionStrength = obj.dynamicRateDistortionStrength;
    this.ssimRateDistortionOptimization = obj.ssimRateDistortionOptimization;
    this.temporalMotionVectorPredictors = obj.temporalMotionVectorPredictors;
    this.analyzeSourceFramePixels = obj.analyzeSourceFramePixels;
    this.strongIntraSmoothing = obj.strongIntraSmoothing;
    this.constrainedIntraPrediction = obj.constrainedIntraPrediction;
    this.scenecutBias = obj.scenecutBias;
    this.allowedRADLBeforeIDR = obj.allowedRADLBeforeIDR;
    this.gopLookahead = obj.gopLookahead;
    this.bframeBias = obj.bframeBias;
    this.forceFlush = obj.forceFlush;
    this.adaptiveQuantizationStrength = obj.adaptiveQuantizationStrength;
    this.adaptiveQuantizationMotion = obj.adaptiveQuantizationMotion;
    this.quantizationGroupSize = obj.quantizationGroupSize;
    this.strictCbr = obj.strictCbr;
    this.qpOffsetChromaCb = obj.qpOffsetChromaCb;
    this.qpOffsetChromaCr = obj.qpOffsetChromaCr;
    this.ipRatio = obj.ipRatio;
    this.pbRatio = obj.pbRatio;
    this.quantizerCurveCompressionFactor = obj.quantizerCurveCompressionFactor;
    this.qpStep = obj.qpStep;
    this.grainOptimizedRateControl = obj.grainOptimizedRateControl;
    this.blurQuants = obj.blurQuants;
    this.blurComplexity = obj.blurComplexity;
    this.saoNonDeblock = obj.saoNonDeblock;
    this.limitSao = obj.limitSao;
    this.lowpassDct = obj.lowpassDct;
  }
}

export default H265VideoConfiguration;

