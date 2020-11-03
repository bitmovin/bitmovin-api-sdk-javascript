
export interface AnalyticsIncidentListByLicenseKeyQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof AnalyticsIncidentListByLicenseKeyQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 10, maximum is 100
     * @type {number}
     * @memberof AnalyticsIncidentListByLicenseKeyQueryParams
     */
    limit?: number | undefined;
}

export class AnalyticsIncidentListByLicenseKeyQueryParamsBuilder {
    private internalParams: AnalyticsIncidentListByLicenseKeyQueryParams = {};

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
     * @param limit Maximum number of items to return. Default is 10, maximum is 100
     */
    public limit(limit: number) {
        this.internalParams.limit = limit;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
