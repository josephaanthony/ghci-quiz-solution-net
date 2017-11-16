import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service'
import _ from 'lodash';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users;

  constructor(private userService: UsersService) { 
  }

  ngOnInit() {
    this.userService.getUsers().then(users => {
      this.users = users.map(u => {
                                      u.UserQuizs = _(u.UserQuizs).groupBy('Quiz.level')
                                                              .flatMap(g => {console.log(g); return _.maxBy(g, 'attempt'); })
                                                              .value();
                                      return u;
                                  });
    })
  }

  private deleteUser(user) {
    this.userService.deleteUser(user.id).then((deletedUserId: String) => {
      const index = _.findIndex(this.users, { id: user.id });
      this.users.splice(index, 1);
    });
	}
}
