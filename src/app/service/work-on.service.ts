import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkOnService {

  constructor(private http: HttpClient) { }

  addWorkOn(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addWorkOn/${id}`, data);
  }
  doneWorkOn(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/doneWorkOn/${id}`, data);
  }

}
