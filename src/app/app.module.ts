import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { AsideComponentComponent } from './components/aside-component/aside-component.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormIngresoComponent } from './components/form-ingreso/form-ingreso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    AsideComponentComponent,
    MainComponentComponent,
    ListadoComponent,
    FormIngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
