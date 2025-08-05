import { Component } from '@angular/core';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SendMsgComponent } from './components/send-msg/send-msg.component';
import { SectionHeaderComponent } from 'app/shared/components/section-header/section-header.component';

@Component({
  selector: 'contact-section',
  imports: [ContactInfoComponent,
    SendMsgComponent,
    SectionHeaderComponent],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  title = 'Contact Us';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  textColor = 'text-slate-900';
 }
