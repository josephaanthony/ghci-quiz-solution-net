import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, group, keyframes } from '@angular/core';
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
	styleUrls: ['./user-quiz.component.css'],
	animations: [
		trigger('questionAnim', [
			transition('* => *', [
				style({
					"transform": "translateZ(-1000px) rotateY(90deg)",
				}),
				animate("1.5s ease")
			])
		])
	]
})
export class UserQuizComponent implements OnInit {
	private user: any;
	private quizs: any;
	private questionSubmitted:boolean;
	private progress = {
		color : 'primary',
		mode : 'determinate',
		value : 0,
		bufferValue : 0
	};
	private totalQuestions:any;
	
	constructor(private elementRef: ElementRef, private router: Router, private quizService: UserQuizService, private toasterService: ToasterService) {
	}

	ngOnInit() {
		this.quizService.getLocalUserOrRedirect()
			.then(user => {
				this.user = user;
				this.totalQuestions = user.CurrentUserQuiz.Quiz.totalQuestions;
				this.progress.value = (parseInt(user.CurrentUserQuestion.index)+1)/parseInt(this.totalQuestions)*100;
				this.checkQuizCompleted(this.user);
			});
	}

	private getImage(imageName) {
		return this.quizService.getContextUrl() + "/" + imageName;
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
	showingResult = 0; result;
	showResult(result:boolean) {
		this.showingResult ++;
		this.result = result;
	}

	getNextQuestion() {
		if(this.user.CurrentUserQuestion.selectedOptionIds && this.user.CurrentUserQuestion.selectedOptionIds.length > 0) {
			this.questionSubmitted = true;
			this.quizService.submitAndGetNextQuestion({
				id: this.user.id,
				CurrentUserQuestion: this.user.CurrentUserQuestion
			})
			.then(user => {
				this.showResult(user.lastQuestionIsCorrect);
				jQuery(this.elementRef.nativeElement).find('#resultDiv').show(100);
				jQuery(this.elementRef.nativeElement).find('#optionsDiv').hide(100);
				setTimeout(() => {
					jQuery(this.elementRef.nativeElement).find('#resultDiv').hide(10);
					jQuery(this.elementRef.nativeElement).find('#optionsDiv').show(10);					
					this.user.isLastQuestionForCurrentQuiz = user.isLastQuestionForCurrentQuiz;
					this.user.CurrentUserQuestion = user.CurrentUserQuestion;
					this.progress.value = (parseInt(user.CurrentUserQuestion.index)+1)/parseInt(this.totalQuestions)*100;					
					this.questionSubmitted = false;
					this.checkQuizCompleted(user);
				}, 1500);
			})
		}
		else {
			this.toasterService.pop('error', 'Options', 'Please select an option to proceed');
		}
	}

	private checkQuizCompleted(user) {
		if(user && (user.CurrentUserQuestion == null || user.CurrentUserQuestion.id == null)) {
			this.router.navigateByUrl('/users/quizhome');
			return true;
		}

		return false;
	}
}
