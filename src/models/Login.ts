import {map} from '../common/Mapper';

/**
 * @export
 * @class Login
 */
export class Login {
  constructor(obj: any) {
    this.eMail = map(obj.eMail);
    this.password = map(obj.password);
  }

  /**
   * Email address of the account.
   * @type {string}
   * @memberof Login
   */
  public eMail: string;
  /**
   * Password of the account.
   * @type {string}
   * @memberof Login
   */
  public password: string;
}

export default Login;

