import { Component, OnInit } from '@angular/core';
import { Persona } from './../form-ingreso/datosIngreso'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
