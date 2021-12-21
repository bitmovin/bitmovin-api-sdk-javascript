import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobCredentials from './SimpleEncodingVodJobCredentials';

/**
 * @export
 * @class SimpleEncodingVodJobUrlOutput
 */
export class SimpleEncodingVodJobUrlOutput {
  /**
   * Define a URL pointing to a folder which will be used to upload the encoded assets.  The output folder structure used looks the following way: <br><br> `http://host/my-folder`     <ul>       <li>         `/video`         <ul>           <li>`/h264/{width}x{height}_{bitrate}/` (multiple subfolders containing different output renditions)</li>         </ul>       </li>       <li>`/audio`         <ul>           <li>`/aac/{language}/` - if language is unique (subfolder containing audio output files)</li>           <li>`/aac/{language}_{index}/` - if language is not unique (subfolder containing audio output files)</li>         </ul>       </li>       <li>`/subtitles` (subfolder containing subtitles files)</li>       <li>`/captions` (subfolder containing subtitles files)</li>       <li>`/sprites` (subfolder containing generated sprites)</li>       <li>`/thumbnails` (subfolder containing generated thumbnails)</li>       <li>`/index.m3u8` (HLS manifest file) </li>       <li>`/stream.mpd` (DASH manifest file) </li>     </ul>    Currently the following protocols/storages systems are supported: S3, GCS, Azure Blob Storage, Akamai NetStorage. Note that most protocols will require `credentials` to access the asset. Check the description below which ones are applicable. See below how to construct the URLs for the individual protocals/storage systems. --- **Recommended:** In order to ensure the uniques of the output paths, the use of placeholders in the output's is URL recommended. The following placeholders are supported:  {uuid} - will be replace with a random UUID {asset} - will be replaced with the asset file name (only for the input type VIDEO or DEFAULT)  Example:  * using an `{uuid}` placeholder: The output URL provided `s3://<my-bucket>/{uuid}/path/` will be transformed to `s3://<my-bucket>/<random-uuid-value>/path/`.  * using an `{asset}` placeholder: Given the following input URL `s3://my-bucket/path/filename.mp4`, of input type VIDEO or DEFAULT, the following output URL  `s3://<my-bucket>/{asset}/path/` will be transformed to `s3://<my-bucket>/filename/path/`  Note: the placeholders can be combined or used multiple times in the same URL.  ---  **S3**: * `s3://<my-bucket>/path/`  Authentication can be done via accesskey/secretkey or role-based authentication. Generic S3 is currently NOT supported.  **GCS**: * `gcs://<my-bucket>/path/`  Authentication can be done via accesskey/secretkey or a service account  **Azure Blob Storage (ABS)**: * `https://<account>.blob.core.windows.net/<container>/path/`  It is required to provide the Azure key credentials for authentication.  **Akamai NetStorage**: * `https://<host>-nsu.akamaihd.net/<CP-code>/path/`  It is required to provider username/password credentials for authentication. (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobUrlOutput
   */
  public url?: string;

  /**
   * Credentials to be used for authentication and accessing the folder.
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
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
    this.credentials = map(obj.credentials, SimpleEncodingVodJobCredentials);
    this.makePublic = map(obj.makePublic);
  }
}

export default SimpleEncodingVodJobUrlOutput;

