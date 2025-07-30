import { Component } from '@angular/core';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';

@Component({
  selector: 'testimonials-section',
  imports: [TestimonialCardComponent],
  templateUrl: './testimonials-section.component.html',
})
export class TestimonialsSectionComponent { }
