import { authActions } from '../../store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.login());
  }
}
