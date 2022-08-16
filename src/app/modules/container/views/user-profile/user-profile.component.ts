import { Component, OnInit } from '@angular/core';
import { debounceTime, map, Observable, Subscription, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AUTH_SELECTORS } from 'src/app/store/selectors/auth.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

      myForm = new FormGroup({
        id: new FormControl(null, Validators.required),
        nombre: new FormControl(null, Validators.required),
        apepat: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        edad: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        address: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        avatar: new FormControl(null, Validators.required),
        postalCode: new FormControl(null, [Validators.required, Validators.maxLength(5)])
      })

      userList: any = []
      userSelect$: Observable<User> | null = null
      susbcriptions: Subscription = new Subscription();
      user$ = this.store.select(AUTH_SELECTORS.selectGetUser);
      currentDate = new Date();
      

      constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private store:Store) { }

      ngOnDestroy(){
        this.susbcriptions.unsubscribe();
      }

        ngOnInit(): void {

          var idUser = this.activatedRoute.snapshot.paramMap.get('id');
          let idUserTrans = Number(idUser) 

          this.userService.selectUserById(idUserTrans)
        

        this.susbcriptions.add(
          this.activatedRoute.params.subscribe((param) => {
            this.userService.selectUserById(idUserTrans).subscribe({
              next: (user) => this.myForm.patchValue(user),
              error: () => this.myForm.reset()
            })
          })
  )
 
  }

  selectUser(id: number){
    this.userSelect$ = this.userService.selectUserById(id)
  }

}
