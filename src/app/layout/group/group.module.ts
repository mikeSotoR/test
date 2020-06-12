import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    SharedModule
  ],
  declarations: [GroupComponent]
})
export class GroupModule { }
