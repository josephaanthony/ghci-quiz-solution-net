import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';
import $ from 'jquery';

declare var jQuery;
declare var localStorage;

import { UserQuestion } from '../models/user-question';
import { UserQuiz } from '../models/user-quiz';
import { UserQuizService } from '../services/user-quiz.service';
import { User } from '../models/user';
import { LocalStorageService } from '../services/local-storage.service';

const TEMP_QUIZ_ID = '*temp*';

@Component({
	selector: 'app-user-quizs',
	templateUrl: './user-quiz.component.html',
	styleUrls: ['./user-quiz.component.css']
})
export class UserQuizComponent implements OnInit {
	private user: any;
	private quizs: any;
	//private showNextQuizOption: boolean;
	private toasterconfig  = {timeout: 0};
	
	// private currentQuestionIndex: number = -1;
	// private currentQuestion: any;
	//private currentQuizIndex: number = -1;

	constructor(private router: Router, private quizService: UserQuizService, private toasterService: ToasterService, 
		private localStorageService: LocalStorageService) {

		var localUser = this.localStorageService.getItem('user');
		if(!localUser) {
			this.router.navigateByUrl('/users/registration');
		}
	}

	ngOnInit() {
		this.quizService.getUser(this.localStorageService.getItem('user'))
			.then(user => {
				this.user = user;
				// if(user.currentUserQuiz == null) {
				// 	this.quizService.getQuizs().then(quizs => {
				// 		this.quizs = quizs;
				// 		this.startNextQuiz();
				// 	})
				// }
				this.startCarousel();
			});
	}

	onOptionSelected(userQuestion, option) {
		if(!this.user.CurrentUserQuestion.selectedOptionIds) {
			this.user.CurrentUserQuestion.selectedOptionIds = [];
		}

		this.user.CurrentUserQuestion.selectedOptionIds.push(option.id);
	}

	getNextQuestion() {
		if(this.user.CurrentUserQuestion.selectedOptionIds && this.user.CurrentUserQuestion.selectedOptionIds.length > 0) {
			this.quizService.submitAndGetNextQuestion({
				id: this.user.id,
				CurrentUserQuestion: this.user.CurrentUserQuestion
			})
			.then(user => {
				this.user = user;
				this.startCarousel();
			})
		}
		else {
			this.toasterService.pop('error', 'Options', 'Please select an option to proceed');
			//alert("Please select an option to proceed.");
		}
	}

	startCarousel() {
		// if(this.user && this.user.CurrentUserQuiz && this.user.CurrentUserQuiz.UserQuestions 
		// 		&& this.user.CurrentUserQuiz.UserQuestions.length > this.user.currentUserQuestionIndex) {
		// 	this.user.CurrentUserQuestion = this.user.CurrentUserQuiz.UserQuestions[this.user.currentUserQuestionIndex];
		// }
		// else if(this.user && this.user.CurrentUserQuiz && this.user.CurrentUserQuiz.UserQuestions
		// 		&& this.user.CurrentUserQuiz.UserQuestions.length === this.user.currentUserQuestionIndex) {
		// 			this.showNextQuizOption = true;
		// }
		// else {
		// 	alert("You have completed all the Quiz. Congratulations");	
		// }
	}

	// startNextQuiz() {
	// 	this.quizService.setNextQuizForUser(this.user).then(user => {
	// 		this.showNextQuizOption = false;
	// 		this.user = user;
	// 		this.user.currentQuestion = this.user.currentQuestion;
	// 		this.localStorageService.setItem('user', this.user);
	// 	})

	// 	// if(this.quizs && this.quizs.length > this.currentQuizIndex + 1) {
	// 	// 	this.currentQuestionIndex = -1;
	// 	// 	this.currentQuizIndex++;
	// 	// 	this.user.currentUserQuiz = this.quizs[this.currentQuizIndex];
	// 	// 	this.startCarousel();
	// 	// }
	// }

	isActive(question: UserQuestion) {
		return question === this.user.currentUserQuiz.questions[0];
	}
}
