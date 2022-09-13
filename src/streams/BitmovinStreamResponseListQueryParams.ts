
export interface BitmovinStreamResponseListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof BitmovinStreamResponseListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof BitmovinStreamResponseListQueryParams
     */
    limit?: number | undefined;

    /**
     * Order list result according an resource attribute.  The fields that can be used for sorting are: + `createdAt` 
     * @type {string}
     * @memberof BitmovinStreamResponseListQueryParams
     */
    sort?: string | undefined;
}

export class BitmovinStreamResponseListQueryParamsBuilder {
    private internalParams: BitmovinStreamResponseListQueryParams = {};

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
     * @param sort Order list result according an resource attribute.  The fields that can be used for sorting are: + `createdAt` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
