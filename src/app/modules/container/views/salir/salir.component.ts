import { Component, OnInit } from '@angular/core';
import { AUTH_ACTIONS } from 'src/app/store/actions/auth.actions';
import { AUTH_SELECTORS } from 'src/app/store/selectors/auth.selectors';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-salir',
  templateUrl: './salir.component.html',
  styleUrls: ['./salir.component.scss']
})
export class SalirComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(AUTH_ACTIONS.Logout.run())
  }

}
