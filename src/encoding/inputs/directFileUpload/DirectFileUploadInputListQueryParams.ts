
export interface DirectFileUploadInputListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof DirectFileUploadInputListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof DirectFileUploadInputListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter inputs by name
     * @type {string}
     * @memberof DirectFileUploadInputListQueryParams
     */
    name?: string | undefined;
}

export class DirectFileUploadInputListQueryParamsBuilder {
    private internalParams: DirectFileUploadInputListQueryParams = {};

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
