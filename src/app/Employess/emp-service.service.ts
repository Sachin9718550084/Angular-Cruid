import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class EmpServiceService {

  private baseUrl = 'http://localhost:3000/Employees';

  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


   getEmp(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/${id}`);
   }

  createEmployee(employee: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

   updateEmployee(id: number, value: any): Observable<object> {
     return this.http.put(`${this.baseUrl}/${id}`, value);
   }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}

