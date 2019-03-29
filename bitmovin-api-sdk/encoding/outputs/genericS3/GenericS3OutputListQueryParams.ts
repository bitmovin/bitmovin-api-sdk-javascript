export default interface GenericS3OutputListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof GenericS3OutputListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof GenericS3OutputListQueryParams
     */
    limit?: number;

    /**
     * Filter output by name
     * @type {string}
     * @memberof GenericS3OutputListQueryParams
     */
    name?: string;
}
