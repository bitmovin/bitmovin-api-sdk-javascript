
export interface CodecConfigurationListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof CodecConfigurationListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof CodecConfigurationListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter configuration by name
     * @type {string}
     * @memberof CodecConfigurationListQueryParams
     */
    name?: string | undefined;

    /**
     * Order list result according to a filter resource attribute. The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     * @type {string}
     * @memberof CodecConfigurationListQueryParams
     */
    sort?: string | undefined;
}

export class CodecConfigurationListQueryParamsBuilder {
    private internalParams: CodecConfigurationListQueryParams = {};

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

    /**
     *
     * @param sort Order list result according to a filter resource attribute. The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
