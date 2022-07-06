import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:User[] = [
    {
        nombre: 'Maria',
        apepat: 'Perez',
        apemat: 'Perez',
        edad: 15,
        email: 'prueba@a.cl'  
    },
    {
        nombre: 'Jose',
        apepat: 'Fuentes',
        apemat: 'Pardo',
        edad: 17,
        email: 'prueba2@a.cl'  
    
    },
    {
        nombre: 'Juan',
        apepat: 'Sanchez',
        apemat: 'Vidal',
        edad: 18,
        email: 'prueba3@a.cl'  
    },
    {
        nombre: 'Luis',
        apepat: 'Medel',
        apemat: 'Rodriguez',
        edad: 16,
        email: 'prueba4@a.cl'  
    }
  ]

  userSelected$ = new Subject<User | null>();
  users$ = new BehaviorSubject<User[]>(this.userList);

  constructor() { }

  addUser(user:User){
    this.userList.push(user)
    this.users$.next(this.userList)
  }

  getUsers(){
    return this.users$.asObservable()
  }

  getUserSelect(){
    return this.userSelected$.asObservable()
  }

  selectUserByIndex(index?: number){
    this.userSelected$.next(index !== undefined ? this.userList[index] : null)
  }

  deleteUserByIndex(index?: number){
    this.userList = this.userList.filter((_, i) => index != i)
    this.users$.next(this.userList)
  }

  searchUsersByName(name: string){
    return of(this.userList).pipe(
      map((users) => users.filter((user) => (user.nombre + ' ' + user.apepat).toLowerCase().includes(name.toLowerCase()))),
      catchError((error) => {throw new Error(error)})
    )
  }
}