
export interface PccReportGetQueryParams {

    /**
     * Include pools with only prerelease browser evidence. Available to every report reader. Literal true or false.
     * @type {boolean}
     * @memberof PccReportGetQueryParams
     */
    includePrerelease?: boolean | undefined;

    /**
     * Keep pools with a device answer in at least one selected cell. Literal true or false.
     * @type {boolean}
     * @memberof PccReportGetQueryParams
     */
    reportedOnly?: boolean | undefined;

    /**
     * Select only HDR columns. Literal true or false.
     * @type {boolean}
     * @memberof PccReportGetQueryParams
     */
    hdrOnly?: boolean | undefined;

    /**
     * Trimmed case-insensitive substring of the codec identifier.
     * @type {string}
     * @memberof PccReportGetQueryParams
     */
    codec?: string | undefined;

    /**
     * Trimmed case-insensitive substring of the published device name and qualifier.
     * @type {string}
     * @memberof PccReportGetQueryParams
     */
    device?: string | undefined;
}

export class PccReportGetQueryParamsBuilder {
    private internalParams: PccReportGetQueryParams = {};

    /**
     *
     * @param includePrerelease Include pools with only prerelease browser evidence. Available to every report reader. Literal true or false.
     */
    public includePrerelease(includePrerelease: boolean) {
        this.internalParams.includePrerelease = includePrerelease;
        return this;
    }

    /**
     *
     * @param reportedOnly Keep pools with a device answer in at least one selected cell. Literal true or false.
     */
    public reportedOnly(reportedOnly: boolean) {
        this.internalParams.reportedOnly = reportedOnly;
        return this;
    }

    /**
     *
     * @param hdrOnly Select only HDR columns. Literal true or false.
     */
    public hdrOnly(hdrOnly: boolean) {
        this.internalParams.hdrOnly = hdrOnly;
        return this;
    }

    /**
     *
     * @param codec Trimmed case-insensitive substring of the codec identifier.
     */
    public codec(codec: string) {
        this.internalParams.codec = codec;
        return this;
    }

    /**
     *
     * @param device Trimmed case-insensitive substring of the published device name and qualifier.
     */
    public device(device: string) {
        this.internalParams.device = device;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
