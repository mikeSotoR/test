import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEmployeeRoutingModule } from './add-employee-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    SharedModule
  ],
  declarations: [AddEmployeeComponent]
})
export class AddEmployeeModule { }
