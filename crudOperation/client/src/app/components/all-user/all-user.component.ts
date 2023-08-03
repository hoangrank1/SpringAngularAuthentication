import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  users: any = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(val => {
      this.users = val;
    });
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe((val) => {
      console.log(val);
      this.getAllUsers();
    });
  }
}
