import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsAdsImpressionSample
 */
export class AnalyticsAdsImpressionSample {
  /**
   * Ad click through url
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adClickthroughUrl?: string;

  /**
   * Ad description
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adDescription?: string;

  /**
   * Ad duration
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adDuration?: number;

  /**
   * Ad fallback index
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adFallbackIndex?: number;

  /**
   * Ad id
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adId?: string;

  /**
   * Ad id player
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adIdPlayer?: string;

  /**
   * Ad impression id
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adImpressionId?: string;

  /**
   * Ad is persistent
   * @type {boolean}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adIsPersistent?: boolean;

  /**
   * Ad module
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adModule?: string;

  /**
   * Ad module version
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adModuleVersion?: string;

  /**
   * Ad offset
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adOffset?: string;

  /**
   * Ad playback height
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adPlaybackHeight?: number;

  /**
   * Ad playback width
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adPlaybackWidth?: number;

  /**
   * Ad pod position
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adPodPosition?: number;

  /**
   * Ad position
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adPosition?: string;

  /**
   * Ad preload offset
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adPreloadOffset?: number;

  /**
   * Ad replace content duration
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adReplaceContentDuration?: number;

  /**
   * Ad schedule duration
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adScheduleTime?: number;

  /**
   * Ad skip after
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adSkipAfter?: number;

  /**
   * Ad is skippable
   * @type {boolean}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adSkippable?: boolean;

  /**
   * Ad startup time
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adStartupTime?: number;

  /**
   * Ad system
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adSystem?: string;

  /**
   * Ad tag path
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adTagPath?: string;

  /**
   * Ad system
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adTagServer?: string;

  /**
   * Ad tag type
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adTagType?: string;

  /**
   * Ad tag url
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adTagUrl?: string;

  /**
   * Ad title
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adTitle?: string;

  /**
   * Ad wrapper ads count
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public adWrapperAdsCount?: number;

  /**
   * Advertiser name
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public advertiserName?: string;

  /**
   * Analytics version
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public analyticsVersion?: string;

  /**
   * Api framework
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public apiFramework?: string;

  /**
   * Organization id
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public apiorgId?: string;

  /**
   * User id
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public apiuserId?: string;

  /**
   * Audio bitrate
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public audioBitrate?: number;

  /**
   * Is autoplay
   * @type {boolean}
   * @memberof AnalyticsAdsImpressionSample
   */
  public autoplay?: boolean;

  /**
   * Browser name
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public browser?: string;

  /**
   * Browser is bot
   * @type {boolean}
   * @memberof AnalyticsAdsImpressionSample
   */
  public browserIsBot?: boolean;

