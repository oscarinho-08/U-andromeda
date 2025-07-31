import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
})
export class TestimonialCardComponent { 
  @Input() img!: string;
  @Input() name!: string;
  @Input() career!: string;
  @Input() description!: string;
}
