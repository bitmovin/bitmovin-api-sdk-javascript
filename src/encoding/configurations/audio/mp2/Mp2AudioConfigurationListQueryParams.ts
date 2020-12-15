
export interface Mp2AudioConfigurationListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof Mp2AudioConfigurationListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof Mp2AudioConfigurationListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter configuration by name
     * @type {string}
     * @memberof Mp2AudioConfigurationListQueryParams
     */
    name?: string | undefined;
}

export class Mp2AudioConfigurationListQueryParamsBuilder {
    private internalParams: Mp2AudioConfigurationListQueryParams = {};

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
     * @param name Filter configuration by name
     */
    public name(name: string) {
        this.internalParams.name = name;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
