import CloudRegion from '../../models/CloudRegion';

export interface EncodingListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof EncodingListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof EncodingListQueryParams
     */
    limit?: number | undefined;

    /**
     * Order list result according an encoding resource attribute
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    sort?: string | undefined;

    /**
     * Filter encodings to only show the ones with the type specified.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    type?: string | undefined;

    /**
     * Filter encodings to only show the ones with the status specified.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    status?: string | undefined;

    /**
     * Filter encodings to only show the ones with the cloudRegion specified.
     * @type {CloudRegion}
     * @memberof EncodingListQueryParams
     */
    cloudRegion?: CloudRegion | undefined;

    /**
     * Filter encodings to only show the ones with the encoderVersion specified.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    encoderVersion?: string | undefined;

    /**
     * Filter encodings to only show the ones with this exact name.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    name?: string | undefined;

    /**
     * The search query string for advanced filtering.  We are using the [Apache Lucene](https://lucene.apache.org/) query syntax here.  Only lucene queries equivalent to exact matching and startsWith are supported.  Please be aware that our filters are **case-insensitive**  Examples of supported lucene queries:  + `name:MyEncoding1` - This searches for encodings with names that are equal to `myencoding1`  + `name:Test*` - This searches for encodings with names that start with `test`  Available search fields:  + `name`  If you provide fields or lucene queries that are not supported, it will result in an error response. 
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    search?: string | undefined;
}

export class EncodingListQueryParamsBuilder {
    private internalParams: EncodingListQueryParams = {};

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
     * @param sort Order list result according an encoding resource attribute
     */
    public sort(sort: string) {
        this.internalParams.sort = sort;
        return this;
    }

    /**
     *
     * @param type Filter encodings to only show the ones with the type specified.
     */
    public type(type: string) {
        this.internalParams.type = type;
        return this;
    }

    /**
     *
     * @param status Filter encodings to only show the ones with the status specified.
     */
    public status(status: string) {
        this.internalParams.status = status;
        return this;
    }

    /**
     *
     * @param cloudRegion Filter encodings to only show the ones with the cloudRegion specified.
     */
    public cloudRegion(cloudRegion: CloudRegion) {
        this.internalParams.cloudRegion = cloudRegion;
        return this;
    }

    /**
     *
     * @param encoderVersion Filter encodings to only show the ones with the encoderVersion specified.
     */
    public encoderVersion(encoderVersion: string) {
        this.internalParams.encoderVersion = encoderVersion;
        return this;
    }

    /**
     *
     * @param name Filter encodings to only show the ones with this exact name.
     */
    public name(name: string) {
        this.internalParams.name = name;
        return this;
    }

    /**
     *
     * @param search The search query string for advanced filtering.  We are using the [Apache Lucene](https://lucene.apache.org/) query syntax here.  Only lucene queries equivalent to exact matching and startsWith are supported.  Please be aware that our filters are **case-insensitive**  Examples of supported lucene queries:  + `name:MyEncoding1` - This searches for encodings with names that are equal to `myencoding1`  + `name:Test*` - This searches for encodings with names that start with `test`  Available search fields:  + `name`  If you provide fields or lucene queries that are not supported, it will result in an error response. 
     */
    public search(search: string) {
        this.internalParams.search = search;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
