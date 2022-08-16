import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';
import { UsersEffects } from 'src/app/store/effects/users.effects';
import { usersReducer } from 'src/app/store/reducers/users.reducer';
import { UserProfileRoutingModule } from './user-profile-routing.module';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    UserProfileRoutingModule,
    TranslateForChildModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UserProfileModule { }
