import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addEmployee/${id}`, data);
  }
  editEmployee(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editEmployee/${id}`, data);
  }
  findEmployee(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findEmployee/${id}`);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteEmployee/${id}`);
  }
}
