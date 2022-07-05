
export interface CdnUsageStatisticsGetQueryParams {

    /**
     * Start date. Accepted formats: yyyy-MM-ddThh:mm:ssZ or yyyy-MM-dd
     * @type {Date}
     * @memberof CdnUsageStatisticsGetQueryParams
     */
    from?: Date | undefined;

    /**
     * End date. Accepted formats: yyyy-MM-ddThh:mm:ssZ or yyyy-MM-dd
     * @type {Date}
     * @memberof CdnUsageStatisticsGetQueryParams
     */
    to?: Date | undefined;
}

export class CdnUsageStatisticsGetQueryParamsBuilder {
    private internalParams: CdnUsageStatisticsGetQueryParams = {};

    /**
     *
     * @param from Start date. Accepted formats: yyyy-MM-ddThh:mm:ssZ or yyyy-MM-dd
     */
    public from(from: Date) {
        this.internalParams.from = from;
        return this;
    }

    /**
     *
     * @param to End date. Accepted formats: yyyy-MM-ddThh:mm:ssZ or yyyy-MM-dd
     */
    public to(to: Date) {
        this.internalParams.to = to;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
