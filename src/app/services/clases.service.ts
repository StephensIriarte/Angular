import { Clases } from '../models/clases.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  clasesList:Clases[] = [];
  clasesSelected$ = new BehaviorSubject<Clases | null>(null);
  clases$ = new BehaviorSubject<Clases[]>(this.clasesList);

  constructor(private httpClient: HttpClient) { }

  selectClaseById(id: number): Observable<Clases>{
      return this.httpClient.get<Clases>('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'clases/'+id);
    }

  createClases(Clases: string): Observable<any>{
 
    return this.httpClient.post('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'clases/',Clases);

  }

  getClases(): Observable<Clases[]>{
    return this.httpClient.get<Clases[]>('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'clases');
 

  }
  

  getClasesSelect(){
   
    return this.clasesSelected$.asObservable()
  }


  deleteClasesById(id: number){
    return this.httpClient.delete('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'clases/'+id);
  }

  updateDate(data: Clases){
    return this.httpClient.put('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'clases/'+data.id, data);
  }

}



