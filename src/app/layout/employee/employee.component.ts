import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { GenericResponse } from 'src/app/models/responses/generic-response';
import { EmployeeResponse } from 'src/app/models/responses/employee-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public dataSource;
  employees: Employee[]
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[] = [
    'id',
    'name',
    'last_name',
    'birthday'
  ];

  constructor(
    private employeeServ: EmployeeService,
    public router: Router
  ) { }

  ngOnInit() {
    this.employeeServ.getEmployees().then((response: GenericResponse<EmployeeResponse>) => {
      this.employees = response.data.employees;
      this.dataSource = new MatTableDataSource<Employee>(this.employees);
      
      this.dataSource.paginator = this.paginator;
      console.log('obtencion de empleados:', this.employees)
    }, err => {
      console.log('Error en el servicio para obtener los empleados', err)
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addEmployee() {
    this.router.navigate(['/add-employee'])
  }

}
