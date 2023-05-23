import {map, mapArray} from '../common/Mapper';
import Bif from './Bif';
import BurnInSubtitleDvbSub from './BurnInSubtitleDvbSub';
import BurnInSubtitleSrt from './BurnInSubtitleSrt';
import DolbyVisionMetadata from './DolbyVisionMetadata';
import NexGuardFileMarker from './NexGuardFileMarker';
import PsnrQualityMetric from './PsnrQualityMetric';
import SccCaption from './SccCaption';
import Sprite from './Sprite';
import Stream from './Stream';
import StreamFilter from './StreamFilter';
import Thumbnail from './Thumbnail';

/**
 * @export
 * @class HistoryStream
 */
export class HistoryStream {
  /**
   * Stream
   * @type {Stream}
   * @memberof HistoryStream
   */
  public stream?: Stream;

  /**
   * List of stream filter configurations
   * @type {StreamFilter[]}
   * @memberof HistoryStream
   */
  public filters?: StreamFilter[];

  /**
   * List of Burn-In DVB-SUB subtitles
   * @type {BurnInSubtitleDvbSub[]}
   * @memberof HistoryStream
   */
  public burnInSubtitleDvbSubs?: BurnInSubtitleDvbSub[];

  /**
   * List of burn-in SRT configurations
   * @type {BurnInSubtitleSrt[]}
   * @memberof HistoryStream
   */
  public burnInSubtitleSrtSubs?: BurnInSubtitleSrt[];

  /**
   * Nexguard file marker watermarking configuration
   * @type {NexGuardFileMarker}
   * @memberof HistoryStream
   */
  public nexGuardFileMarker?: NexGuardFileMarker;

  /**
   * List of caption configurations
   * @type {SccCaption[]}
   * @memberof HistoryStream
   */
  public sccCaptions?: SccCaption[];

  /**
   * List of bif configurations
   * @type {Bif[]}
   * @memberof HistoryStream
   */
  public bifs?: Bif[];

  /**
   * List of Dolby Vision Metadata configurations
   * @type {DolbyVisionMetadata[]}
   * @memberof HistoryStream
   */
  public dolbyVisionMetadata?: DolbyVisionMetadata[];

  /**
   * List of Thumbnail configurations
   * @type {Thumbnail[]}
   * @memberof HistoryStream
   */
  public thumbnails?: Thumbnail[];

  /**
   * List of Sprite configurations
   * @type {Sprite[]}
   * @memberof HistoryStream
   */
  public sprites?: Sprite[];

  /**
   * List of PSNR quality metrics
   * @type {PsnrQualityMetric[]}
   * @memberof HistoryStream
   */
  public psnrMetrics?: PsnrQualityMetric[];

  constructor(obj?: Partial<HistoryStream>) {
    if(!obj) {
      return;
    }
    this.stream = map(obj.stream, Stream);
    this.filters = mapArray(obj.filters, StreamFilter);
    this.burnInSubtitleDvbSubs = mapArray(obj.burnInSubtitleDvbSubs, BurnInSubtitleDvbSub);
    this.burnInSubtitleSrtSubs = mapArray(obj.burnInSubtitleSrtSubs, BurnInSubtitleSrt);
    this.nexGuardFileMarker = map(obj.nexGuardFileMarker, NexGuardFileMarker);
    this.sccCaptions = mapArray(obj.sccCaptions, SccCaption);
    this.bifs = mapArray(obj.bifs, Bif);
    this.dolbyVisionMetadata = mapArray(obj.dolbyVisionMetadata, DolbyVisionMetadata);
    this.thumbnails = mapArray(obj.thumbnails, Thumbnail);
    this.sprites = mapArray(obj.sprites, Sprite);
    this.psnrMetrics = mapArray(obj.psnrMetrics, PsnrQualityMetric);
  }
}

export default HistoryStream;

