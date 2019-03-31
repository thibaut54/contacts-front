import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/model.contact';
import { ActivateRoutes } from '@angular/router/src/operators/activate_routes';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactCreated: false;
  contact: any;
  idContact: number;

  constructor(public activatedRoute: ActivatedRouteSnapshot, public contactService: ContactsService) {
    this.idContact = activatedRoute.params['id'];
  }

  ngOnInit() {
    this.contactService.getContact(this.idContact).subscribe(data=>{
      this.contact = data;
    });
  }


  updateContact() {

  }
}
