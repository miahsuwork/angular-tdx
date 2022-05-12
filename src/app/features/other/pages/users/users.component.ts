import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: string[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((request) => {
      this.userList = request;
    });
  }
}
