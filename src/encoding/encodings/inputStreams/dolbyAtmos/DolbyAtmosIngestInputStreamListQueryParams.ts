
export interface DolbyAtmosIngestInputStreamListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof DolbyAtmosIngestInputStreamListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof DolbyAtmosIngestInputStreamListQueryParams
     */
    limit?: number | undefined;
}

export class DolbyAtmosIngestInputStreamListQueryParamsBuilder {
    private internalParams: DolbyAtmosIngestInputStreamListQueryParams = {};

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

    public buildQueryParams() {
        return this.internalParams;
    }
}
