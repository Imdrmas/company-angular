import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  addCompany(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addCompany/${id}`, data);
  }
  editCompany(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editCompany/${id}`, data);
  }
  findCompany(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findCompany/${id}`);
  }
  deleteCompany(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteCompany/${id}`);
  }
  findCompanies(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findCompanies`);
  }
}
