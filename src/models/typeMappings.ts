import AkamaiNetStorageInput from './AkamaiNetStorageInput';
import AsperaInput from './AsperaInput';
import AzureInput from './AzureInput';
import RedundantRtmpInput from './RedundantRtmpInput';
import FtpInput from './FtpInput';
import GenericS3Input from './GenericS3Input';
import GcsInput from './GcsInput';
import HttpInput from './HttpInput';
import HttpsInput from './HttpsInput';
import LocalInput from './LocalInput';
import RtmpInput from './RtmpInput';
import S3Input from './S3Input';
import S3RoleBasedInput from './S3RoleBasedInput';
import SftpInput from './SftpInput';
import TcpInput from './TcpInput';
import UdpInput from './UdpInput';
import UdpMulticastInput from './UdpMulticastInput';
import ZixiInput from './ZixiInput';
import SrtInput from './SrtInput';
import AkamaiNetStorageOutput from './AkamaiNetStorageOutput';
import AzureOutput from './AzureOutput';
import GenericS3Output from './GenericS3Output';
import GcsOutput from './GcsOutput';
import FtpOutput from './FtpOutput';
import LocalOutput from './LocalOutput';
import S3Output from './S3Output';
import S3RoleBasedOutput from './S3RoleBasedOutput';
import SftpOutput from './SftpOutput';
import AkamaiMslOutput from './AkamaiMslOutput';
import LiveMediaIngestOutput from './LiveMediaIngestOutput';
import AacAudioConfiguration from './AacAudioConfiguration';
import HeAacV1AudioConfiguration from './HeAacV1AudioConfiguration';
import HeAacV2AudioConfiguration from './HeAacV2AudioConfiguration';
import H264VideoConfiguration from './H264VideoConfiguration';
import H265VideoConfiguration from './H265VideoConfiguration';
import Vp9VideoConfiguration from './Vp9VideoConfiguration';
import Vp8VideoConfiguration from './Vp8VideoConfiguration';
import Mp2AudioConfiguration from './Mp2AudioConfiguration';
import Mp3AudioConfiguration from './Mp3AudioConfiguration';
import Ac3AudioConfiguration from './Ac3AudioConfiguration';
import Eac3AudioConfiguration from './Eac3AudioConfiguration';
import OpusAudioConfiguration from './OpusAudioConfiguration';
import VorbisAudioConfiguration from './VorbisAudioConfiguration';
import MjpegVideoConfiguration from './MjpegVideoConfiguration';
import Av1VideoConfiguration from './Av1VideoConfiguration';
import CropFilter from './CropFilter';
import WatermarkFilter from './WatermarkFilter';
import EnhancedWatermarkFilter from './EnhancedWatermarkFilter';
import RotateFilter from './RotateFilter';
import DeinterlaceFilter from './DeinterlaceFilter';
import AudioMixFilter from './AudioMixFilter';
import DenoiseHqdn3dFilter from './DenoiseHqdn3dFilter';
import TextFilter from './TextFilter';
import UnsharpFilter from './UnsharpFilter';
import ScaleFilter from './ScaleFilter';
import InterlaceFilter from './InterlaceFilter';
import AudioVolumeFilter from './AudioVolumeFilter';
import EbuR128SinglePassFilter from './EbuR128SinglePassFilter';
import IngestInputStream from './IngestInputStream';
import ConcatenationInputStream from './ConcatenationInputStream';
import TimeBasedTrimmingInputStream from './TimeBasedTrimmingInputStream';
import TimecodeTrackTrimmingInputStream from './TimecodeTrackTrimmingInputStream';
import H264PictureTimingTrimmingInputStream from './H264PictureTimingTrimmingInputStream';
import AudioMixInputStream from './AudioMixInputStream';
import FileInputStream from './FileInputStream';
import Fmp4Muxing from './Fmp4Muxing';
import CmafMuxing from './CmafMuxing';
import Mp4Muxing from './Mp4Muxing';
import TsMuxing from './TsMuxing';
import WebmMuxing from './WebmMuxing';
import Mp3Muxing from './Mp3Muxing';
import ProgressiveWebmMuxing from './ProgressiveWebmMuxing';
import ProgressiveMovMuxing from './ProgressiveMovMuxing';
import ProgressiveTsMuxing from './ProgressiveTsMuxing';
import BroadcastTsMuxing from './BroadcastTsMuxing';
import ChunkedTextMuxing from './ChunkedTextMuxing';
import TextMuxing from './TextMuxing';
import WidevineDrm from './WidevineDrm';
import PlayReadyDrm from './PlayReadyDrm';
import PrimeTimeDrm from './PrimeTimeDrm';
import FairPlayDrm from './FairPlayDrm';
import MarlinDrm from './MarlinDrm';
import ClearKeyDrm from './ClearKeyDrm';
import AesEncryptionDrm from './AesEncryptionDrm';
import CencDrm from './CencDrm';
import RawId3Tag from './RawId3Tag';
import FrameIdId3Tag from './FrameIdId3Tag';
import PlaintextId3Tag from './PlaintextId3Tag';

