import { authActions } from '../../store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './redirect.page.html',
  styleUrls: ['./redirect.page.scss'],
})
export class RedirectPage implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.redirect());
  }
}
