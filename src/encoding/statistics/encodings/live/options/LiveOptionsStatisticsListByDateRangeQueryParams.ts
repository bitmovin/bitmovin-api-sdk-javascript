
export interface LiveOptionsStatisticsListByDateRangeQueryParams {

    /**
     * Start date, format: yyyy-MM-dd
     * @type {Date}
     * @memberof LiveOptionsStatisticsListByDateRangeQueryParams
     */
    from?: Date | undefined;

    /**
     * End date, format: yyyy-MM-dd
     * @type {Date}
     * @memberof LiveOptionsStatisticsListByDateRangeQueryParams
     */
    to?: Date | undefined;

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof LiveOptionsStatisticsListByDateRangeQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof LiveOptionsStatisticsListByDateRangeQueryParams
     */
    limit?: number | undefined;
}

export class LiveOptionsStatisticsListByDateRangeQueryParamsBuilder {
    private internalParams: LiveOptionsStatisticsListByDateRangeQueryParams = {};

    /**
     *
     * @param from Start date, format: yyyy-MM-dd
     */
    public from(from: Date) {
        this.internalParams.from = from;
        return this;
    }

    /**
     *
     * @param to End date, format: yyyy-MM-dd
     */
    public to(to: Date) {
        this.internalParams.to = to;
        return this;
    }

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

    public buildQueryParams() {
        return this.internalParams;
    }
}
