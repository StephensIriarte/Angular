import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, Subscription, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaAlumnosComponent  implements OnInit {

  displayedColumnsTable = ['index', 'nombre', 'apepat', 'apemat' , 'email', 'action']
  tableDataSource$: Observable<MatTableDataSource<User>>;

  userSelect$: Observable<User> | null = null

  susbcriptions: Subscription = new Subscription();

  constructor(private userService: UserService) {
    this.tableDataSource$ = this.userService.getUsers().pipe(tap((users) => console.log(users)),
                                                            map((users) => new MatTableDataSource<User>(users)));
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
  }

  deleteUser(id: number){
    this.userService.deleteUserById(id).subscribe((resp) => {
      console.log(resp);
    })
    this.getUsers();
  }

  getUsers(){
    this.tableDataSource$ = this.userService.getUsers().pipe(tap((users) => console.log(users)),
                                                            map((users) => new MatTableDataSource<User>(users)));
  }

}





