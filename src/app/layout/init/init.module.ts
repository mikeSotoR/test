import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './init.component';
import { InitRoutingModule } from './init-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InitRoutingModule,
    SharedModule
  ],
  declarations: [InitComponent]
})
export class InitModule { }
