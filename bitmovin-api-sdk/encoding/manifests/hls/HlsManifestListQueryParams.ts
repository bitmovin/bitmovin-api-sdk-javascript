export default interface HlsManifestListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof HlsManifestListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof HlsManifestListQueryParams
     */
    limit?: number;

    /**
     * Get the manifests that belong to that encoding id
     * @type {string}
     * @memberof HlsManifestListQueryParams
     */
    encodingId?: string;
}
