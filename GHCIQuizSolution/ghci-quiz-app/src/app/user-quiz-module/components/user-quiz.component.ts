import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';
import * as $ from 'jquery';

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
	
	constructor(private elementRef: ElementRef, private router: Router, private quizService: UserQuizService, private toasterService: ToasterService) {
		// var localUser = this.localStorageService.getItem('user');
		// if(!localUser) {
		// 	this.router.navigateByUrl('/users/registration');
		// }
	}

	ngOnInit() {
		this.quizService.getLocalUserOrRedirect()
		//this.quizService.getUser(this.localStorageService.getItem('user'))
			.then(user => {
				this.user = user;
				this.checkQuizCompleted(this.user);
			});
	}

	onOptionSelected(userQuestion, option) {
		this.user.CurrentUserQuestion.selectedOptionIds =
			_.reduce(
				$(this.elementRef.nativeElement).find('[name="optionSelection"]:checked'),
				(strObj, e) =>
					{ 
						strObj.val = strObj.val + (strObj.index++ ? "," : "") + $(e).val(); return strObj; 
					}, 
				{ index: 0, val: "" }
			).val
	}
	showingResult; result;
	showResult(result:boolean) {
		this.showingResult=true;
		this.result = result;
	}

	animateAndLoadNextQuestion(user) {
		$("#question").removeClass( "flipInLeft" )
		$("#question").addClass( "flipOutRight" ).on("animationend",function(){
			$("#question").removeClass( "flipOutRight" )
			$("#question").addClass( "flipInLeft" )
		});

		$("#answer").removeClass( "flipInRight" )
		$("#answer").addClass( "flipOutLeft" ).on("animationend",()=>{
			this.user.isLastQuestionForCurrentQuiz = user.isLastQuestionForCurrentQuiz;
			this.user.CurrentUserQuestion = user.CurrentUserQuestion;
			$("#answer").addClass( "flipInRight" )
			$("#answer").removeClass( "flipOutLeft" )
		});
	}

	getNextQuestion() {
		if(this.user.CurrentUserQuestion.selectedOptionIds && this.user.CurrentUserQuestion.selectedOptionIds.length > 0) {
			this.quizService.submitAndGetNextQuestion({
				id: this.user.id,
				CurrentUserQuestion: this.user.CurrentUserQuestion
			})
			.then(user => {
				this.showResult(user.CurrentUserQuestion.isCorrect);
				setTimeout(()=>{
					this.showingResult=false;
					this.animateAndLoadNextQuestion(user);
					this.checkQuizCompleted(this.user);
				},1500);
			})
		}
		else {
			this.toasterService.pop('error', 'Options', 'Please select an option to proceed');
		}
	}

	private checkQuizCompleted(user) {
		if(user && (user.CurrentUserQuestion == null || user.CurrentUserQuestion.id == null)) {
			this.router.navigateByUrl('/users/quizhome');
		}
	}
}
