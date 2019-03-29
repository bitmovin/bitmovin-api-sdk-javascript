export default interface FtpOutputListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof FtpOutputListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof FtpOutputListQueryParams
     */
    limit?: number;

    /**
     * Filter output by name
     * @type {string}
     * @memberof FtpOutputListQueryParams
     */
    name?: string;
}
