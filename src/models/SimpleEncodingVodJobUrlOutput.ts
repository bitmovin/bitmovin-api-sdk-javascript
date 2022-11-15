import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobCredentials from './SimpleEncodingVodJobCredentials';
import SimpleEncodingVodJobOutput from './SimpleEncodingVodJobOutput';
import SimpleEncodingVodJobOutputArtifact from './SimpleEncodingVodJobOutputArtifact';
import SimpleEncodingVodJobOutputType from './SimpleEncodingVodJobOutputType';

/**
 * @export
 * @class SimpleEncodingVodJobUrlOutput
 */
export class SimpleEncodingVodJobUrlOutput extends SimpleEncodingVodJobOutput {
  /**
   * Discriminator property for SimpleEncodingVodJobOutput
   * @type {string}
   * @memberof SimpleEncodingVodJobUrlOutput
   */
  public readonly type: SimpleEncodingVodJobOutputType = SimpleEncodingVodJobOutputType.URL;

  /**
   * Define a URL pointing to a folder which will be used to upload the encoded assets.  The output folder structure used looks the following way: <br><br> `http://host/my-folder`     <ul>       <li>         `/video`         <ul>           <li>`/h264/{width}x{height}_{bitrate}/` (multiple subfolders containing different output renditions)</li>         </ul>       </li>       <li>`/audio`         <ul>           <li>`/aac/{language}/` - if language is unique (subfolder containing audio output files)</li>           <li>`/aac/{language}_{index}/` - if language is not unique (subfolder containing audio output files)</li>         </ul>       </li>       <li>`/subtitles` (subfolder containing subtitles files)</li>       <li>`/captions` (subfolder containing subtitles files)</li>       <li>`/sprites` (subfolder containing generated sprites)</li>       <li>`/thumbnails` (subfolder containing generated thumbnails)</li>       <li>`/index.m3u8` (HLS manifest file) </li>       <li>`/stream.mpd` (DASH manifest file) </li>     </ul>    Currently the following protocols/storages systems are supported: S3, GCS, Azure Blob Storage, Akamai NetStorage. Note that most protocols will require `credentials` to access the asset. Check in the descriptions below which properties can or need to be provided within the `credentials` key. See below how to construct the URLs for the individual protocols/storage systems. ___ **Recommendation** To ensure uniqueness of output paths accross multiple encodings, make use of the following placeholders in the output's URL: {uuid} - will be replaced with a random UUID {asset} - will be replaced with the asset file name (only for the input type VIDEO or DEFAULT)  Examples:  * using the `{uuid}` placeholder: The output URL `s3://<my-bucket>/{uuid}/path/` will be transformed to e.g. `s3://<my-bucket>/d59295f3-1548-4bd9-843d-6ac6896dbdb6/path/`.  * using the `{asset}` placeholder: Given an input `s3://my-bucket/path/filename.mp4` of type VIDEO or DEFAULT, the output URL  `s3://<my-bucket>/{asset}/path/` will be transformed to `s3://<my-bucket>/filename/path/`  Notes:   - Placeholders can be combined or used multiple times in the same URL.   - Placeholders are ignored when used in conjunction with `DirectFileUploadInput`s because in this case the asset file name cannot be set. ___  **S3**: * `s3://<my-bucket>/path/`  Authentication can be done via accesskey/secretkey or role-based authentication. Generic S3 is currently NOT supported.  **GCS**: * `gcs://<my-bucket>/path/`  Authentication can be done via accesskey/secretkey or a service account  **Azure Blob Storage (ABS)**: * `https://<account>.blob.core.windows.net/<container>/path/`  It is required to provide the Azure key credentials for authentication.  **Akamai NetStorage**: * `https://<host>-nsu.akamaihd.net/<CP-code>/path/`  It is required to provide username/password credentials for authentication. (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobUrlOutput
   */
  public url?: string;

  /**
   * Credentials to be used for authentication and accessing the folder 
   * @type {SimpleEncodingVodJobCredentials}
   * @memberof SimpleEncodingVodJobUrlOutput
   */
  public credentials?: SimpleEncodingVodJobCredentials;

  /**
   * Indicates if the output should be publically available so that playback immediately works over the internet. Note that not every storage provider supports public output, in this case the flag will be ignored (e.g., Akamai NetStorage).  It might forbidden by some storage configuration to make files public, for example an S3 buckets can be configured to disallow public access. In this case set it to false. 
   * @type {boolean}
   * @memberof SimpleEncodingVodJobUrlOutput
   */
  public makePublic?: boolean;

  constructor(obj?: Partial<SimpleEncodingVodJobUrlOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
    this.credentials = map(obj.credentials, SimpleEncodingVodJobCredentials);
    this.makePublic = map(obj.makePublic);
  }
}

export default SimpleEncodingVodJobUrlOutput;

