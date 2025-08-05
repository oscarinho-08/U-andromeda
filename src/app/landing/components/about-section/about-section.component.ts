import { Component } from '@angular/core';
import { CardAboutComponent } from './card-about/card-about.component';
import { ABOUT_CARDS, AboutCard } from './data/about-card.data';
import { SectionHeaderComponent } from 'app/shared/components/section-header/section-header.component';

@Component({
  selector: 'about-section',
  imports: [ CardAboutComponent, SectionHeaderComponent],
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent {
  title = 'Sobre nosotros';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  cards: AboutCard[] = ABOUT_CARDS
}
