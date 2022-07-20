import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, map, of, Subject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:User[] = []

  userSelected$ = new Subject<User | null>();
  users$ = new BehaviorSubject<User[]>(this.userList);

  constructor(private httpClient: HttpClient) { }

  addUser(user:User){
    this.userList.push(user)
    this.users$.next(this.userList)
  }

  getUsers(nombre?:string): Observable<User[]>{
    return this.httpClient.get<User[]>('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos',{headers: new HttpHeaders({
      "authorization": 'token'
    })}).pipe(
      map((users) => {
        return nombre ? users.filter(user =>  (user.nombre.toLowerCase() + ' ' + user.apepat.toLowerCase()).includes(nombre.toLowerCase())) : users
      }),
      catchError((error) => {
        console.log(error)
        throw new Error()
      })
    );
  }

  getUserSelect(){
    return this.userSelected$.asObservable()
  }

  selectUserById(id: number): Observable<User>{
    //this.userSelected$.next(this.userList.find(user => user.id === id) || null)
    return this.httpClient.get<User>('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos/'+id);
  }

  deleteUserById(id: number){
    return this.httpClient.delete('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos/'+id);
  }

  searchUsersByName(name: string){
    return of(this.userList).pipe(
      map((users) => users.filter((user) => (user.nombre + ' ' + user.apepat).toLowerCase().includes(name.toLowerCase()))),
      catchError((error) => {throw new Error(error)})
    )
  }
}