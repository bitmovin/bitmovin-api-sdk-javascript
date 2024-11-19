
export interface LiveStandbyPoolEncodingListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof LiveStandbyPoolEncodingListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof LiveStandbyPoolEncodingListQueryParams
     */
    limit?: number | undefined;

    /**
     * Order list result according a stream key attribute.  The fields that can be used for sorting are: + `createdAt` + `name` + `status` 
     * @type {string}
     * @memberof LiveStandbyPoolEncodingListQueryParams
     */
    sort?: string | undefined;

    /**
     * Filter standby encodings by status
     * @type {string}
     * @memberof LiveStandbyPoolEncodingListQueryParams
     */
    status?: string | undefined;
}

export class LiveStandbyPoolEncodingListQueryParamsBuilder {
    private internalParams: LiveStandbyPoolEncodingListQueryParams = {};

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
     * @param sort Order list result according a stream key attribute.  The fields that can be used for sorting are: + `createdAt` + `name` + `status` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    /**
     *
     * @param status Filter standby encodings by status
     */
    public status(status: string) {
        this.internalParams.status = status;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
