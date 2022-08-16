import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';
import { RegisterFormRoutingModule } from './register-form-routing.module';
import { RegisterFormComponent } from './register-form.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterFormRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateForChildModule,
  ]
})
export class RegisterFormModule { }
