import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from './models/loan';


@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private base3Url = "http://localhost:8080/api/v2/loans"
  constructor(private httpClient:HttpClient) { }

  getAllLoaddetailsList():Observable<Loan[]>{
    return this.httpClient.get<Loan[]>(`${this.base3Url}`);
  }

  // getAllUserList(): Observable<User[]>{
  //   return this.httpClient.get<User[]>(`${this.base2Url}`);
  // }
}
