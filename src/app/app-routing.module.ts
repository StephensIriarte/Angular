
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ListaCursoComponent } from './components/curso/lista-curso/lista-curso.component';

const routes: Routes = [
{ path: 'alumno', component: AddAlumnoComponent},
{ path: 'listar', component: ListaAlumnosComponent },
{ path: 'cursos', component: ListaCursoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }

