import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeePhoneService {
  constructor(private http: HttpClient) { }

  addEmployeePhone(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addEmployeePhone/${id}`, data);
  }
  editEmployeePhone(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editEmployeePhone/${id}`, data);
  }
  deleteEmployeePhone(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteEmployeePhone/${id}`);
  }
  findEmployeePhones(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findEmployeePhones/${id}`);
  }
  findEmployeePhone(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findEmployeePhone/${id}`);
  }
}
