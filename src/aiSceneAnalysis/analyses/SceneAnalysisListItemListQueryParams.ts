import SceneAnalysisListSort from '../../models/SceneAnalysisListSort';

export interface SceneAnalysisListItemListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof SceneAnalysisListItemListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 15, maximum is 100
     * @type {number}
     * @memberof SceneAnalysisListItemListQueryParams
     */
    limit?: number | undefined;

    /**
     * Order the result by creation date. Default is createdAt:DESC
     * @type {SceneAnalysisListSort}
     * @memberof SceneAnalysisListItemListQueryParams
     */
    sort?: SceneAnalysisListSort | undefined;

    /**
     * Inclusive lower creation-date bound in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
     * @type {Date}
     * @memberof SceneAnalysisListItemListQueryParams
     */
    createdAtFrom?: Date | undefined;

    /**
     * Inclusive upper creation-date bound in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
     * @type {Date}
     * @memberof SceneAnalysisListItemListQueryParams
     */
    createdAtTo?: Date | undefined;
}

export class SceneAnalysisListItemListQueryParamsBuilder {
    private internalParams: SceneAnalysisListItemListQueryParams = {};

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
     * @param limit Maximum number of items to return. Default is 15, maximum is 100
     */
    public limit(limit: number) {
        this.internalParams.limit = limit;
        return this;
    }

    /**
     *
     * @param sort Order the result by creation date. Default is createdAt:DESC
     */
    public sort(sort: SceneAnalysisListSort) {
        this.internalParams.sort = sort;
        return this;
    }

    /**
     *
     * @param createdAtFrom Inclusive lower creation-date bound in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
     */
    public createdAtFrom(createdAtFrom: Date) {
        this.internalParams.createdAtFrom = createdAtFrom;
        return this;
    }

    /**
     *
     * @param createdAtTo Inclusive upper creation-date bound in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
     */
    public createdAtTo(createdAtTo: Date) {
        this.internalParams.createdAtTo = createdAtTo;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
