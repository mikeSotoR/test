import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { EmployeeSave } from 'src/app/models/requests/employee-save';
import { EmployeeService } from 'src/app/services/employee.service';
import { GenericResponse } from 'src/app/models/responses/generic-response';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  public employee: EmployeeSave
  public name: FormControl;
  public lastName: FormControl;
  public birthday: Date
  maxDateIni
  
  @ViewChild('inputIni') inputIni;

  constructor(
    private employeeServ: EmployeeService,
    public router: Router
  ) {
    this.name = new FormControl('', [ Validators.compose([Validators.required,
      Validators.minLength(1), Validators.maxLength(30)])])
    this.lastName = new FormControl('', [ Validators.compose([Validators.required,
      Validators.minLength(1), Validators.maxLength(30)])])
    this.employee = new EmployeeSave()
  }

  ngOnInit() {
    var today = new Date()
    this.maxDateIni = today
  }
  
  saveEmployee() {
    console.log('valido', this.birthday)
    if(this.inputIni.nativeElement.validity.valid && this.name.valid && this.lastName.valid) {
      if(this.birthday != null){
        this.employee.birthday = `${this.birthday.getFullYear()}/${this.setDayMonth((this.birthday.getMonth() + 1).toString())}/${this.setDayMonth((this.birthday.getDate()).toString())}`
      }
      console.log('empleado a guardar', this.employee)
      this.employeeServ.saveEmployee(this.employee).then((response: GenericResponse<String>) => {

        console.log('obtencion de empleados:', response)
        
        this.router.navigate(['/employee'])
      }, err => {
        console.log('Error en el servicio para obtener los empleados', err)
      });
    }
  }

  setDayMonth(number: string) {
    if(number.length == 1) return `0${number}`
    else return number
  }

  cancel() {
    this.router.navigate(['/employee'])
  }
}
