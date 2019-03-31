import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact-v2',
  templateUrl: './new-contact-v2.component.html',
  styleUrls: ['./new-contact-v2.component.css']
})
export class NewContactV2Component implements OnInit {

  constructor( contactService: ContactsService) { }

  ngOnInit() {
  }

  onSaveContact( dataForm ) {
    console.log(dataForm);
  }
}
