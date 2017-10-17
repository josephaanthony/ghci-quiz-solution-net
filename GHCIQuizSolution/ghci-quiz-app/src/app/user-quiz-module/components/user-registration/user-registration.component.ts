import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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
	private toasterconfig  = {timeout: 0};

	constructor(private router: Router, private quizService: UserQuizService, 
		private toasterService: ToasterService, private localStorageService: LocalStorageService) {
		this.user = this.localStorageService.getItem('user');
		if (this.user) {
			alert('Error occured. Please contact the administrator');
		}
		else {
			this.user = new User();
		}
	}

	private registerUser() {
		this.quizService.registerUser(this.user).then(user => {
			this.user = user;
			this.localStorageService.setItem('user', this.user);
			this.router.navigateByUrl('/users/quizhome');
		});

		/*
			this.quizService.setNextQuizForUser(this.user).then(user => {
				this.user = user;
				this.localStorageService.setItem('user', this.user);
				this.router.navigateByUrl('/users/quiz');
			})
		*/
	}

	startNextQuiz(quizs) {
		this.quizService.setNextQuizForUser(this.user);

		// if(quizs && quizs.length) {
		// 	this.user.currentQuestionIndex = -1;
		// 	this.user.currentUserQuiz = _.orderBy(quizs, ['level'], ['asc'])[0];
		// 	this.user.currentUserQuizLevel = this.user.currentUserQuiz.level;

		// 	this.localStorageService.setItem('user', this.user);
		// 	this.router.navigateByUrl('/users/quiz');
		// }
	}
}
