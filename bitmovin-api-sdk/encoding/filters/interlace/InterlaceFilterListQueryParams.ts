export default interface InterlaceFilterListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof InterlaceFilterListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof InterlaceFilterListQueryParams
     */
    limit?: number;

    /**
     * Filter filters by name
     * @type {string}
     * @memberof InterlaceFilterListQueryParams
     */
    name?: string;
}
