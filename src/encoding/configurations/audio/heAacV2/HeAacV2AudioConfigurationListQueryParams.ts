export default interface HeAacV2AudioConfigurationListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof HeAacV2AudioConfigurationListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof HeAacV2AudioConfigurationListQueryParams
     */
    limit?: number;

    /**
     * Filter configuration by name
     * @type {string}
     * @memberof HeAacV2AudioConfigurationListQueryParams
     */
    name?: string;
}