export const InputTypeMap: any = {
  'AKAMAI_NETSTORAGE': AkamaiNetStorageInput,
  'ASPERA': AsperaInput,
  'AZURE': AzureInput,
  'REDUNDANT_RTMP': RedundantRtmpInput,
  'FTP': FtpInput,
  'GENERIC_S3': GenericS3Input,
  'GCS': GcsInput,
  'HTTP': HttpInput,
  'HTTPS': HttpsInput,
  'LOCAL': LocalInput,
  'RTMP': RtmpInput,
  'S3': S3Input,
  'S3_ROLE_BASED': S3RoleBasedInput,
  'SFTP': SftpInput,
  'TCP': TcpInput,
  'UDP': UdpInput,
  'UDP_MULTICAST': UdpMulticastInput,
  'ZIXI': ZixiInput,
  'SRT': SrtInput,
};
export const OutputTypeMap: any = {
  'AKAMAI_NETSTORAGE': AkamaiNetStorageOutput,
  'AZURE': AzureOutput,
  'GENERIC_S3': GenericS3Output,
  'GCS': GcsOutput,
  'FTP': FtpOutput,
  'LOCAL': LocalOutput,
  'S3': S3Output,
  'S3_ROLE_BASED': S3RoleBasedOutput,
  'SFTP': SftpOutput,
  'AKAMAI_MSL': AkamaiMslOutput,
  'LIVE_MEDIA_INGEST': LiveMediaIngestOutput,
};
export const CodecConfigurationTypeMap: any = {
  'AAC': AacAudioConfiguration,
  'HE_AAC_V1': HeAacV1AudioConfiguration,
  'HE_AAC_V2': HeAacV2AudioConfiguration,
  'H264': H264VideoConfiguration,
  'H265': H265VideoConfiguration,
  'VP9': Vp9VideoConfiguration,
  'VP8': Vp8VideoConfiguration,
  'MP2': Mp2AudioConfiguration,
  'MP3': Mp3AudioConfiguration,
  'AC3': Ac3AudioConfiguration,
  'EAC3': Eac3AudioConfiguration,
  'OPUS': OpusAudioConfiguration,
  'VORBIS': VorbisAudioConfiguration,
  'MJPEG': MjpegVideoConfiguration,
  'AV1': Av1VideoConfiguration,
};
export const FilterTypeMap: any = {
  'CROP': CropFilter,
  'WATERMARK': WatermarkFilter,
  'ENHANCED_WATERMARK': EnhancedWatermarkFilter,
  'ROTATE': RotateFilter,
  'DEINTERLACE': DeinterlaceFilter,
  'AUDIO_MIX': AudioMixFilter,
  'DENOISE_HQDN3D': DenoiseHqdn3dFilter,
  'TEXT': TextFilter,
  'UNSHARP': UnsharpFilter,
  'SCALE': ScaleFilter,
  'INTERLACE': InterlaceFilter,
  'AUDIO_VOLUME': AudioVolumeFilter,
  'EBU_R128_SINGLE_PASS': EbuR128SinglePassFilter,
};
export const InputStreamTypeMap: any = {
  'INGEST': IngestInputStream,
  'CONCATENATION': ConcatenationInputStream,
  'TRIMMING_TIME_BASED': TimeBasedTrimmingInputStream,
  'TRIMMING_TIME_CODE_TRACK': TimecodeTrackTrimmingInputStream,
  'TRIMMING_H264_PICTURE_TIMING': H264PictureTimingTrimmingInputStream,
  'AUDIO_MIX': AudioMixInputStream,
  'FILE': FileInputStream,
};
export const MuxingTypeMap: any = {
  'FMP4': Fmp4Muxing,
  'CMAF': CmafMuxing,
  'MP4': Mp4Muxing,
  'TS': TsMuxing,
  'WEBM': WebmMuxing,
  'MP3': Mp3Muxing,
  'PROGRESSIVE_WEBM': ProgressiveWebmMuxing,
  'PROGRESSIVE_MOV': ProgressiveMovMuxing,
  'PROGRESSIVE_TS': ProgressiveTsMuxing,
  'BROADCAST_TS': BroadcastTsMuxing,
  'CHUNKED_TEXT': ChunkedTextMuxing,
  'TEXT': TextMuxing,
};
export const DrmTypeMap: any = {
  'WIDEVINE': WidevineDrm,
  'PLAYREADY': PlayReadyDrm,
  'PRIMETIME': PrimeTimeDrm,
  'FAIRPLAY': FairPlayDrm,
  'MARLIN': MarlinDrm,
  'CLEARKEY': ClearKeyDrm,
  'AES': AesEncryptionDrm,
  'CENC': CencDrm,
};
export const Id3TagTypeMap: any = {
  'RAW': RawId3Tag,
  'FRAME_ID': FrameIdId3Tag,
  'PLAIN_TEXT': PlaintextId3Tag,
};
