import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../../model/model.contact';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component( {
  selector: 'app-cts',
  templateUrl: './contacts.component.html',
  styleUrls: [ './contacts.component.css' ]
} )
export class ContactsComponent implements AfterViewInit{

  pageContacts: Contact[];
  dataSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['nom','prenom','email','dateNaissance','tel'];
  motCle: string = '';
  currentPage: number = 0;
  length: number = 5;
  pages: Array<number>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( public contactsService: ContactsService, public router: Router ) {
    this.doSearch();
  }


  ngAfterViewInit() {
    this.doSearch();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  doSearch(){
    console.log( 'fonction doSearch...' );
    this.contactsService.getContacts(this.motCle)
      .subscribe( data => {
        this.pageContacts = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.pages = new Array( data['totalPages'] )
      }, err => {
        console.log( err );
      } );
  }

  chercher(){
    this.doSearch()
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  gotoPage(i:number){
    this.currentPage = i;
    this.doSearch();
  }

  onEditContact( id: number ) {
    this.router.navigate(['editContact',id]);
  }
}
