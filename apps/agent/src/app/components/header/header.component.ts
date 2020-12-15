import { Component } from '@angular/core';
import { Agent, fromAgent } from '@fmg/domain';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'fmg-agent-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  agent$ = this.store.pipe(
    select(fromAgent.agent),
    filter((agent): agent is Agent => !!agent)
  );

  constructor(private store: Store) {}
}
