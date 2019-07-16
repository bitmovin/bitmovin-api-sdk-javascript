
export interface DenoiseHqdn3dFilterListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof DenoiseHqdn3dFilterListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof DenoiseHqdn3dFilterListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter filters by name
     * @type {string}
     * @memberof DenoiseHqdn3dFilterListQueryParams
     */
    name?: string | undefined;
}

export class DenoiseHqdn3dFilterListQueryParamsBuilder {
    private internalParams: DenoiseHqdn3dFilterListQueryParams = {};

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
     * @param name Filter filters by name
     */
    public name(name: string) {
        this.internalParams.name = name;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
