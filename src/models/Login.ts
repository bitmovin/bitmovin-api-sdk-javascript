import {map} from '../common/Mapper';

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
  public eMail: string;

  /**
   * Password of the account. (required)
   * @type {string}
   * @memberof Login
   */
  public password: string;

  constructor(obj: Partial<Login>) {
    this.eMail = map(obj.eMail);
    this.password = map(obj.password);
  }
}

export default Login;

