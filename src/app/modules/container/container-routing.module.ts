import { salirModule } from './views/salir/salir.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';


const routes: Routes = [
  
  {
    path:'',
    component: ContainerComponent,
    loadChildren: () => import('./views/user-list/user-list.module').then((m) => m.UserListModule)
  },

  {
    path:'listar',
    component: ContainerComponent,
    loadChildren: () => import('./views/user-list/user-list.module').then((m) => m.UserListModule)
  },

  {
    path:'datos/:id',
    component: ContainerComponent,
    loadChildren: () => import('./views/user-profile/user-profile.module').then((m) => m.UserProfileModule)
  },

  {
    path:'salir',
    component: ContainerComponent,
    loadChildren: () => import('./views/salir/salir.module').then((m) => m.salirModule)
  },

  {
    path:'addUser',
    component: ContainerComponent,
    loadChildren: () => import('./views/register-form/register-form.module').then((m) => m.RegisterFormModule)
  }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
