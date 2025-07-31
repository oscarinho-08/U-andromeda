import { Component } from '@angular/core';
import { CardAboutComponent } from './card-about/card-about.component';
import { ABOUT_CARDS, AboutCard } from './data/about-card.data';

@Component({
  selector: 'about-section',
  imports: [ CardAboutComponent],
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent { 
  cards: AboutCard[] = ABOUT_CARDS
}
