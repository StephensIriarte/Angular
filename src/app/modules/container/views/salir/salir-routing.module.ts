import { SalirComponent } from './salir.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from 'src/app/guards/auth2/auth2.guard';


const routes: Routes = [
  {
    path:'',
    canActivateChild:[Auth2Guard],
    children:[
      {
        path:'',
        component: SalirComponent,
      }
    
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class salirRoutingModule { }
