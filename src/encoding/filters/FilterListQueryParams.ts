
export interface FilterListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof FilterListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof FilterListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter filters by name. Multiple names are separated with a `,`
     * @type {string}
     * @memberof FilterListQueryParams
     */
    name?: string | undefined;

    /**
     * Order list result according to a filter resource attribute. The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     * @type {string}
     * @memberof FilterListQueryParams
     */
    sort?: string | undefined;

    /**
     * Filter filters by type. Multiple types are separated with a `,`
     * @type {string}
     * @memberof FilterListQueryParams
     */
    type?: string | undefined;
}

export class FilterListQueryParamsBuilder {
    private internalParams: FilterListQueryParams = {};

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
     * @param name Filter filters by name. Multiple names are separated with a `,`
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

    /**
     *
     * @param type Filter filters by type. Multiple types are separated with a `,`
     */
    public type(type: string) {
        this.internalParams.type = type;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
