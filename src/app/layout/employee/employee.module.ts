import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
