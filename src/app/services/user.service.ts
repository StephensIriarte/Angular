import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:User[] = [];


  userSelected$ = new BehaviorSubject<User | null>(null);
  users$ = new BehaviorSubject<User[]>(this.userList);

  constructor(private httpClient: HttpClient) { }

  login(username:string, password:string): Observable<User | null>{
    return this.httpClient.get<User[]>('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos',{headers: new HttpHeaders({
      "authorization": 'Este es el token'
    })}).pipe(
      map((users) => {
        return users.find(user =>  user.username == username && user.password == password) || null
      }),
      catchError((error) => {
        console.log(error)
        throw new Error()
      })
    );
  }

  addUser(user:User){
    console.log("aqui34 service",user)
    this.userList.push(user)
    this.users$.next(this.userList)
  }

  createUser(user: string): Observable<any>{
    console.log("aqui34 service",user)
    return this.httpClient.post('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos/',user);

  }

  getUsers(nombre?:string): Observable<User[]>{
    return this.httpClient.get<User[]>('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos',{headers: new HttpHeaders({
      "authorization": 'Este es el token'
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
    return this.httpClient.get<User>('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos/'+id);
  }

  deleteUserByIndex(index?: number){
    this.userList = this.userList.filter((_, i) => index != i)
    this.users$.next(this.userList)
  }

  deleteUserById(id: number){
    return this.httpClient.delete('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos/'+id);
  }

  updateDate(data: User){
    return this.httpClient.put('https://62ce1a8e066bd2b6992fe620.mockapi.io/'+'Alumnos/'+data.id, data);
  }

  searchUsersByName(name: string){
    return of(this.userList).pipe(
      map((users) => users.filter((user) => (user.nombre + ' ' + user.apepat).toLowerCase().includes(name.toLowerCase()))),
      catchError((error) => {throw new Error(error)})
    )
  }

 

}
