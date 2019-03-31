import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../model/model.contact';

@Injectable()
export class ContactsService {

  constructor( public http: HttpClient ) {

  }

  getContacts(motCle:string, currentPage:number, size:number) {
    return this.http.get( "http://localhost:8080/findContacts?nom=" + motCle + "&size=" + size + "&page=" + currentPage )
    // return this.http.get('http://localhost:8080/contacts')
      .pipe( map( httpResponse => httpResponse ) );
  }

  getContact(id:number) {
    return this.http.get( "http://localhost:8080/contacts/" + id)
    // return this.http.get('http://localhost:8080/contacts')
      .pipe( map( httpResponse => httpResponse ) );
  }

  saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/contacts", contact).pipe(map(httpResponse => httpResponse));
  }


}
