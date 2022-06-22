import { AppComponent } from './../../app.component';
import { Component, getNgModuleById, OnInit } from '@angular/core';
import { Persona } from './../form-ingreso/datosIngreso'


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})



export class MainComponentComponent implements OnInit {


  personaModel: Persona = new Persona('','','')

  constructor() { }

  ngOnInit(): void {
  }

}
