import { authActions } from '../../store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './forbidden.page.html',
  styleUrls: ['./forbidden.page.scss'],
})
export class ForbiddenPage implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.forbidden());
  }
}
