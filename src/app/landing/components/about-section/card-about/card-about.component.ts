import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-about',
  imports: [],
  templateUrl: './card-about.component.html',
})
export class CardAboutComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
}
