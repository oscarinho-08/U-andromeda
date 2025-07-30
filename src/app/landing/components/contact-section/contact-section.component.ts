import { Component } from '@angular/core';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SendMsgComponent } from './components/send-msg/send-msg.component';

@Component({
  selector: 'contact-section',
  imports: [ContactInfoComponent,SendMsgComponent],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent { }
