import { Component, OnInit } from '@angular/core';
import { Persona } from './datosIngreso';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css']
})
export class FormIngresoComponent implements OnInit {

  personaModel: Persona = new Persona('','','');

  constructor() { }

  ngOnInit(): void {
      
  }

  

}
