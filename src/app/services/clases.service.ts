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
  private baseURL = 'https://62ce1a8e066bd2b6992fe620.mockapi.io/'

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

  

  updateData(data: any, id: string): Observable<any> {
    return this.httpClient.put(`${this.baseURL}clases/${id}`, data)
  }

  addClase(data: any, id: string): Observable<any> {
    return this.httpClient.post(`${this.baseURL}clases/`, data)
    console.log("aqui api addClase")
  }
}



