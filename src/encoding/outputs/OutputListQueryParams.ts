import OutputType from '../../models/OutputType';

export interface OutputListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof OutputListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof OutputListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter outputs by name
     * @type {string}
     * @memberof OutputListQueryParams
     */
    name?: string | undefined;

    /**
     * Order list result according to a output resource attribute. The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     * @type {string}
     * @memberof OutputListQueryParams
     */
    sort?: string | undefined;

    /**
     * Filter outputs by type
     * @type {OutputType}
     * @memberof OutputListQueryParams
     */
    type?: OutputType | undefined;
}

export class OutputListQueryParamsBuilder {
    private internalParams: OutputListQueryParams = {};

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
     * @param name Filter outputs by name
     */
    public name(name: string) {
        this.internalParams.name = name;
        return this;
    }

    /**
     *
     * @param sort Order list result according to a output resource attribute. The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    /**
     *
     * @param type Filter outputs by type
     */
    public type(type: OutputType) {
        this.internalParams.type = type;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
