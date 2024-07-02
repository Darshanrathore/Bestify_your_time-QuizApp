import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Registration
  addUser(user: any): Observable<any> {
    console.log('UserService add-user');
    return this.http.post(this.url + '/users', user);
  }

  // Login
  userLogin(userLogin: any): Observable<any> {
    return this.http.post(this.url + '/login', userLogin);
  }

  getUserCount():Observable<any>{
    return this.http.get(this.url+"/usercount");
  }

  mail(user: any) {
    console.log("Inside mail service");
    return this.http.post(this.url + '/sendemail', user);
  }

}
