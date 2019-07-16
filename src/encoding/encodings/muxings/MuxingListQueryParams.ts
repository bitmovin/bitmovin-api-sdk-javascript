import StreamMode from '../../../models/StreamMode';

export interface MuxingListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof MuxingListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof MuxingListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter muxings to only show the ones with the stream modes specified. Accepts multiple values separated by commas.
     * @type {StreamMode}
     * @memberof MuxingListQueryParams
     */
    streamMode?: StreamMode | undefined;
}

export class MuxingListQueryParamsBuilder {
    private internalParams: MuxingListQueryParams = {};

    /**
     *
     * @param offset Index of the first item to return, starting at 0. Default is 0
     */
    public offset(offset: number) {
        this.internalParams.offset = offset;
        return this;
    }

    /**
     *
     * @param limit Maximum number of items to return. Default is 25, maximum is 100
     */
    public limit(limit: number) {
        this.internalParams.limit = limit;
        return this;
    }

    /**
     *
     * @param streamMode Filter muxings to only show the ones with the stream modes specified. Accepts multiple values separated by commas.
     */
    public streamMode(streamMode: StreamMode) {
        this.internalParams.streamMode = streamMode;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
