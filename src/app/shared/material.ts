import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '../../../node_modules/@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDatepickerModule, DateAdapter } from '@angular/material';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatRippleModule,
  NativeDateAdapter,
  MatExpansionModule,
  MatNativeDateModule,
  MatStepperModule,
  MatChipsModule,
  MatTooltipModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

// import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule, MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRippleModule,
    MatRadioModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatListModule,
    MatStepperModule,
    MatSnackBarModule,
    MatDatepickerModule, // fechas
    MatNativeDateModule, // fechas
    // AngularEditorModule//por ahora no se ocupa,
    MatTooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule {
  /**
 * DateAdapter para pasar la fecha en español a los calendarios.
 * @param dateAdapter
 */
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('es');
  }
}