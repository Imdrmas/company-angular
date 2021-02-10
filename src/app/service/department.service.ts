import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  addDepartment(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addDepartment/${id}`, data);
  }
  editDepartment(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editDepartment/${id}`, data);
  }
  findDepartment(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findDepartment/${id}`);
  }
  deleteDepartment(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteDepartment/${id}`);
  }
}
