import { lexicon } from '../../constants/lexicon.constant';
import { Component } from '@angular/core';

@Component({
  selector: 'fmg-agent-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  lexicon = lexicon;

  constructor() {}
}
