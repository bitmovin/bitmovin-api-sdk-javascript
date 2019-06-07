import StreamMode from '../../../models/StreamMode';
export default interface MuxingListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof MuxingListQueryParams
     */
    offset?: number;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof MuxingListQueryParams
     */
    limit?: number;

    /**
     * Filter muxings to only show the ones with the stream modes specified. Accepts multiple values separated by commas.
     * @type {StreamMode}
     * @memberof MuxingListQueryParams
     */
    streamMode?: StreamMode;
}
