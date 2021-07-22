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
  age: number;

  constructor(private router: Router, private store: Store<{ searchUser: UserModel }> ) { }

  ngOnInit(): void {
    this.store.select('searchUser').subscribe(res => {
      this.storeData = res;
    });
  }

  onSearchClicked() {
    this.store.dispatch(new SearchUserActions.SearchUserAction({ firstName: this.firstName, lastName: this.lastName, email: this.email, age: this.age }));
    this.router.navigate(['/users']);
  }

  buttonDisable(): boolean {
    if (!this.firstName || !this.lastName || !this.email || !this.age) {
      return true;
    } else {
      return false;
    }
  }

}
