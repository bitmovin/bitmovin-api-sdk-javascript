import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveJobCredentials from './SimpleEncodingLiveJobCredentials';
import SimpleEncodingLiveMaxResolution from './SimpleEncodingLiveMaxResolution';

/**
 * @export
 * @class SimpleEncodingLiveJobUrlOutput
 */
export class SimpleEncodingLiveJobUrlOutput {
  /**
   * Define a URL pointing to a folder which will be used to upload the encoded assets.  The output folder structure used looks the following way: <br><br> `http://host/my-folder`     <ul>       <li>         `/video`         <ul>           <li>`/{width}x{height}/` (multiple subfolders containing different output renditions)</li>         </ul>       </li>       <li>`/audio` </li>       <li>`/index.m3u8` (HLS manifest file) </li>       <li>`/stream.mpd` (DASH manifest file) </li>     </ul>  Currently the following protocols/storages systems are supported: S3, GCS, Azure Blob Storage, Akamai NetStorage. Note that most protocols will require `credentials` to access the asset. Check the description below which ones are applicable. See below how to construct the URLs for the individual protocals/storage systems.  **S3**: * `s3://<my-bucket>/path/`  Authentication can be done via accesskey/secretkey or role-based authentication. Generic S3 is currently NOT supported.  **GCS**: * `gcs://<my-bucket>/path/`  Authentication can be done via accesskey/secretkey or a service account  **Azure Blob Storage (ABS)**: * `https://<account>.blob.core.windows.net/<container>/path/`  It is required to provide the Azure key credentials for authentication.  **Akamai NetStorage**: * `https://<host>-nsu.akamaihd.net/<CP-code>/path/`  It is required to provider username/password credentials for authentication. (required)
   * @type {string}
   * @memberof SimpleEncodingLiveJobUrlOutput
   */
  public url?: string;

  /**
   * Credentials to be used for authentication and accessing the folder. 
   * @type {SimpleEncodingLiveJobCredentials}
   * @memberof SimpleEncodingLiveJobUrlOutput
   */
  public credentials?: SimpleEncodingLiveJobCredentials;

  /**
   * Indicates if the output should be publically available so that playback immediately works over the internet. Note that not every storage provider supports public output, in this case the flag will be ignored (e.g., Akamai NetStorage).  It might forbidden by some storage configuration to make files public, for example an S3 buckets can be configured to disallow public access. In this case set it to false. 
   * @type {boolean}
   * @memberof SimpleEncodingLiveJobUrlOutput
   */
  public makePublic?: boolean;

  /**
   * This sets the maximum output resolution that will be generated.
   * @type {SimpleEncodingLiveMaxResolution}
   * @memberof SimpleEncodingLiveJobUrlOutput
   */
  public maxResolution?: SimpleEncodingLiveMaxResolution;

  constructor(obj?: Partial<SimpleEncodingLiveJobUrlOutput>) {
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
    this.credentials = map(obj.credentials, SimpleEncodingLiveJobCredentials);
    this.makePublic = map(obj.makePublic);
    this.maxResolution = map(obj.maxResolution);
  }
}

export default SimpleEncodingLiveJobUrlOutput;

