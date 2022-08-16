import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    ContainerComponent,
    NavbarComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    TranslateForChildModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class ContainerModule { }
