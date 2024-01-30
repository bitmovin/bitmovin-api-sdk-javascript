
export interface StreamKeyListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof StreamKeyListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof StreamKeyListQueryParams
     */
    limit?: number | undefined;

    /**
     * Order list result according a stream key attribute.  The fields that can be used for sorting are: + `createdAt` + `name` 
     * @type {string}
     * @memberof StreamKeyListQueryParams
     */
    sort?: string | undefined;

    /**
     * Filter stream keys by type
     * @type {string}
     * @memberof StreamKeyListQueryParams
     */
    type?: string | undefined;

    /**
     * Filter stream keys by status
     * @type {string}
     * @memberof StreamKeyListQueryParams
     */
    status?: string | undefined;

    /**
     * Filter stream keys by assigned ingest point id
     * @type {string}
     * @memberof StreamKeyListQueryParams
     */
    assignedIngestPointId?: string | undefined;

    /**
     * Filter stream keys by assigned encoding id
     * @type {string}
     * @memberof StreamKeyListQueryParams
     */
    assignedEncodingId?: string | undefined;
}

export class StreamKeyListQueryParamsBuilder {
    private internalParams: StreamKeyListQueryParams = {};

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
     * @param sort Order list result according a stream key attribute.  The fields that can be used for sorting are: + `createdAt` + `name` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    /**
     *
     * @param type Filter stream keys by type
     */
    public type(type: string) {
        this.internalParams.type = type;
        return this;
    }

    /**
     *
     * @param status Filter stream keys by status
     */
    public status(status: string) {
        this.internalParams.status = status;
        return this;
    }

    /**
     *
     * @param assignedIngestPointId Filter stream keys by assigned ingest point id
     */
    public assignedIngestPointId(assignedIngestPointId: string) {
        this.internalParams.assignedIngestPointId = assignedIngestPointId;
        return this;
    }

    /**
     *
     * @param assignedEncodingId Filter stream keys by assigned encoding id
     */
    public assignedEncodingId(assignedEncodingId: string) {
        this.internalParams.assignedEncodingId = assignedEncodingId;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