  /**
   * Browser version major
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public browserVersionMajor?: string;

  /**
   * Browser version minor
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public browserVersionMinor?: string;

  /**
   * CDN Provider
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public cdnProvider?: string;

  /**
   * City
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public city?: string;

  /**
   * Click percentage
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public clickPercentage?: number;

  /**
   * Click position
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public clickPosition?: number;

  /**
   * Clicked
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public clicked?: number;

  /**
   * Current time of the client
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public clientTime?: number;

  /**
   * Close percentage
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public closePercentage?: number;

  /**
   * Close position
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public closePosition?: number;

  /**
   * Closed
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public closed?: number;

  /**
   * Completed
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public completed?: number;

  /**
   * Country
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public country?: string;

  /**
   * Creative ad id
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public creativeAdId?: string;

  /**
   * Creative id
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public creativeId?: string;

  /**
   * Free form data set via the customData1 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData1?: string;

  /**
   * Free form data set via the customData2 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData2?: string;

  /**
   * Free form data set via the customData3 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData3?: string;

  /**
   * Free form data set via the customData4 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData4?: string;

  /**
   * Free form data set via the customData5 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData5?: string;

  /**
   * Free form data set via the customData6 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData6?: string;

  /**
   * Free form data set via the customData7 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData7?: string;

  /**
   * Free form data set via the customData8 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData8?: string;

  /**
   * Free form data set via the customData9 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData9?: string;

  /**
   * Free form data set via the customData10 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData10?: string;

  /**
   * Free form data set via the customData11 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData11?: string;

  /**
   * Free form data set via the customData12 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData12?: string;

  /**
   * Free form data set via the customData13 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData13?: string;

  /**
   * Free form data set via the customData14 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData14?: string;

  /**
   * Free form data set via the customData15 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData15?: string;

  /**
   * Free form data set via the customData16 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData16?: string;

  /**
   * Free form data set via the customData17 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData17?: string;

  /**
   * Free form data set via the customData18 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData18?: string;

  /**
   * Free form data set via the customData19 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData19?: string;

  /**
   * Free form data set via the customData20 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData20?: string;

  /**
   * Free form data set via the customData21 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData21?: string;

  /**
   * Free form data set via the customData22 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData22?: string;

  /**
   * Free form data set via the customData23 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData23?: string;

  /**
   * Free form data set via the customData24 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData24?: string;

  /**
   * Free form data set via the customData25 field in the analytics collector configuration
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customData25?: string;

  /**
   * Custom user ID
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public customUserId?: string;

  /**
   * Deal id
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public dealId?: string;

  /**
   * Type of device (Desktop, Phone, Tablet)
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public deviceClass?: string;

  /**
   * Type of the device detected via User Agent
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public deviceType?: string;

  /**
   * Domain the player was loaded on (.www is stripped away)
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public domain?: string;

  /**
   * Error code
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public errorCode?: number;

  /**
   * Error data
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public errorData?: string;

  /**
   * Error message
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public errorMessage?: string;

  /**
   * Error percentage
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public errorPercentage?: number;

  /**
   * Error position
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public errorPosition?: number;

  /**
   * Exit position
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public exitPosition?: number;

  /**
   * A/B test experiment name
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public experimentName?: string;

  /**
   * IP Address of the client
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public ipAddress?: string;

  /**
   * The users Internet Service Provider inferred via the IP address
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public isp?: string;

  /**
   * Language set in the browser
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public language?: string;

  /**
   * Analytics license key
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public licenseKey?: string;

  /**
   * Manifest download time
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public manifestDownloadTime?: number;

  /**
   * Media path
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public mediaPath?: string;

  /**
   * Media server
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public mediaServer?: string;

  /**
   * Media url
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public mediaUrl?: string;

  /**
   * Midpoint
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public midpoint?: number;

  /**
   * Minimum suggested duration
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public minSuggestedDuration?: number;

  /**
   * Operating system
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public operatingsystem?: string;

  /**
   * Operating system version major
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public operatingsystemVersionMajor?: string;

  /**
   * Operating system version minor
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public operatingsystemVersionMinor?: string;

  /**
   * Time in milliseconds the page took to load
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public pageLoadTime?: number;

  /**
   * Player load type. 1 = Foreground, 2 = Background
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public pageLoadType?: number;

  /**
   * path on the website
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public path?: string;

  /**
   * Percentage in viewport
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public percentageInViewport?: number;

  /**
   * Platform the player is running on (web, android, ios)
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public platform?: string;

  /**
   * Video player being used for this session
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public player?: string;

  /**
   * Player license key
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public playerKey?: string;

  /**
   * Time in milliseconds the player took to start up
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public playerStartuptime?: number;

  /**
   * HTML or native playback
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public playerTech?: string;

  /**
   * Player software version
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public playerVersion?: string;

  /**
   * Play percentage
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public playPercentage?: number;

  /**
   * Quartile 1
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public quartile1?: number;

  /**
   * Quartile 3
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public quartile3?: number;

  /**
   * Geographic region (ISO 3166-2 code)
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public region?: string;

  /**
   * Screen as reported by the browser
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public screenHeight?: number;

  /**
   * Screen as reported by the browser
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public screenWidth?: number;

  /**
   * Video size (FULLSCREEN or WINDOW)
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public size?: string;

  /**
   * Skip percentage
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public skipPercentage?: number;

  /**
   * Skip position
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public skipPosition?: number;

  /**
   * Skipped
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public skipped?: number;

  /**
   * Started
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public started?: number;

  /**
   * Format of the stream (HLS, DASH, Progressive MP4)
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public streamFormat?: string;

  /**
   * Survey url
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public surveyUrl?: string;

  /**
   * Current time in milliseconds
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public time?: number;

  /**
   * Time in viewport
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public timeInViewport?: number;

  /**
   * Time played
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public timePlayed?: number;

  /**
   * Universal ad id registry
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public universalAdIdRegistry?: string;

  /**
   * Universal ad id value
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public universalAdIdValue?: string;

  /**
   * ID that is persisted across sessions to identify a browser
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public userId?: string;

  /**
   * Bitrate of the played back video rendition
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public videoBitrate?: number;

  /**
   * ID of the video 
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public videoId?: string;

  /**
   * ID of related video impression
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public videoImpressionId?: string;

  /**
   * Free form human readable video ad title
   * @type {string}
   * @memberof AnalyticsAdsImpressionSample
   */
  public videoTitle?: string;

