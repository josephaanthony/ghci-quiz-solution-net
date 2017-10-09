import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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
	private showNextQuizOption: boolean;
	
	// private currentQuestionIndex: number = -1;
	// private currentQuestion: any;
	//private currentQuizIndex: number = -1;

	constructor(private router: Router, private quizService: UserQuizService, private localStorageService: LocalStorageService) {
		this.user = this.localStorageService.getItem('user');
		if(!this.user) {
			this.router.navigateByUrl('/users/registration');
		}
	}

	ngOnInit() {
		// this.quizService.getUser()
		// 	.then(user => {
		// 		this.user = user;

		// 		if(user.currentUserQuiz == null) {
		// 			this.quizService.getQuizs().then(quizs => {
		// 				this.quizs = quizs;
		// 				this.startNextQuiz();
		// 			})
		// 		}
		// 	});
		// this.quizService.getQuizs()
		// 	.then((quizs: [Quiz]) => {
		// 		this.quizs = quizs;
		// 	});
		this.startCarousel();
	}

	onOptionSelected(question, option, $event) {
		if(!this.user.currentQuestion.selectedOptions) {
			this.user.currentQuestion.selectedOptions = [];
		}

		this.user.currentQuestion.selectedOptions.push(option._id);
	}

	getNextQuestion() {
		if(this.user.currentQuestion.selectedOptions && this.user.currentQuestion.selectedOptions.length > 0) {
			this.startCarousel(false);
		}
		else {
			alert("Please select an option to proceed.");
		}
	}

	startCarousel(isInitial = true) {
		if(!isInitial || this.user.currentQuestionIndex < 0) {
			this.user.currentQuestionIndex++;
		}

		if(this.user && this.user.currentUserQuiz && this.user.currentUserQuiz.questions 
				&& this.user.currentUserQuiz.questions.length > this.user.currentQuestionIndex) {
			this.user.currentQuestion = this.user.currentUserQuiz.questions[this.user.currentQuestionIndex];
			this.localStorageService.setItem('user', this.user);
		}
		else if(this.user && this.user.currentUserQuiz && this.user.currentUserQuiz.questions
				&& this.user.currentUserQuiz.questions.length === this.user.currentQuestionIndex) {
					this.showNextQuizOption = true;
		}
		else {
			alert("You have completed all the Quiz. Congratulations");	
		}
	}

	startNextQuiz() {
		this.quizService.setNextQuizForUser(this.user).then(user => {
			this.showNextQuizOption = false;
			this.user = user;
			this.user.currentQuestion = this.user.currentQuestion;
			this.localStorageService.setItem('user', this.user);
		})

		// if(this.quizs && this.quizs.length > this.currentQuizIndex + 1) {
		// 	this.currentQuestionIndex = -1;
		// 	this.currentQuizIndex++;
		// 	this.user.currentUserQuiz = this.quizs[this.currentQuizIndex];
		// 	this.startCarousel();
		// }
	}

	isActive(question: UserQuestion) {
		return question === this.user.currentUserQuiz.questions[0];
	}
}
