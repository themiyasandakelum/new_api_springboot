import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // deleteUser(id: number) {
  //   throw new Error('Method not implemented.');
  // }

  private base1Url = "http://localhost:8080/api/v1/adduser"
  private base2Url = "http://localhost:8080/api/v1/users"
  

  constructor(private httpClient: HttpClient) { }

  getAllUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.base2Url}`);
  }
  signUpUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.base1Url}`,user)

  }
  deleteUser(id:number):Observable<object>{
    return this.httpClient.delete(`${this.base2Url}/${id}`);
  }
}
