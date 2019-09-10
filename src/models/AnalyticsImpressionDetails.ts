import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class AnalyticsImpressionDetails
 */
export class AnalyticsImpressionDetails extends BitmovinResponse {
  /**
   * Is an ad playing. 0 indicates no, 1 indicates yes
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public ad?: number;

  /**
   * Collector version
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public analyticsVersion?: string;

  /**
   * Autonomous System Number inferred from the IP address
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public asn?: number;

  /**
   * Audio Bitrate
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public audioBitrate?: number;

  /**
   * Autoplay enabled
   * @type {boolean}
   * @memberof AnalyticsImpressionDetails
   */
  public autoplay?: boolean;

  /**
   * Browser name
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public browser?: string;

  /**
   * Browser version major
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public browserVersionMajor?: string;

  /**
   * Browser version minor
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public browserVersionMinor?: string;

  /**
   * Millisecond the player buffered
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public buffered?: number;

  /**
   * CDN Provider
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public cdnProvider?: string;

  /**
   * City
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public city?: string;

  /**
   * Current time of the client
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public clientTime?: number;

  /**
   * Country
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public country?: string;

  /**
   * Custom user ID
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public customUserId?: string;

  /**
   * Free form data set via the customData1 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public customData1?: string;

  /**
   * Free form data set via the customData2 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public customData2?: string;

  /**
   * Free form data set via the customData3 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public customData3?: string;

  /**
   * Free form data set via the customData4 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public customData4?: string;

  /**
   * Free form data set via the customData5 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public customData5?: string;

  /**
   * Type of the device detected via User Agent
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public deviceType?: string;

  /**
   * Domain the player was loaded on (.www is stripped away)
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public domain?: string;

  /**
   * Time in milliseconds it took the DRM server to respond
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public drmLoadTime?: number;

  /**
   * DRM system used for this impression
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public drmType?: string;

  /**
   * Dropped frames during playback
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public droppedFrames?: number;

  /**
   * Duration of the sample in milliseconds
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public duration?: number;

  /**
   * Error code
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public errorCode?: number;

  /**
   * Error message
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public errorMessage?: string;

  /**
   * A/B test experiment name
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public experimentName?: string;

  /**
   * Random UUID that is used to identify a sessions (required)
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public impressionId?: string;

  /**
   * IP Address of the client
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public ipAddress?: string;

  /**
   * Is chromecast active
   * @type {boolean}
   * @memberof AnalyticsImpressionDetails
   */
  public isCasting?: boolean;

  /**
   * Is the stream live or VoD
   * @type {boolean}
   * @memberof AnalyticsImpressionDetails
   */
  public isLive?: boolean;

  /**
   * Is the player muted
   * @type {boolean}
   * @memberof AnalyticsImpressionDetails
   */
  public isMuted?: boolean;

  /**
   * The users Internet Service Provider inferred via the IP address
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public isp?: string;

  /**
   * Language set in the browser
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public language?: string;

  /**
   * Analytics license key
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public licenseKey?: string;

  /**
   * Operating system
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public operatingSystem?: string;

  /**
   * Operating system version major
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public operatingSystemVersionMajor?: string;

  /**
   * Operating system version minor
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public operatingSystemVersionMinor?: string;

  /**
   * Time in milliseconds the page took to load
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public pageLoadTime?: number;

  /**
   * Player load type. 1 = Foreground, 2 = Background
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public pageLoadType?: number;

  /**
   * path on the website
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public path?: string;

  /**
   * Milliseconds the player was paused
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public paused?: number;

  /**
   * Platform the player is running on (web, android, ios)
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public platform?: string;

  /**
   * Milliseconds the player played
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public played?: number;

  /**
   * Video player being used for this session
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public player?: string;

  /**
   * Player license key
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public playerKey?: string;

  /**
   * Time in milliseconds the player took to start up
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public playerStartuptime?: number;

  /**
   * HTML or native playback
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public playerTech?: string;

  /**
   * Player software version
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public playerVersion?: string;

  /**
   * Geographic region (ISO 3166-2 code)
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public region?: string;

  /**
   * Screen as reported by the browser
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public screenHeight?: number;

  /**
   * Screen as reported by the browser
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public screenWidth?: number;

  /**
   * Milliseconds it took the player to seek
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public seeked?: number;

  /**
   * Sequence number of the sample in which it occured in the session
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public sequenceNumber?: number;

  /**
   * Video size (FULLSCREEN or WINDOW)
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public size?: string;

  /**
   * Combination of player- and videoStartuptime
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public startupTime?: number;

  /**
   * Internal state of the analytics state machine
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public state?: string;

  /**
   * Format of the stream (HLS, DASH, Progressive MP4)
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public streamFormat?: string;

  /**
   * Current time in milliseconds
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public time?: number;

  /**
   * ID that is persisted across sessions to identify a browser
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public userId?: string;

  /**
   * Bitrate of the played back video rendition
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videoBitrate?: number;

  /**
   * Length of the video in milliseconds
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videoDuration?: number;

  /**
   * ID of the video as configured via the analytics config
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public videoId?: string;

  /**
   * Free form human readable video title as configured in the analytics config
   * @type {string}
   * @memberof AnalyticsImpressionDetails
   */
  public videoTitle?: string;

