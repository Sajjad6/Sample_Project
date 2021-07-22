import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserModel } from '../model/user-model';
import * as SearchUserActions from '../store/search-user.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  storeData;
  firstName: string;
  lastName: string;
  email: string;

  constructor(private router: Router, private store: Store<{ searchUser: UserModel }> ) { }

  ngOnInit(): void {
    this.store.select('searchUser').subscribe(res => {
      this.storeData = res;
    });
    console.log('storeValue:', this.storeData);
  }

  onSearchClicked() {
    console.log('Search Clicked');
    this.store.dispatch(new SearchUserActions.SearchUserAction({ firstName: this.firstName, lastName: this.lastName, email: this.email }));
    // this.store.dispatch()
    // this.store.select('searchUser').subscribe(res => {
    //   this.storeData = res;
    // });
    // console.log('storeValue:', this.storeData);
    this.router.navigate(['/users']);
  }

  buttonDisable(): boolean {
    if (!this.firstName && !this.lastName && !this.email) {
      return true;
    } else {
      return false;
    }
  }

}
