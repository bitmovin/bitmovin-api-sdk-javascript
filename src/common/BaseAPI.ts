import Configuration from './Configuration';
import {RestClient} from './RestClient';

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected restClient: RestClient;

    constructor(configuration: Configuration) {
        this.restClient = new RestClient(configuration)
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    public name: 'RequiredError' = 'RequiredError';
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}
