import { Injectable }     from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { this.http = http; }

  getProfile() {
      return this.http.get("http://localhost/json/profile.php")
                      .map(res => res.json())
                      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

}