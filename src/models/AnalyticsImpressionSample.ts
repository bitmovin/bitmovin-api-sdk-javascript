import {map, mapArray} from '../common/Mapper';
import AnalyticsVideoStartFailedReason from './AnalyticsVideoStartFailedReason';

/**
 * @export
 * @class AnalyticsImpressionSample
 */
export class AnalyticsImpressionSample {
  /**
   * Is an ad playing. 0 indicates no, 1 indicates yes
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public ad?: number;

  /**
   * Collector version
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public analyticsVersion?: string;

  /**
   * Audio Bitrate
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public audioBitrate?: number;

  /**
   * Audio codec of currently playing stream
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public audioCodec?: string;

  /**
   * Selected audio language
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public audioLanguage?: string;

  /**
   * Autoplay enabled
   * @type {boolean}
   * @memberof AnalyticsImpressionSample
   */
  public autoplay?: boolean;

  /**
   * Browser name
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public browser?: string;

  /**
   * Browser version major
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public browserVersionMajor?: string;

  /**
   * Browser version minor
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public browserVersionMinor?: string;

  /**
   * Milliseconds the player buffered
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public buffered?: number;

  /**
   * CDN Provider
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public cdnProvider?: string;

  /**
   * City
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public city?: string;

  /**
   * Current time of the client
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public clientTime?: number;

  /**
   * Country
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public country?: string;

  /**
   * Custom user ID
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public customUserId?: string;

  /**
   * Free form data set via the customData1 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public customData1?: string;

  /**
   * Free form data set via the customData2 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public customData2?: string;

  /**
   * Free form data set via the customData3 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public customData3?: string;

  /**
   * Free form data set via the customData4 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public customData4?: string;

  /**
   * Free form data set via the customData5 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public customData5?: string;

  /**
   * Free form data set via the customData6 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public customData6?: string;

  /**
   * Free form data set via the customData7 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public customData7?: string;

  /**
   * Type of device (Desktop, Phone, Tablet)
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public deviceClass?: string;

  /**
   * Type of the device detected via User Agent
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public deviceType?: string;

  /**
   * Domain the player was loaded on (.www is stripped away)
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public domain?: string;

  /**
   * Time in milliseconds it took the DRM server to respond
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public drmLoadTime?: number;

  /**
   * DRM system used for this impression
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public drmType?: string;

  /**
   * Dropped frames during playback
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public droppedFrames?: number;

  /**
   * Duration of the sample in milliseconds
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public duration?: number;

  /**
   * Error code
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public errorCode?: number;

  /**
   * Error message
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public errorMessage?: string;

  /**
   * A/B test experiment name
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public experimentName?: string;

  /**
   * Random UUID that is used to identify a sessions (required)
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public impressionId?: string;

  /**
   * IP Address of the client
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public ipAddress?: string;

  /**
   * Is chromecast active
   * @type {boolean}
   * @memberof AnalyticsImpressionSample
   */
  public isCasting?: boolean;

  /**
   * Is the stream live or VoD
   * @type {boolean}
   * @memberof AnalyticsImpressionSample
   */
  public isLive?: boolean;

  /**
   * Is the player muted
   * @type {boolean}
   * @memberof AnalyticsImpressionSample
   */
  public isMuted?: boolean;

  /**
   * The users Internet Service Provider inferred via the IP address
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public isp?: string;

  /**
   * Language set in the browser
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public language?: string;

  /**
   * Analytics license key
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public licenseKey?: string;

  /**
   * URL of the HLS source
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public m3u8Url?: string;

  /**
   * URL of the DASH source
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public mpdUrl?: string;

  /**
   * Operating system
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public operatingsystem?: string;

  /**
   * Operating system version major
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public operatingsystemVersionMajor?: string;

  /**
   * Operating system version minor
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public operatingsystemVersionMinor?: string;

  /**
   * Time in milliseconds the page took to load
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public pageLoadTime?: number;

  /**
   * Player load type. 1 = Foreground, 2 = Background
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public pageLoadType?: number;

  /**
   * path on the website
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public path?: string;

  /**
   * Milliseconds the player was paused
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public paused?: number;

  /**
   * Platform the player is running on (web, android, ios)
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public platform?: string;

  /**
   * Milliseconds the player played
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public played?: number;

  /**
   * Video player being used for this session
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public player?: string;

  /**
   * Player license key
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public playerKey?: string;

  /**
   * Time in milliseconds the player took to start up
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public playerStartuptime?: number;

  /**
   * HTML or native playback
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public playerTech?: string;

  /**
   * Player software version
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public playerVersion?: string;

  /**
   * URL of the progressive MP4 source
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public progUrl?: string;

  /**
   * Geographic region (ISO 3166-2 code)
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public region?: string;

  /**
   * Screen as reported by the browser
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public screenHeight?: number;

  /**
   * Screen as reported by the browser
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public screenWidth?: number;

  /**
   * Milliseconds it took the player to seek
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public seeked?: number;

  /**
   * Number of video segments downloaded
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public segmentDownloadCount?: number;

  /**
   * Size of downloaded video segments (byte)
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public segmentDownloadSize?: number;

  /**
   * Cumulative time needed to download video segments
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public segmentDownloadTime?: number;

  /**
   * Sequence number of the sample in which it occured in the session
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public sequenceNumber?: number;

  /**
   * Video size (FULLSCREEN or WINDOW)
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public size?: string;

  /**
   * Combination of player- and videoStartuptime
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public startuptime?: number;

  /**
   * Internal state of the analytics state machine
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public state?: string;

  /**
   * Format of the stream (HLS, DASH, Progressive MP4)
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public streamFormat?: string;

  /**
   * Subtitle enabled
   * @type {boolean}
   * @memberof AnalyticsImpressionSample
   */
  public subtitleEnabled?: boolean;

