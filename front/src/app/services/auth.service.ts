import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import{Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //  private Base_Url= 'http://localhost:8080/api/v1/users';

  constructor(private httpClient:HttpClient) { }

  // getUserList(): Observable<User[]>{
  //   return this.httpClient.get<User[]>('${this.Base_Url}');
  // }
  // createUser(user:User):Observable<Object>{
  //   return this.httpClient.post('${this.Base_Url}',user);
  // }
// getToken (): String{
//  return localStorage.getItem('token');

// }
// logIn (email:String,password:String):Observable<any>{
//   const url='${this.Base_Url}/login';
//   return this.http.post<User>(url, {email,password});
// }
// signUp (email:String,password:String):Observable<any>{
//   const url='${this.Base_Url}/signup';
//   return this.http.post<User>(url, {email,password});
// }
}
