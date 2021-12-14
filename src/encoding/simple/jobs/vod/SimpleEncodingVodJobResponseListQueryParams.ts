
export interface SimpleEncodingVodJobResponseListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof SimpleEncodingVodJobResponseListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof SimpleEncodingVodJobResponseListQueryParams
     */
    limit?: number | undefined;

    /**
     * Order list result according to a Simple Encoding VOD Job attribute. The fields that can be used for sorting are: + `createdAt` 
     * @type {string}
     * @memberof SimpleEncodingVodJobResponseListQueryParams
     */
    sort?: string | undefined;

    /**
     * Filter Simple Encoding VOD Jobs to only show the ones with the status specified.
     * @type {string}
     * @memberof SimpleEncodingVodJobResponseListQueryParams
     */
    status?: string | undefined;
}

export class SimpleEncodingVodJobResponseListQueryParamsBuilder {
    private internalParams: SimpleEncodingVodJobResponseListQueryParams = {};

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
     * @param sort Order list result according to a Simple Encoding VOD Job attribute. The fields that can be used for sorting are: + `createdAt` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    /**
     *
     * @param status Filter Simple Encoding VOD Jobs to only show the ones with the status specified.
     */
    public status(status: string) {
        this.internalParams.status = status;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
