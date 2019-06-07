export default interface AkamaiNetStorageInputListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof AkamaiNetStorageInputListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof AkamaiNetStorageInputListQueryParams
     */
    limit?: number;

    /**
     * Filter inputs by name
     * @type {string}
     * @memberof AkamaiNetStorageInputListQueryParams
     */
    name?: string;
}
