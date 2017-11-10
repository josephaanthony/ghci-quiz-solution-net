import { Component, OnInit, ElementRef, trigger, state, style, transition, animate, group, keyframes } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
	styleUrls: ['./user-quiz-home.component.css'],
	animations:[
		trigger('quizeHomeAnim',[
			transition('void => *', [
			  style({transform: 'translateX(-100%)'}),
			  animate('1s ease')
			])
		])
	]
})
export class UserQuizHomeComponent implements OnInit {
	private user: any;
	private quizs: any;

	// private imageSrc = ["Business.jpg", 
	// 					"Logic.jpg", 
	// 					"Analytical.jpg"]
	
	constructor(private elementRef: ElementRef, private route: ActivatedRoute, private router: Router, private quizService: UserQuizService, private toasterService: ToasterService) {
	}

	ngOnInit() {
		this.quizService.getLocalUserOrRedirect()
			.then(user => {
				if(user) {
					this.user = user;
					this.quizService.getUserQuizs(user)
						.then(quizs => {
							this.quizs = quizs.map(q => 
								{ 
									_.remove(q.UserQuizs, u => u === null); 
									q.UserQuizs = _.sortBy(q.UserQuizs, 'attempt')
									return q  
								});
							this.setQuizActive(this.quizs, this.user);
						});
				}
			})
	}

	private getImage(imageName) {
		return this.quizService.getContextUrl() + "/Images/" + imageName;
	}

	private setQuizActive(quizs, user) {
		var currentQuiz = { id: null, status: null, Quiz: { id: null} }; 
		if(user && user.CurrentUserQuiz) {
			currentQuiz = user.CurrentUserQuiz;
		}

		
		_.each(quizs, quiz => {
			if(quiz.id === currentQuiz.Quiz.id && (currentQuiz.status === "IN_PROGRESS" || currentQuiz.status === "COMPLETED_FAIL")) {
				quiz.isActive = true;
				return false;
			}
			else if(!quiz.UserQuizs || quiz.UserQuizs.length == 0) {
				quiz.isActive = true;
				return false;
			}
		});
	}

	private startQuiz(quiz) {
		if(quiz.isActive) {
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
}