  /**
   * Resolution of the played back Video Rendition
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videoPlaybackHeight?: number;

  /**
   * Resolution of the played back Video Rendition
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videoPlaybackWidth?: number;

  /**
   * Time in milliseconds it took to start video playback
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videoStartupTime?: number;

  /**
   * End time of the sample in the video (milliseconds)
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videotimeEnd?: number;

  /**
   * Start time of the sample in the video (milliseconds)
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videotimeStart?: number;

  /**
   * Height of the video player on the page
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videoWindowHeight?: number;

  /**
   * Width of the video player on the page
   * @type {number}
   * @memberof AnalyticsImpressionDetails
   */
  public videoWindowWidth?: number;

  constructor(obj?: Partial<AnalyticsImpressionDetails>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.ad = map(obj.ad);
    this.analyticsVersion = map(obj.analyticsVersion);
    this.asn = map(obj.asn);
    this.audioBitrate = map(obj.audioBitrate);
    this.autoplay = map(obj.autoplay);
    this.browser = map(obj.browser);
    this.browserVersionMajor = map(obj.browserVersionMajor);
    this.browserVersionMinor = map(obj.browserVersionMinor);
    this.buffered = map(obj.buffered);
    this.cdnProvider = map(obj.cdnProvider);
    this.city = map(obj.city);
    this.clientTime = map(obj.clientTime);
    this.country = map(obj.country);
    this.customUserId = map(obj.customUserId);
    this.customData1 = map(obj.customData1);
    this.customData2 = map(obj.customData2);
    this.customData3 = map(obj.customData3);
    this.customData4 = map(obj.customData4);
    this.customData5 = map(obj.customData5);
    this.deviceType = map(obj.deviceType);
    this.domain = map(obj.domain);
    this.drmLoadTime = map(obj.drmLoadTime);
    this.drmType = map(obj.drmType);
    this.droppedFrames = map(obj.droppedFrames);
    this.duration = map(obj.duration);
    this.errorCode = map(obj.errorCode);
    this.errorMessage = map(obj.errorMessage);
    this.experimentName = map(obj.experimentName);
    this.impressionId = map(obj.impressionId);
    this.ipAddress = map(obj.ipAddress);
    this.isCasting = map(obj.isCasting);
    this.isLive = map(obj.isLive);
    this.isMuted = map(obj.isMuted);
    this.isp = map(obj.isp);
    this.language = map(obj.language);
    this.licenseKey = map(obj.licenseKey);
    this.operatingSystem = map(obj.operatingSystem);
    this.operatingSystemVersionMajor = map(obj.operatingSystemVersionMajor);
    this.operatingSystemVersionMinor = map(obj.operatingSystemVersionMinor);
    this.pageLoadTime = map(obj.pageLoadTime);
    this.pageLoadType = map(obj.pageLoadType);
    this.path = map(obj.path);
    this.paused = map(obj.paused);
    this.platform = map(obj.platform);
    this.played = map(obj.played);
    this.player = map(obj.player);
    this.playerKey = map(obj.playerKey);
    this.playerStartuptime = map(obj.playerStartuptime);
    this.playerTech = map(obj.playerTech);
    this.playerVersion = map(obj.playerVersion);
    this.region = map(obj.region);
    this.screenHeight = map(obj.screenHeight);
    this.screenWidth = map(obj.screenWidth);
    this.seeked = map(obj.seeked);
    this.sequenceNumber = map(obj.sequenceNumber);
    this.size = map(obj.size);
    this.startupTime = map(obj.startupTime);
    this.state = map(obj.state);
    this.streamFormat = map(obj.streamFormat);
    this.time = map(obj.time);
    this.userId = map(obj.userId);
    this.videoBitrate = map(obj.videoBitrate);
    this.videoDuration = map(obj.videoDuration);
    this.videoId = map(obj.videoId);
    this.videoTitle = map(obj.videoTitle);
    this.videoPlaybackHeight = map(obj.videoPlaybackHeight);
    this.videoPlaybackWidth = map(obj.videoPlaybackWidth);
    this.videoStartupTime = map(obj.videoStartupTime);
    this.videotimeEnd = map(obj.videotimeEnd);
    this.videotimeStart = map(obj.videotimeStart);
    this.videoWindowHeight = map(obj.videoWindowHeight);
    this.videoWindowWidth = map(obj.videoWindowWidth);
  }
}

export default AnalyticsImpressionDetails;

