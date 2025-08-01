import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card-about',
  imports: [LucideAngularModule],
  templateUrl: './card-about.component.html',
})
export class CardAboutComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
  
}
