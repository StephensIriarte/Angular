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

  displayedColumnsTable = ['index', 'nombre', 'apepat', 'apemat' ,'edad', 'email', 'action']
  tableDataSource$: Observable<MatTableDataSource<User>>;

  userSelect: User | null = null;

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
            this.userSelect = user
          }, error : (error) => {
            console.error(error)
          }
        })
    )
  }

  selectUser(index?: number){
    this.userService.selectUserByIndex(index)
  }

  deleteUser(index?: number){
    this.userService.deleteUserByIndex(index)
  }

}





