import {map, mapArray} from '../common/Mapper';
import BroadcastTsMuxingInformation from './BroadcastTsMuxingInformation';
import Drm from './Drm';
import Fmp4MuxingInformation from './Fmp4MuxingInformation';
import Mp3MuxingInformation from './Mp3MuxingInformation';
import Mp4MuxingInformation from './Mp4MuxingInformation';
import Muxing from './Muxing';
import PackedAudioMuxingInformation from './PackedAudioMuxingInformation';
import ProgressiveMovMuxingInformation from './ProgressiveMovMuxingInformation';
import ProgressiveTsMuxingInformation from './ProgressiveTsMuxingInformation';
import ProgressiveWebmMuxingInformation from './ProgressiveWebmMuxingInformation';

/**
 * @export
 * @class HistoryMuxing
 */
export class HistoryMuxing {
  /**
   * Muxing
   * @type {Muxing}
   * @memberof HistoryMuxing
   */
  public muxing?: Muxing;

  /**
   * @type {Drm[]}
   * @memberof HistoryMuxing
   */
  public drms?: Drm[];

  /**
   * @type {BroadcastTsMuxingInformation}
   * @memberof HistoryMuxing
   */
  public broadcastTsMuxingInformation?: BroadcastTsMuxingInformation;

  /**
   * @type {Fmp4MuxingInformation}
   * @memberof HistoryMuxing
   */
  public fmp4MuxingInformation?: Fmp4MuxingInformation;

  /**
   * @type {Mp3MuxingInformation}
   * @memberof HistoryMuxing
   */
  public mp3MuxingInformation?: Mp3MuxingInformation;

  /**
   * @type {Mp4MuxingInformation}
   * @memberof HistoryMuxing
   */
  public mp4MuxingInformation?: Mp4MuxingInformation;

  /**
   * @type {PackedAudioMuxingInformation}
   * @memberof HistoryMuxing
   */
  public packedAudioMuxingInformation?: PackedAudioMuxingInformation;

  /**
   * @type {ProgressiveMovMuxingInformation}
   * @memberof HistoryMuxing
   */
  public progressiveMovMuxingInformation?: ProgressiveMovMuxingInformation;

  /**
   * @type {ProgressiveTsMuxingInformation}
   * @memberof HistoryMuxing
   */
  public progressiveTsMuxingInformation?: ProgressiveTsMuxingInformation;

  /**
   * @type {ProgressiveWebmMuxingInformation}
   * @memberof HistoryMuxing
   */
  public progressiveWebmMuxingInformation?: ProgressiveWebmMuxingInformation;

  constructor(obj?: Partial<HistoryMuxing>) {
    if(!obj) {
      return;
    }
    this.muxing = map(obj.muxing, Muxing);
    this.drms = mapArray(obj.drms, Drm);
    this.broadcastTsMuxingInformation = map(obj.broadcastTsMuxingInformation, BroadcastTsMuxingInformation);
    this.fmp4MuxingInformation = map(obj.fmp4MuxingInformation, Fmp4MuxingInformation);
    this.mp3MuxingInformation = map(obj.mp3MuxingInformation, Mp3MuxingInformation);
    this.mp4MuxingInformation = map(obj.mp4MuxingInformation, Mp4MuxingInformation);
    this.packedAudioMuxingInformation = map(obj.packedAudioMuxingInformation, PackedAudioMuxingInformation);
    this.progressiveMovMuxingInformation = map(obj.progressiveMovMuxingInformation, ProgressiveMovMuxingInformation);
    this.progressiveTsMuxingInformation = map(obj.progressiveTsMuxingInformation, ProgressiveTsMuxingInformation);
    this.progressiveWebmMuxingInformation = map(obj.progressiveWebmMuxingInformation, ProgressiveWebmMuxingInformation);
  }
}

export default HistoryMuxing;

