import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import { ToasterService } from 'angular2-toaster'

import { UserQuizService } from '../../services/user-quiz.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user';

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	//styleUrls: ['./user-quiz.component.css']
})
export class UserRegistrationComponent {
	private user: User;

	constructor(private route: ActivatedRoute, private router: Router, private quizService: UserQuizService, 
		private toasterService: ToasterService, private localStorageService: LocalStorageService) {
		this.user = this.localStorageService.getItem('user');		
		var userParam = new User();

		if(this.route.snapshot.queryParams["emailId"] && 
			this.route.snapshot.queryParams["fName"]) {
			userParam.email = this.route.snapshot.queryParams["emailId"],
			userParam.name = this.route.snapshot.queryParams["fName"] + " " + this.route.snapshot.queryParams["lName"]
		}

		if(this.user && this.user.email === userParam.email) {
			this.router.navigateByUrl('/users/quizhome');				
		}
		else if(userParam.email) {
			this.registerUser(userParam);
		}
		else {
			this.user = new User();
		}
	}

	private signInSuccess(user) {
		this.user = user;
		this.localStorageService.setItem('user', { id: this.user.id, email: this.user.email, name: this.user.name })
		this.router.navigateByUrl('/users/quizhome');
	}

	private registerUser(user) {
		this.quizService.registerUser(user).then(userResult => {
			this.signInSuccess(userResult);
		});
	}

	private singInUser() {
		this.quizService.getUserByEmail(this.user).then(user => {
			if(user && user.id) {
				this.signInSuccess(user);
			}
			else {
				this.toasterService.pop("error", "Registration", "You have entered an invalid email id");
			}
		})
	}
}
