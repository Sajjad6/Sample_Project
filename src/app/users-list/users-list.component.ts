import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { mockData } from '../mock-data';
import { UserModel } from '../model/user-model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  columnDefs = [
    {
      headerName: 'Checkbox',
      field: 'checkbox',
      width: 40,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    { headerName: 'First Name', field: 'firstName', sortable: true, filter: true },
    { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true},
    { headerName: 'Age', field: 'age', sortable: true, filter: true},
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
  ];

  rowData;
  userInput: any;
  rowSelection: any;
  defaultColDef: any;
  paginationPageSize: any;

  constructor(private store: Store<{ searchUser: UserModel }> ) {
    this.rowSelection = 'multiple';
    this.defaultColDef = {
      resizable: true,
    };
    this.paginationPageSize = 10;
   }

  ngOnInit(): void {
    this.store.select('searchUser').subscribe(response => {
      this.userInput = response;
    });
    mockData.unshift(this.userInput.userDetail);
    this.rowData = mockData
  }

}
