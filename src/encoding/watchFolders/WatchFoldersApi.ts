import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import BitmovinResponse from '../../models/BitmovinResponse';
import WatchFolder from '../../models/WatchFolder';
import PaginationResponse from '../../models/PaginationResponse';
import {WatchFolderListQueryParams, WatchFolderListQueryParamsBuilder} from './WatchFolderListQueryParams';

/**
 * WatchFoldersApi - object-oriented interface
 * @export
 * @class WatchFoldersApi
 * @extends {BaseAPI}
 */
export default class WatchFoldersApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Watch Folder
   * @param {WatchFolder} watchFolder The Watch Folder to be created
   * @throws {BitmovinError}
   * @memberof WatchFoldersApi
   */
  public create(watchFolder?: WatchFolder): Promise<WatchFolder> {
    return this.restClient.post<WatchFolder>('/encoding/watch-folders', {}, watchFolder).then((response) => {
      return map(response, WatchFolder);
    });
  }

  /**
   * @summary Delete Watch Folder
   * @param {string} watchFolderId Id of the Watch Folder
   * @throws {BitmovinError}
   * @memberof WatchFoldersApi
   */
  public delete(watchFolderId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      watch_folder_id: watchFolderId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/watch-folders/{watch_folder_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Watch Folder details
   * @param {string} watchFolderId Id of the Watch Folder
   * @throws {BitmovinError}
   * @memberof WatchFoldersApi
   */
  public get(watchFolderId: string): Promise<WatchFolder> {
    const pathParamMap = {
      watch_folder_id: watchFolderId
    };
    return this.restClient.get<WatchFolder>('/encoding/watch-folders/{watch_folder_id}', pathParamMap).then((response) => {
      return map(response, WatchFolder);
    });
  }

  /**
   * @summary List all Watch Folders
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof WatchFoldersApi
   */
  public list(queryParameters?: WatchFolderListQueryParams | ((q: WatchFolderListQueryParamsBuilder) => WatchFolderListQueryParamsBuilder)): Promise<PaginationResponse<WatchFolder>> {
    let queryParams: WatchFolderListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WatchFolderListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<WatchFolder>>('/encoding/watch-folders', {}, queryParams).then((response) => {
      return new PaginationResponse<WatchFolder>(response, WatchFolder);
    });
  }

  /**
   * @summary Start Watch Folder
   * @param {string} watchFolderId Id of the Watch Folder
   * @throws {BitmovinError}
   * @memberof WatchFoldersApi
   */
  public start(watchFolderId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      watch_folder_id: watchFolderId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/watch-folders/{watch_folder_id}/start', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Stop Watch Folder
   * @param {string} watchFolderId Id of the Watch Folder
   * @throws {BitmovinError}
   * @memberof WatchFoldersApi
   */
  public stop(watchFolderId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      watch_folder_id: watchFolderId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/watch-folders/{watch_folder_id}/stop', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
