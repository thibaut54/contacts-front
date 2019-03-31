import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../model/model.contact';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsService {

  constructor( public http: HttpClient ) {

  }

  getContacts(motCle:string): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>( "http://localhost:8080/findContacts?nom=" + motCle )
    // return this.http.get('http://localhost:8080/contacts').subscribe();
      .pipe( map( httpResponse => httpResponse ) )};


  getContact(id:number) {
    return this.http.get( "http://localhost:8080/contacts/" + id)
    // return this.http.get('http://localhost:8080/contacts')
      .pipe( map( httpResponse => httpResponse ) );
  }

  saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/contacts", contact).pipe(map(httpResponse => httpResponse));
  }


}
