import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericResponse } from '../models/responses/generic-response';
import { Employee } from '../models/employee';
import { endpoint } from '../shared/constants';
import { EmployeeResponse } from '../models/responses/employee-response';
import { EmployeeSave } from '../models/requests/employee-save';


const URL_EMPLOYEES = endpoint.name + 'employees/miguel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private clienteHttp: HttpClient) { }

  getEmployees(): Promise<GenericResponse<EmployeeResponse>> {
    return new Promise((resolve, reject) => {
      this.clienteHttp.get(URL_EMPLOYEES).subscribe( (response: GenericResponse<EmployeeResponse>) => {
        console.log('Respuesta servicio Get', response);
        if(response.success && response.data){
          if(response.success) {
            resolve(response);
          } else {
            reject('Error en el servicio');
          }
        } else {
          reject('Error inesperado');
        }
      }, err => {
        reject(err)
      });
    });
  }

  saveEmployee(employee: EmployeeSave): Promise<GenericResponse<String>> {
    return new Promise((resolve, reject) => {
      this.clienteHttp.post(URL_EMPLOYEES, employee).subscribe( (response: GenericResponse<String>) => {
        console.log('Respuesta servicio Get', response);
        if(response.success && response.data){
          if(response.success) {
            resolve(response);
          } else {
            reject('Error en el servicio');
          }
        } else {
          reject('Error inesperado');
        }
      }, err => {
        reject(err)
      });
    });
  }
}
