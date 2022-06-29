import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
 
  displayedColumns: string[] = ['position', 'name', 'edad', 'curso', 'promedio'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  edad: number;
  curso: string;
  promedio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pedro', edad: 15, curso: '1 Medio', promedio: 5.4},
  {position: 2, name: 'Juan', edad: 16, curso: '1 Medio',  promedio: 6.2},
  {position: 3, name: 'Diego', edad: 15, curso: '1 Medio', promedio: 3.8},
  {position: 4, name: 'Bernabe', edad: 14, curso: '1 Medio', promedio: 4.6},
  {position: 5, name: 'Claudia', edad: 15, curso: '1 Medio', promedio: 6.4},
  {position: 6, name: 'Maria', edad: 16, curso: '1 Medio', promedio: 5.5},
  {position: 7, name: 'Mateo', edad: 17, curso: '1 Medio', promedio: 5.4},
  {position: 8, name: 'Matias', edad: 15, curso: '1 Medio', promedio: 5.8},
  {position: 9, name: 'Vicente', edad: 15, curso: '1 Medio', promedio: 3.2},
  {position: 10, name: 'Laura', edad: 15, curso: '1 Medio', promedio: 4.4},
];

/**
 * @title Binding event handlers and properties to the table rows.
 */

