
export interface DashManifestListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof DashManifestListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof DashManifestListQueryParams
     */
    limit?: number | undefined;

    /**
     * Order list result according to a filter resource attribute. The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     * @type {string}
     * @memberof DashManifestListQueryParams
     */
    sort?: string | undefined;

    /**
     * Get the manifests that belong to that encoding id
     * @type {string}
     * @memberof DashManifestListQueryParams
     */
    encodingId?: string | undefined;
}

export class DashManifestListQueryParamsBuilder {
    private internalParams: DashManifestListQueryParams = {};

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
     * @param sort Order list result according to a filter resource attribute. The fields that can be used for sorting are: + `id` + `createdAt` + `modifiedAt` + `type` + `name` 
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    /**
     *
     * @param encodingId Get the manifests that belong to that encoding id
     */
    public encodingId(encodingId: string) {
        this.internalParams.encodingId = encodingId;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
