import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    //BrowserModule,
    FormsModule,
    OwlModule

  ],
  declarations: [
  ],
  exports: [
    MaterialModule,
    //BrowserModule,
    FormsModule,
    OwlModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class SharedModule { 

}
