
export interface StreamsSearchResponseListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof StreamsSearchResponseListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof StreamsSearchResponseListQueryParams
     */
    limit?: number | undefined;

    /**
     * Query to search against
     * @type {string}
     * @memberof StreamsSearchResponseListQueryParams
     */
    query?: string | undefined;
}

export class StreamsSearchResponseListQueryParamsBuilder {
    private internalParams: StreamsSearchResponseListQueryParams = {};

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
     * @param query Query to search against
     */
    public query(query: string) {
        this.internalParams.query = query;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
