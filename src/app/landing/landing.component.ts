import { Component } from '@angular/core';
import { HeroSectionComponent } from '@landing/sections/hero-section/hero-section.component';
import { AboutSectionComponent } from '@landing/sections/about-section/about-section.component';
import { TestimonialsSectionComponent } from '@landing/sections/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from '@landing/sections/contact-section/contact-section.component';

@Component({
  selector: 'app-landing',
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent { }
