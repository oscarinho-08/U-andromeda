import { Component } from '@angular/core';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TestimonialCard, TESTIMONIALS_CARDS } from './interfaces/testimonial.interfaces';

@Component({
  selector: 'testimonials-section',
  imports: [TestimonialCardComponent],
  templateUrl: './testimonials-section.component.html',
})
export class TestimonialsSectionComponent {
  testimonials: TestimonialCard[] = TESTIMONIALS_CARDS;
 }
