import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';
import * as $ from 'jquery';

declare var jQuery;
declare var localStorage;

import { UserQuestion } from '../../models/user-question';
import { UserQuiz } from '../../models/user-quiz';
import { UserQuizService } from '../../services/user-quiz.service';
import { User } from '../../models/user';

const TEMP_QUIZ_ID = '*temp*';

@Component({
	selector: 'app-user-quiz-home',
	templateUrl: './user-quiz-home.component.html',
	//styleUrls: ['./user-quiz.component.css']
})
export class UserQuizHomeComponent implements OnInit {
	private user: any;
	private quizs: any;
	private toasterconfig  = {timeout: 0};
	
	constructor(private elementRef: ElementRef, private router: Router, private quizService: UserQuizService, private toasterService: ToasterService) {
		// this.localUser = this.localStorageService.getItem('user');
		// if(!this.localUser) {
		// 	this.router.navigateByUrl('/users/registration');
		// }
	}

	ngOnInit() {
		this.quizService.getLocalUserOrRedirect()
			.then(user => {
				this.user = user;
				this.quizService.getUserQuizs(user)
					.then(quizs => {
						this.quizs = quizs;
					});
			})
	}

	private startQuiz(quiz) {
		this.quizService.startQuiz({
			id: this.user.id,
			CurrentUserQuiz: {
				quizId: quiz.id
			}
		})
		.then(user => {
			this.router.navigateByUrl('/users/quiz')
		})
	}
}
