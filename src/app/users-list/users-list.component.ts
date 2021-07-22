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
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Action',
      cellRenderer: '<button>',
      cellRendererParams: {
        onClick:
        this.onDeleteClick.bind(this),
        label: 'Delete'
      },
    }
    // { headerName: 'Action', field: 'action' }
  ];

  // rowData = [
  //   { fname: 'A', lname: 'B', email: 'abc', action: 'Delete' },
  //   { fname: 'C', lname: 'D', email: 'def', action: 'Delete' },
  //   { fname: 'E', lname: 'F', email: 'ghi', action: 'Delete' }
  // ]
  rowData;
  userInput: any;
  filteredMockData = mockData;
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
    // this.store.
    this.store.select('searchUser').subscribe(response => {
      this.userInput = response;
      console.log('In UsersCOmp:', this.userInput);
    });
    // if (this.userInput.userDetail.firstName) {
    //   this.filteredMockData = this.filteredMockData.filter(fil => fil.firstName.includes(this.userInput.userDetail.firstName));
    // }
    // if (this.userInput.userDetail.lastName) {
    //   this.filteredMockData = this.filteredMockData.filter(fil => fil.lastName.includes(this.userInput.userDetail.lastName));
    // }
    // if (this.userInput.userDetail.email) {
    //   this.filteredMockData = this.filteredMockData.filter(fil => fil.email.includes(this.userInput.userDetail.email));
    // }
    this.rowData = this.filteredMockData;
  }

  onDeleteClick(params) {
    console.log('Delete Clicked');
  }

}
