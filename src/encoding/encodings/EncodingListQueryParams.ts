import CloudRegion from '../../models/CloudRegion';
import EncodingMode from '../../models/EncodingMode';

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
     * Order list result according an encoding resource attribute.  The fields that can be used for sorting are: + `id` + `startedAt` + `createdAt` + `modifiedAt` + `type` + `name` + `status` + `cloudRegion` + `encoderVersion` 
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
     * Filter encodings to only show the ones with the selectedCloudRegion specified which was selected when cloudregion:AUTO was set
     * @type {CloudRegion}
     * @memberof EncodingListQueryParams
     */
    selectedCloudRegion?: CloudRegion | undefined;

    /**
     * Filter encodings to only show the ones with the encoderVersion specified.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    encoderVersion?: string | undefined;

    /**
     * Filter encodings to only show the ones with the encoderVersion specified that was actually used for the encoding.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    selectedEncoderVersion?: string | undefined;

    /**
     * Filter encodings to only show the ones with the encodingMode specified that was actually used for the encoding.
     * @type {EncodingMode}
     * @memberof EncodingListQueryParams
     */
    selectedEncodingMode?: EncodingMode | undefined;

    /**
     * Filter encodings to only show the ones with this exact name.
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    name?: string | undefined;

    /**
     * The search query string for advanced filtering.  We are using the [Apache Lucene](https://lucene.apache.org/) query syntax here.  Only lucene queries equivalent to exact matching and startsWith are supported. Also only AND conjunctions supported at the moment.  Please be aware that our filters are **case-insensitive**  Examples of supported lucene queries: + `name:MyEncoding1` - This searches for encodings with names that are equal to `myencoding1`  + `name:\"My Encoding\"` - This searches for encodings with names that are equal to `my encoding`  + `name:MyEncoding\\*` - This searches for encodings with names that are equal to `myencoding*` Please have a look at the [Lucene Documentation - Escaping Special Characters](https://lucene.apache.org/core/8_1_1/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#Escaping_Special_Characters) section to see what characters have to be escaped.  + `name:test*` - This searches for encodings with names that start with `test`  + `name:test* AND labels:Customer1` - This searches for encodings with names starting with `test` and labels containing an entry that is equal to `customer1`  Available search fields: + `name`  + `labels`  Please be aware to send these queries url encoded.  If you provide fields or lucene queries that are not supported, it will result in an error response. 
     * @type {string}
     * @memberof EncodingListQueryParams
     */
    search?: string | undefined;

    /**
     * Filter encodings to only return those created after this exact time, provided in ISO8601 format: YYYY-MM-DDThh:mm:ssZ
     * @type {Date}
     * @memberof EncodingListQueryParams
     */
    createdAtNewerThan?: Date | undefined;

    /**
     * Filter encodings to only return those created before this exact time, provided in ISO8601 format: YYYY-MM-DDThh:mm:ssZ
     * @type {Date}
     * @memberof EncodingListQueryParams
     */
    createdAtOlderThan?: Date | undefined;

    /**
     * Filter encodings to only return those started after this exact time, provided in ISO8601 format: YYYY-MM-DDThh:mm:ssZ
     * @type {Date}
     * @memberof EncodingListQueryParams
     */
    startedAtNewerThan?: Date | undefined;

    /**
     * Filter encodings to only return those started before this exact time, provided in ISO8601 format: YYYY-MM-DDThh:mm:ssZ
     * @type {Date}
     * @memberof EncodingListQueryParams
     */
    startedAtOlderThan?: Date | undefined;
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
     * @param sort Order list result according an encoding resource attribute.  The fields that can be used for sorting are: + `id` + `startedAt` + `createdAt` + `modifiedAt` + `type` + `name` + `status` + `cloudRegion` + `encoderVersion` 
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
     * @param selectedCloudRegion Filter encodings to only show the ones with the selectedCloudRegion specified which was selected when cloudregion:AUTO was set
     */
    public selectedCloudRegion(selectedCloudRegion: CloudRegion) {
        this.internalParams.selectedCloudRegion = selectedCloudRegion;
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
     * @param selectedEncoderVersion Filter encodings to only show the ones with the encoderVersion specified that was actually used for the encoding.
     */
    public selectedEncoderVersion(selectedEncoderVersion: string) {
        this.internalParams.selectedEncoderVersion = selectedEncoderVersion;
        return this;
    }

    /**
     *
     * @param selectedEncodingMode Filter encodings to only show the ones with the encodingMode specified that was actually used for the encoding.
     */
    public selectedEncodingMode(selectedEncodingMode: EncodingMode) {
        this.internalParams.selectedEncodingMode = selectedEncodingMode;
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
     * @param search The search query string for advanced filtering.  We are using the [Apache Lucene](https://lucene.apache.org/) query syntax here.  Only lucene queries equivalent to exact matching and startsWith are supported. Also only AND conjunctions supported at the moment.  Please be aware that our filters are **case-insensitive**  Examples of supported lucene queries: + `name:MyEncoding1` - This searches for encodings with names that are equal to `myencoding1`  + `name:\"My Encoding\"` - This searches for encodings with names that are equal to `my encoding`  + `name:MyEncoding\\*` - This searches for encodings with names that are equal to `myencoding*` Please have a look at the [Lucene Documentation - Escaping Special Characters](https://lucene.apache.org/core/8_1_1/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#Escaping_Special_Characters) section to see what characters have to be escaped.  + `name:test*` - This searches for encodings with names that start with `test`  + `name:test* AND labels:Customer1` - This searches for encodings with names starting with `test` and labels containing an entry that is equal to `customer1`  Available search fields: + `name`  + `labels`  Please be aware to send these queries url encoded.  If you provide fields or lucene queries that are not supported, it will result in an error response. 
     */
    public search(search: string) {
        this.internalParams.search = search;
        return this;
    }

    /**
     *
     * @param createdAtNewerThan Filter encodings to only return those created after this exact time, provided in ISO8601 format: YYYY-MM-DDThh:mm:ssZ
     */
    public createdAtNewerThan(createdAtNewerThan: Date) {
        this.internalParams.createdAtNewerThan = createdAtNewerThan;
        return this;
    }

    /**
     *
     * @param createdAtOlderThan Filter encodings to only return those created before this exact time, provided in ISO8601 format: YYYY-MM-DDThh:mm:ssZ
     */
    public createdAtOlderThan(createdAtOlderThan: Date) {
        this.internalParams.createdAtOlderThan = createdAtOlderThan;
        return this;
    }

    /**
     *
     * @param startedAtNewerThan Filter encodings to only return those started after this exact time, provided in ISO8601 format: YYYY-MM-DDThh:mm:ssZ
     */
    public startedAtNewerThan(startedAtNewerThan: Date) {
        this.internalParams.startedAtNewerThan = startedAtNewerThan;
        return this;
    }

    /**
     *
     * @param startedAtOlderThan Filter encodings to only return those started before this exact time, provided in ISO8601 format: YYYY-MM-DDThh:mm:ssZ
     */
    public startedAtOlderThan(startedAtOlderThan: Date) {
        this.internalParams.startedAtOlderThan = startedAtOlderThan;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
