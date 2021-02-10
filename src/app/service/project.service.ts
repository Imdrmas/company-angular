import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  addProjectToEmployee(idEmployee: number, idProject: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addProjectToEmployee/${idEmployee}/${idProject}`, null);
  }
  addProjectToDeprtment(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addProjectToDeprtment/${id}`, data);
  }
  editProject(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editProject/${id}`, data);
  }
  findProject(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findProject/${id}`);
  }
  deleteProejct(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteProejct/${id}`);
  }

  findProjectsForEmplopyee(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findProjectsForEmplopyee/${id}`);
  }
  findProjects(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findProjects`);
  }
  deleteProjectFromEmployee(idEmployee: number, idProject: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteProjectFromEmployee/${idEmployee}/${idProject}`);
  }
}
