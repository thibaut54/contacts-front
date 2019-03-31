import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/model.contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:any=new Contact();
  contactCreated:boolean=false;

  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }

  saveContact(dataForm) {
    this.contactsService.saveContact(dataForm).subscribe(data=>{
      console.log(data);
    }, err =>{
      console.log(JSON.parse(err._body).message)
    } );
  }
}
