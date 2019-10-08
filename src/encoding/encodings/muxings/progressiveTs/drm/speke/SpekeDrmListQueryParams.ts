
export interface SpekeDrmListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {string}
     * @memberof SpekeDrmListQueryParams
     */
    offset?: string | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {string}
     * @memberof SpekeDrmListQueryParams
     */
    limit?: string | undefined;
}

export class SpekeDrmListQueryParamsBuilder {
    private internalParams: SpekeDrmListQueryParams = {};

    /**
     *
     * @param offset Index of the first item to return, starting at 0. Default is 0
     */
    public offset(offset: string) {
        this.internalParams.offset = offset;
        return this;
    }

    /**
     *
     * @param limit Maximum number of items to return. Default is 25, maximum is 100
     */
    public limit(limit: string) {
        this.internalParams.limit = limit;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