  /**
   * Selected subtitle language
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public subtitleLanguage?: string;

  /**
   * Video codecs supported by platform/browser
   * @type {string[]}
   * @memberof AnalyticsImpressionSample
   */
  public supportedVideoCodes?: string[];

  /**
   * Current time in milliseconds
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public time?: number;

  /**
   * ID that is persisted across sessions to identify a browser
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public userId?: string;

  /**
   * Bitrate of the played back video rendition
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videoBitrate?: number;

  /**
   * Video codec of current stream
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public videoCodec?: string;

  /**
   * Length of the video in milliseconds
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videoDuration?: number;

  /**
   * ID of the video as configured via the analytics config
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public videoId?: string;

  /**
   * Free form human readable video title as configured in the analytics config
   * @type {string}
   * @memberof AnalyticsImpressionSample
   */
  public videoTitle?: string;

  /**
   * Resolution of the played back Video Rendition
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videoPlaybackHeight?: number;

  /**
   * Resolution of the played back Video Rendition
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videoPlaybackWidth?: number;

  /**
   * Time in milliseconds it took to start video playback
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videoStartuptime?: number;

  /**
   * End time of the sample in the video (milliseconds)
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videotimeEnd?: number;

  /**
   * Start time of the sample in the video (milliseconds)
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videotimeStart?: number;

  /**
   * Height of the video player on the page
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videoWindowHeight?: number;

  /**
   * Width of the video player on the page
   * @type {number}
   * @memberof AnalyticsImpressionSample
   */
  public videoWindowWidth?: number;

  /**
   * True if starting the video failed
   * @type {boolean}
   * @memberof AnalyticsImpressionSample
   */
  public videostartFailed?: boolean;

  /**
   * @type {AnalyticsVideoStartFailedReason}
   * @memberof AnalyticsImpressionSample
   */
  public videostartFailedReason?: AnalyticsVideoStartFailedReason;

  constructor(obj?: Partial<AnalyticsImpressionSample>) {
    if(!obj) {
      return;
    }
    this.ad = map(obj.ad);
    this.analyticsVersion = map(obj.analyticsVersion);
    this.audioBitrate = map(obj.audioBitrate);
    this.audioCodec = map(obj.audioCodec);
    this.audioLanguage = map(obj.audioLanguage);
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
    this.customData6 = map(obj.customData6);
    this.customData7 = map(obj.customData7);
    this.deviceClass = map(obj.deviceClass);
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
    this.m3u8Url = map(obj.m3u8Url);
    this.mpdUrl = map(obj.mpdUrl);
    this.operatingsystem = map(obj.operatingsystem);
    this.operatingsystemVersionMajor = map(obj.operatingsystemVersionMajor);
    this.operatingsystemVersionMinor = map(obj.operatingsystemVersionMinor);
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
    this.progUrl = map(obj.progUrl);
    this.region = map(obj.region);
    this.screenHeight = map(obj.screenHeight);
    this.screenWidth = map(obj.screenWidth);
    this.seeked = map(obj.seeked);
    this.segmentDownloadCount = map(obj.segmentDownloadCount);
    this.segmentDownloadSize = map(obj.segmentDownloadSize);
    this.segmentDownloadTime = map(obj.segmentDownloadTime);
    this.sequenceNumber = map(obj.sequenceNumber);
    this.size = map(obj.size);
    this.startuptime = map(obj.startuptime);
    this.state = map(obj.state);
    this.streamFormat = map(obj.streamFormat);
    this.subtitleEnabled = map(obj.subtitleEnabled);
    this.subtitleLanguage = map(obj.subtitleLanguage);
    this.supportedVideoCodes = mapArray(obj.supportedVideoCodes);
    this.time = map(obj.time);
    this.userId = map(obj.userId);
    this.videoBitrate = map(obj.videoBitrate);
    this.videoCodec = map(obj.videoCodec);
    this.videoDuration = map(obj.videoDuration);
    this.videoId = map(obj.videoId);
    this.videoTitle = map(obj.videoTitle);
    this.videoPlaybackHeight = map(obj.videoPlaybackHeight);
    this.videoPlaybackWidth = map(obj.videoPlaybackWidth);
    this.videoStartuptime = map(obj.videoStartuptime);
    this.videotimeEnd = map(obj.videotimeEnd);
    this.videotimeStart = map(obj.videotimeStart);
    this.videoWindowHeight = map(obj.videoWindowHeight);
    this.videoWindowWidth = map(obj.videoWindowWidth);
    this.videostartFailed = map(obj.videostartFailed);
    this.videostartFailedReason = map(obj.videostartFailedReason);
  }
}

export default AnalyticsImpressionSample;

