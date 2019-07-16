
export interface CencDrmListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {string}
     * @memberof CencDrmListQueryParams
     */
    offset?: string | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {string}
     * @memberof CencDrmListQueryParams
     */
    limit?: string | undefined;
}

export class CencDrmListQueryParamsBuilder {
    private internalParams: CencDrmListQueryParams = {};

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
