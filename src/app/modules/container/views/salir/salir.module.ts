import { salirRoutingModule } from './salir-routing.module';
import { SalirComponent } from './salir.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [SalirComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    salirRoutingModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateForChildModule,
  ]
})
export class salirModule { }
