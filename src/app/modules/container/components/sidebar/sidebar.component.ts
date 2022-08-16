import { Component, OnInit } from '@angular/core';
import { AUTH_ACTIONS } from 'src/app/store/actions/auth.actions';
import { AUTH_SELECTORS } from 'src/app/store/selectors/auth.selectors';
import { Store } from '@ngrx/store';

//declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    
    { path: '/listar', title: 'Listar',  icon: '', class: '' },
    { path: '/addUser', title: 'Agregar Alumno',  icon:'', class: '' },
    { path: '/salir', title: 'Salir',  icon:'', class: '' }

];




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public items: any[] = ROUTES;
 
  constructor(private store:Store) { }

  ngOnInit() {
    this.items = ROUTES.filter(items => items);
   // console.log(this.items)
  }

  logout(){
    this.store.dispatch(AUTH_ACTIONS.Logout.run())
  }
 
}


