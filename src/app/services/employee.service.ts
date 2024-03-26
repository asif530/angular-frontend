import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from "../models/employee.model";

//dev
const baseUrl = 'http://localhost:9091/emp';

//deployment
//const baseUrl = 'http://localhost:8080/angularb';

const options = {
  headers: {
    'Access-Control-Allow-Origin':'Origin',
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, remember-me",
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }



  /*{ withCredentials: true } to generate cookie*/
  getAll(): Observable<Employee[]> {
    //return this.http.get<Tutorial[]>(baseUrl+'/api/tutorials');//deployment
    return this.http.get<Employee[]>(baseUrl+'/getEmployee');
  }

  get(id: any): Observable<any> {
    console.log(id)
    return this.http.get<Employee>(baseUrl+`/getById?id=${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'/addEmployee', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(baseUrl+"/updateEmployee", data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(baseUrl+`/deleteEmployee?id=${id}`);
  }

}
