export default interface TextFilterListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof TextFilterListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof TextFilterListQueryParams
     */
    limit?: number;

    /**
     * Filter filters by name
     * @type {string}
     * @memberof TextFilterListQueryParams
     */
    name?: string;
}
