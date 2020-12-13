import { authActions } from '../../store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.logout());
  }
}
