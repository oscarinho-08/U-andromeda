import { Component } from '@angular/core';
import { CardAboutComponent } from './card-about/card-about.component';

@Component({
  selector: 'about-section',
  imports: [ CardAboutComponent],
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent { }
