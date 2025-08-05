import { Component } from '@angular/core';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TestimonialCard, TESTIMONIALS_CARDS } from './interfaces/testimonial.interfaces';
import { SectionHeaderComponent } from 'app/shared/components/section-header/section-header.component';

@Component({
  selector: 'testimonials-section',
  imports: [TestimonialCardComponent, SectionHeaderComponent],
  templateUrl: './testimonials-section.component.html',
})
export class TestimonialsSectionComponent {
  title = 'Testimonios';
  description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, quas saepe, harum, voluptatum at dolor commodi neque sed nam ipsam.';
  testimonials: TestimonialCard[] = TESTIMONIALS_CARDS;
 }