  /**
   * Height of the video player on the page
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public videoWindowHeight?: number;

  /**
   * Width of the video player on the page
   * @type {number}
   * @memberof AnalyticsAdsImpressionSample
   */
  public videoWindowWidth?: number;

  constructor(obj?: Partial<AnalyticsAdsImpressionSample>) {
    if(!obj) {
      return;
    }
    this.adClickthroughUrl = map(obj.adClickthroughUrl);
    this.adDescription = map(obj.adDescription);
    this.adDuration = map(obj.adDuration);
    this.adFallbackIndex = map(obj.adFallbackIndex);
    this.adId = map(obj.adId);
    this.adIdPlayer = map(obj.adIdPlayer);
    this.adImpressionId = map(obj.adImpressionId);
    this.adIsPersistent = map(obj.adIsPersistent);
    this.adModule = map(obj.adModule);
    this.adModuleVersion = map(obj.adModuleVersion);
    this.adOffset = map(obj.adOffset);
    this.adPlaybackHeight = map(obj.adPlaybackHeight);
    this.adPlaybackWidth = map(obj.adPlaybackWidth);
    this.adPodPosition = map(obj.adPodPosition);
    this.adPosition = map(obj.adPosition);
    this.adPreloadOffset = map(obj.adPreloadOffset);
    this.adReplaceContentDuration = map(obj.adReplaceContentDuration);
    this.adScheduleTime = map(obj.adScheduleTime);
    this.adSkipAfter = map(obj.adSkipAfter);
    this.adSkippable = map(obj.adSkippable);
    this.adStartupTime = map(obj.adStartupTime);
    this.adSystem = map(obj.adSystem);
    this.adTagPath = map(obj.adTagPath);
    this.adTagServer = map(obj.adTagServer);
    this.adTagType = map(obj.adTagType);
    this.adTagUrl = map(obj.adTagUrl);
    this.adTitle = map(obj.adTitle);
    this.adWrapperAdsCount = map(obj.adWrapperAdsCount);
    this.advertiserName = map(obj.advertiserName);
    this.analyticsVersion = map(obj.analyticsVersion);
    this.apiFramework = map(obj.apiFramework);
    this.apiorgId = map(obj.apiorgId);
    this.apiuserId = map(obj.apiuserId);
    this.audioBitrate = map(obj.audioBitrate);
    this.autoplay = map(obj.autoplay);
    this.browser = map(obj.browser);
    this.browserIsBot = map(obj.browserIsBot);
    this.browserVersionMajor = map(obj.browserVersionMajor);
    this.browserVersionMinor = map(obj.browserVersionMinor);
    this.cdnProvider = map(obj.cdnProvider);
    this.city = map(obj.city);
    this.clickPercentage = map(obj.clickPercentage);
    this.clickPosition = map(obj.clickPosition);
    this.clicked = map(obj.clicked);
    this.clientTime = map(obj.clientTime);
    this.closePercentage = map(obj.closePercentage);
    this.closePosition = map(obj.closePosition);
    this.closed = map(obj.closed);
    this.completed = map(obj.completed);
    this.country = map(obj.country);
    this.creativeAdId = map(obj.creativeAdId);
    this.creativeId = map(obj.creativeId);
    this.customData1 = map(obj.customData1);
    this.customData2 = map(obj.customData2);
    this.customData3 = map(obj.customData3);
    this.customData4 = map(obj.customData4);
    this.customData5 = map(obj.customData5);
    this.customData6 = map(obj.customData6);
    this.customData7 = map(obj.customData7);
    this.customData8 = map(obj.customData8);
    this.customData9 = map(obj.customData9);
    this.customData10 = map(obj.customData10);
    this.customData11 = map(obj.customData11);
    this.customData12 = map(obj.customData12);
    this.customData13 = map(obj.customData13);
    this.customData14 = map(obj.customData14);
    this.customData15 = map(obj.customData15);
    this.customData16 = map(obj.customData16);
    this.customData17 = map(obj.customData17);
    this.customData18 = map(obj.customData18);
    this.customData19 = map(obj.customData19);
    this.customData20 = map(obj.customData20);
    this.customData21 = map(obj.customData21);
    this.customData22 = map(obj.customData22);
    this.customData23 = map(obj.customData23);
    this.customData24 = map(obj.customData24);
    this.customData25 = map(obj.customData25);
    this.customUserId = map(obj.customUserId);
    this.dealId = map(obj.dealId);
    this.deviceClass = map(obj.deviceClass);
    this.deviceType = map(obj.deviceType);
    this.domain = map(obj.domain);
    this.errorCode = map(obj.errorCode);
    this.errorData = map(obj.errorData);
    this.errorMessage = map(obj.errorMessage);
    this.errorPercentage = map(obj.errorPercentage);
    this.errorPosition = map(obj.errorPosition);
    this.exitPosition = map(obj.exitPosition);
    this.experimentName = map(obj.experimentName);
    this.ipAddress = map(obj.ipAddress);
    this.isp = map(obj.isp);
    this.language = map(obj.language);
    this.licenseKey = map(obj.licenseKey);
    this.manifestDownloadTime = map(obj.manifestDownloadTime);
    this.mediaPath = map(obj.mediaPath);
    this.mediaServer = map(obj.mediaServer);
    this.mediaUrl = map(obj.mediaUrl);
    this.midpoint = map(obj.midpoint);
    this.minSuggestedDuration = map(obj.minSuggestedDuration);
    this.operatingsystem = map(obj.operatingsystem);
    this.operatingsystemVersionMajor = map(obj.operatingsystemVersionMajor);
    this.operatingsystemVersionMinor = map(obj.operatingsystemVersionMinor);
    this.pageLoadTime = map(obj.pageLoadTime);
    this.pageLoadType = map(obj.pageLoadType);
    this.path = map(obj.path);
    this.percentageInViewport = map(obj.percentageInViewport);
    this.platform = map(obj.platform);
    this.player = map(obj.player);
    this.playerKey = map(obj.playerKey);
    this.playerStartuptime = map(obj.playerStartuptime);
    this.playerTech = map(obj.playerTech);
    this.playerVersion = map(obj.playerVersion);
    this.playPercentage = map(obj.playPercentage);
    this.quartile1 = map(obj.quartile1);
    this.quartile3 = map(obj.quartile3);
    this.region = map(obj.region);
    this.screenHeight = map(obj.screenHeight);
    this.screenWidth = map(obj.screenWidth);
    this.size = map(obj.size);
    this.skipPercentage = map(obj.skipPercentage);
    this.skipPosition = map(obj.skipPosition);
    this.skipped = map(obj.skipped);
    this.started = map(obj.started);
    this.streamFormat = map(obj.streamFormat);
    this.surveyUrl = map(obj.surveyUrl);
    this.time = map(obj.time);
    this.timeInViewport = map(obj.timeInViewport);
    this.timePlayed = map(obj.timePlayed);
    this.universalAdIdRegistry = map(obj.universalAdIdRegistry);
    this.universalAdIdValue = map(obj.universalAdIdValue);
    this.userId = map(obj.userId);
    this.videoBitrate = map(obj.videoBitrate);
    this.videoId = map(obj.videoId);
    this.videoImpressionId = map(obj.videoImpressionId);
    this.videoTitle = map(obj.videoTitle);
    this.videoWindowHeight = map(obj.videoWindowHeight);
    this.videoWindowWidth = map(obj.videoWindowWidth);
  }
}

export default AnalyticsAdsImpressionSample;

