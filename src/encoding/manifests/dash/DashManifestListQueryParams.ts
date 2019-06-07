export default interface DashManifestListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof DashManifestListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof DashManifestListQueryParams
     */
    limit?: number;

    /**
     * Get the manifests that belong to that encoding id
     * @type {string}
     * @memberof DashManifestListQueryParams
     */
    encodingId?: string;
}
