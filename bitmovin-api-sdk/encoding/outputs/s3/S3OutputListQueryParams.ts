export default interface S3OutputListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof S3OutputListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof S3OutputListQueryParams
     */
    limit?: number;

    /**
     * Filter output by name
     * @type {string}
     * @memberof S3OutputListQueryParams
     */
    name?: string;
}
