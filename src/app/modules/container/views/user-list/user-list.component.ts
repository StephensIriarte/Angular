import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, map, Observable, Subscription, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { USERS_ACTIONS } from 'src/app/store/actions/users.actions';
import { USERS_SELECTORS } from 'src/app/store/selectors/users.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  inputBusqueda = new FormControl();

  textFromOtherComponent: string | null = null

  displayedColumnsTable = ['id', 'nombre', 'apepat', 'apemat' , 'email', 'action']
  tableDataSource$: Observable<MatTableDataSource<User>>;


  userSelect$: Observable<User> | null = null

  susbcriptions: Subscription = new Subscription();

  constructor(private userService: UserService, private router:Router) {
    this.tableDataSource$ = this.userService.getUsers().pipe(map((users) => new MatTableDataSource<User>(users)));
  }

  ngOnDestroy(){
    this.susbcriptions.unsubscribe();
  }

 
  ngOnInit(): void {
    this.susbcriptions.add(
      this.userService.getUserSelect().subscribe({
          next: (user) => {
            
          }, error : (error) => {
            console.error(error)
          }
        })
    )
  }

  selectUser(id: number){
    this.userSelect$ = this.userService.selectUserById(id)
    this.router.navigate(['/datos', id]);
    //console.log('aquii', id)
  }

  deleteUser(id: number){
    this.userService.deleteUserById(id).subscribe((resp) => {
     // console.log(resp);
    })
    this.getUsers();
    alert("Registro Eliminado")
  }

  updateUser(){

  }


  getUsers(){
    this.tableDataSource$ = this.userService.getUsers().pipe(tap((users) => console.log(users)),
                                                            map((users) => new MatTableDataSource<User>(users)));
  }

}
