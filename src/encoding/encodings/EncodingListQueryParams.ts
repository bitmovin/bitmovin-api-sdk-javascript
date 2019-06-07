import CloudRegion from '../../models/CloudRegion';
export default interface EncodingListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof EncodingListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof EncodingListQueryParams
     */
    limit?: number;

    /**
     * Order list result according an encoding resource attribute
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    sort?: string;

    /**
     * Filter encodings to only show the ones with the type specified.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    type?: string;

    /**
     * Filter encodings to only show the ones with the status specified.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    status?: string;

    /**
     * Filter encodings to only show the ones with the cloudRegion specified.
     * @type {CloudRegion}
     * @memberof EncodingListQueryParams
     */
    cloudRegion?: CloudRegion;

    /**
     * Filter encodings to only show the ones with the encoderVersion specified.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    encoderVersion?: string;

    /**
     * Filter encodings to only show the ones with this exact name.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    name?: string;
}
