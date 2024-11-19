
export interface LiveStandbyPoolEventLogListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof LiveStandbyPoolEventLogListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof LiveStandbyPoolEventLogListQueryParams
     */
    limit?: number | undefined;

    /**
     * Order list result according a event log attribute.  The fields that can be used for sorting are: + `createdAt` + `eventType` + `standByPoolId` 
     * @type {string}
     * @memberof LiveStandbyPoolEventLogListQueryParams
     */
    sort?: string | undefined;

    /**
     * Filter event logs by log type. Allowed values are: + `INFO` + `WARN` + `ERROR` 
     * @type {string}
     * @memberof LiveStandbyPoolEventLogListQueryParams
     */
    eventType?: string | undefined;
}

export class LiveStandbyPoolEventLogListQueryParamsBuilder {
    private internalParams: LiveStandbyPoolEventLogListQueryParams = {};

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
     * @param sort Order list result according a event log attribute.  The fields that can be used for sorting are: + `createdAt` + `eventType` + `standByPoolId` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    /**
     *
     * @param eventType Filter event logs by log type. Allowed values are: + `INFO` + `WARN` + `ERROR` 
     */
    public eventType(eventType: string) {
        this.internalParams.eventType = eventType;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
