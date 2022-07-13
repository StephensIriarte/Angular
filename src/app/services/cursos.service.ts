import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos.model';
import { BehaviorSubject, catchError, map, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursoList:Cursos[] = [
    {
        nombreCurso: 'Java',
        Horario: 'Vespertino'   
    },
    {
      nombreCurso: 'Oracle',
      Horario: 'Vespertino' 
    
    },
    {
      nombreCurso: 'Angular',
      Horario: 'Diurno' 
    }
   
  ]

  cursoSelected$ = new Subject<Cursos | null>();
  cursos$ = new BehaviorSubject<Cursos[]>(this.cursoList);


  constructor() { }
}
