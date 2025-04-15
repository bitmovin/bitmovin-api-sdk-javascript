
export interface LiveEncodingStatsEventListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof LiveEncodingStatsEventListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof LiveEncodingStatsEventListQueryParams
     */
    limit?: number | undefined;

    /**
     * Sort events by time in DESC order
     * @type {boolean}
     * @memberof LiveEncodingStatsEventListQueryParams
     */
    sortByTime?: boolean | undefined;
}

export class LiveEncodingStatsEventListQueryParamsBuilder {
    private internalParams: LiveEncodingStatsEventListQueryParams = {};

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
     * @param sortByTime Sort events by time in DESC order
     */
    public sortByTime(sortByTime: boolean) {
        this.internalParams.sortByTime = sortByTime;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
