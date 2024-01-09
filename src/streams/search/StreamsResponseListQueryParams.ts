import StreamsType from '../../models/StreamsType';
import StreamsVideoStatus from '../../models/StreamsVideoStatus';

export interface StreamsResponseListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof StreamsResponseListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof StreamsResponseListQueryParams
     */
    limit?: number | undefined;

    /**
     * Query to search for in a streams' title, description and ID
     * @type {string}
     * @memberof StreamsResponseListQueryParams
     */
    query?: string | undefined;

    /**
     * Type of stream to search for
     * @type {StreamsType}
     * @memberof StreamsResponseListQueryParams
     */
    type?: StreamsType | undefined;

    /**
     * Status of the streams to search for
     * @type {StreamsVideoStatus}
     * @memberof StreamsResponseListQueryParams
     */
    status?: StreamsVideoStatus | undefined;

    /**
     * Upper limit for the creation date of found streams as UTC in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
     * @type {string}
     * @memberof StreamsResponseListQueryParams
     */
    createdBefore?: string | undefined;

    /**
     * Lower limit for the creation date of found streams as UTC in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
     * @type {string}
     * @memberof StreamsResponseListQueryParams
     */
    createdAfter?: string | undefined;

    /**
     * Filter for token-protected/signed streams
     * @type {boolean}
     * @memberof StreamsResponseListQueryParams
     */
    signed?: boolean | undefined;

    /**
     * Filter for domain-restricted streams
     * @type {boolean}
     * @memberof StreamsResponseListQueryParams
     */
    domainRestricted?: boolean | undefined;
}

export class StreamsResponseListQueryParamsBuilder {
    private internalParams: StreamsResponseListQueryParams = {};

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
     * @param query Query to search for in a streams' title, description and ID
     */
    public query(query: string) {
        this.internalParams.query = query;
        return this;
    }

    /**
     *
     * @param type Type of stream to search for
     */
    public type(type: StreamsType) {
        this.internalParams.type = type;
        return this;
    }

    /**
     *
     * @param status Status of the streams to search for
     */
    public status(status: StreamsVideoStatus) {
        this.internalParams.status = status;
        return this;
    }

    /**
     *
     * @param createdBefore Upper limit for the creation date of found streams as UTC in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
     */
    public createdBefore(createdBefore: string) {
        this.internalParams.createdBefore = createdBefore;
        return this;
    }

    /**
     *
     * @param createdAfter Lower limit for the creation date of found streams as UTC in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
     */
    public createdAfter(createdAfter: string) {
        this.internalParams.createdAfter = createdAfter;
        return this;
    }

    /**
     *
     * @param signed Filter for token-protected/signed streams
     */
    public signed(signed: boolean) {
        this.internalParams.signed = signed;
        return this;
    }

    /**
     *
     * @param domainRestricted Filter for domain-restricted streams
     */
    public domainRestricted(domainRestricted: boolean) {
        this.internalParams.domainRestricted = domainRestricted;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
