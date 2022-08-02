
export interface InputListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof InputListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof InputListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter inputs by name
     * @type {string}
     * @memberof InputListQueryParams
     */
    name?: string | undefined;

    /**
     * Order list result according an input resource attribute.  The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     * @type {string}
     * @memberof InputListQueryParams
     */
    sort?: string | undefined;
}

export class InputListQueryParamsBuilder {
    private internalParams: InputListQueryParams = {};

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

    /**
     *
     * @param sort Order list result according an input resource attribute.  The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
