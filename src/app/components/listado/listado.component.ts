import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  alumnos = [
    {
        "nombre": "Juan Perez",
        "asignatura": "Matematicas",
        "nota": 5
    },
    {
      "nombre": "Rosa Martinez",
      "asignatura": "Matematicas",
      "nota": 6
    },
    {
      "nombre": "Pedro Lopez",
      "asignatura": "Matematicas",
      "nota": 3.5
    },
    {
      "nombre": "Jorge Santander",
      "asignatura": "Matematicas",
      "nota": 6.5
    }];



  constructor() { }

  ngOnInit(): void {
  }




}


