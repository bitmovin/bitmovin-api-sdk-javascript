import EncodingTemplateType from '../../models/EncodingTemplateType';

export interface EncodingTemplateResponseListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof EncodingTemplateResponseListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof EncodingTemplateResponseListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter the stored templates by type
     * @type {EncodingTemplateType}
     * @memberof EncodingTemplateResponseListQueryParams
     */
    type?: EncodingTemplateType | undefined;
}

export class EncodingTemplateResponseListQueryParamsBuilder {
    private internalParams: EncodingTemplateResponseListQueryParams = {};

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
     * @param type Filter the stored templates by type
     */
    public type(type: EncodingTemplateType) {
        this.internalParams.type = type;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
