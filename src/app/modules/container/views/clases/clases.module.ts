import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { ClasesRoutingModule } from './clases.routing.module';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';

@NgModule({
  declarations: [
    ClasesComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslateForChildModule
  ]
})
export class ClasesModule { }
