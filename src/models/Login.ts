import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Login
 */
export class Login {
  /**
   * Email address of the account. (required)
   * @type {string}
   * @memberof Login
   */
  public eMail?: string;

  /**
   * Password of the account. (required)
   * @type {string}
   * @memberof Login
   */
  public password?: string;

  constructor(obj?: Partial<Login>) {
    if(!obj) {
      return;
    }
    this.eMail = map(obj.eMail);
    this.password = map(obj.password);
  }
}

export default Login;

