export default interface WatermarkFilterListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof WatermarkFilterListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof WatermarkFilterListQueryParams
     */
    limit?: number;

    /**
     * Filter filters by name
     * @type {string}
     * @memberof WatermarkFilterListQueryParams
     */
    name?: string;
}
