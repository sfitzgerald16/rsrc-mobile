import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  apipath = '/api/user';
  user;

  constructor(private http: Http) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(user) {
    return this.http.post(this.apipath, user).map(res => res.json());
  }
  //   seq.subscribe((res: any) => {
  //     // If the API returned a successful response, mark the user as logged in
  //     if (res.status == 'success') {
  //       this._loggedIn(res);
  //     } else {
  //     }
  //   }, err => {
  //     console.error('ERROR', err);
  //   });

  //   return seq;
  // }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  // signup(accountInfo: any) {
  //   let seq = this.api.post('signup', accountInfo).share();

  //   seq.subscribe((res: any) => {
  //     // If the API returned a successful response, mark the user as logged in
  //     if (res.status == 'success') {
  //       this._loggedIn(res);
  //     }
  //   }, err => {
  //     console.error('ERROR', err);
  //   });

  //   return seq;
  // }

  // /**
  //  * Log the user out, which forgets the session
  //  */
  // logout() {
  //   this._user = null;
  // }

  // /**
  //  * Process a login/signup response to store user data
  //  */
  // _loggedIn(resp) {
  //   this._user = resp.user;
  // }
}
