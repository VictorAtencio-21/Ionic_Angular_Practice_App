import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

export class User{
  _id:string;
  name:string;
  email:string;
  username:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:5000/api/create-user', user, this.httpOptions)
    .pipe(catchError(this.handleError<User>('Error occured')))
  }
}
