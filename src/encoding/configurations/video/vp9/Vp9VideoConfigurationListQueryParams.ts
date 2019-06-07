export default interface Vp9VideoConfigurationListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof Vp9VideoConfigurationListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof Vp9VideoConfigurationListQueryParams
     */
    limit?: number;

    /**
     * Filter configuration by name
     * @type {string}
     * @memberof Vp9VideoConfigurationListQueryParams
     */
    name?: string;
}
