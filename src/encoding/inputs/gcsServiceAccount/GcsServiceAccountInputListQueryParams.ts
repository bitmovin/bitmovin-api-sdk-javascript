
export interface GcsServiceAccountInputListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof GcsServiceAccountInputListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof GcsServiceAccountInputListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter inputs by name
     * @type {string}
     * @memberof GcsServiceAccountInputListQueryParams
     */
    name?: string | undefined;
}

export class GcsServiceAccountInputListQueryParamsBuilder {
    private internalParams: GcsServiceAccountInputListQueryParams = {};

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
     * @param name Filter inputs by name
     */
    public name(name: string) {
        this.internalParams.name = name;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
