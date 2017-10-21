import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash'

import { environment } from '../../../environments/environment'
import { HttpUtil } from '../../shared/util/http.util';
import { UserQuiz } from '../models/user-quiz';
import { UserQuestion } from '../models/user-question';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserQuizService {
	private quizUserUrl = environment.apiContextUrl +  '/api/quizuser';
	private userQuestionUrl = environment.apiContextUrl +  '/api/userquestion';
	private userQuizUrl = environment.apiContextUrl +  '/api/userquiz'

	private quizErrorHandler = HttpUtil.handleErrorWithMessage(this.toasterService);

	constructor(private http: Http, private router: Router, private toasterService: ToasterService,
		private localStorageService: LocalStorageService) {

	}

	public getQuizs(): any {
		return Promise.resolve([
			{
				'_id': '59d36571a769ac08e0f87b03',
				'description': 'Quiz1',
				'level': '1',
				'timeoutInterval': '3600',
				'createDate': '2017-10-03T10:24:49.938Z',
				'questions': [
					{
						'description': 'Question 1 for Quiz 1',
						'optionType': 'Radio',
						'_id': '59d44ef26340542770834a43',
						'createDate': '2017-10-04T03:01:06.900Z',
						'options': [
							{
								'description': 'Option 1 for Question 1 Quiz 1',
								'isCorrect': 'true',
								'_id': '59d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							},
							{
								'description': 'Option 2 for Question 1 Quiz 1',
								'isCorrect': 'true',
								'_id': '69d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							},
							{
								'description': 'Option 3 for Question 1 Quiz 1',
								'isCorrect': 'true',
								'_id': '79d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							},
							{
								'description': 'Option 4 for Question 1 Quiz 1',
								'isCorrect': 'true',
								'_id': '89d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							}
						]
					},
					{
						'description': 'Question 2 for Quiz 1',
						'optionType': 'Checkbox',
						'_id': '59d4506e6340542770834a45',
						'createDate': '2017-10-04T03:07:26.801Z',
						'options': [
							{
								'description': 'Option1 for Question 2 Quiz 1',
								'isCorrect': 'true',
								'_id': '59d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option2 for Question 2 Quiz 1',
								'isCorrect': 'true',
								'_id': '69d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option3 for Question 2 Quiz 1',
								'isCorrect': 'true',
								'_id': '79d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option4 for Question 2 Quiz 1',
								'isCorrect': 'true',
								'_id': '89d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							}
						]
					}
					//, 
					// { 
					// 	'description': 'Question 3 for Quiz 1', 
					// 	'optionType': 'Checkbox', 
					// 	'_id': '59d450876340542770834a46', 
					// 	'createDate': '2017-10-04T03:07:51.368Z', 
					// 	'options': [
					// 		{ 
					// 			'description': 'Option1 for Question 3 Quiz 1', 
					// 			'isCorrect': 'true', 
					// 			'_id': '59d4d7049e40d719e48951ca', 
					// 			'createDate': '2017-10-04T12:41:40.165Z' 
					// 		},
					// 		{ 
					// 			'description': 'Option2 for Question 3 Quiz 1', 
					// 			'isCorrect': 'true', 
					// 			'_id': '69d4d7049e40d719e48951ca', 
					// 			'createDate': '2017-10-04T12:41:40.165Z' 
					// 		},
					// 		{ 
					// 			'description': 'Option3 for Question 3 Quiz 1', 
					// 			'isCorrect': 'true', 
					// 			'_id': '79d4d7049e40d719e48951ca', 
					// 			'createDate': '2017-10-04T12:41:40.165Z' 
					// 		},
					// 		{ 
					// 			'description': 'Option4 for Question 3 Quiz 1', 
					// 			'isCorrect': 'true', 
					// 			'_id': '89d4d7049e40d719e48951ca', 
					// 			'createDate': '2017-10-04T12:41:40.165Z' 
					// 		}
					// 	]
					// }, 
					// { 
					// 	'description': 'Question 4 for Quiz 1', 
					// 	'optionType': 'Text', 
					// 	'_id': '59d453846340542770834a48', 
					// 	'createDate': '2017-10-04T03:20:36.724Z', 
					// 	'options': [
					// 		{ 
					// 			'description': 'Option1 for Question 4 Quiz 1', 
					// 			'isCorrect': 'true', 
					// 			'_id': '59d4d7049e40d719e48951ca', 
					// 			'createDate': '2017-10-04T12:41:40.165Z' 
					// 		},
					// 		{ 
					// 			'description': 'Option2 for Question 4 Quiz 1', 
					// 			'isCorrect': 'true', 
					// 			'_id': '69d4d7049e40d719e48951ca', 
					// 			'createDate': '2017-10-04T12:41:40.165Z' 
					// 		},
					// 		{ 
					// 			'description': 'Option3 for Question 4 Quiz 1', 
					// 			'isCorrect': 'true', 
					// 			'_id': '79d4d7049e40d719e48951ca', 
					// 			'createDate': '2017-10-04T12:41:40.165Z' 
					// 		},
					// 		{ 
					// 			'description': 'Option4 for Question 4 Quiz 1', 
					// 			'isCorrect': 'true', 
					// 			'_id': '89d4d7049e40d719e48951ca', 
					// 			'createDate': '2017-10-04T12:41:40.165Z' 
					// 		}
					// 	] 
					// }
				]
			},
			{
				'_id': '59d36571a769ac08e0f87b04',
				'description': 'Quiz2',
				'level': '2',
				'timeoutInterval': '3600',
				'createDate': '2017-10-03T10:24:49.938Z',
				'questions': [
					{
						'description': 'Question 1 for Quiz 2',
						'optionType': 'Radio',
						'_id': '59d44ef26340542770834a43',
						'createDate': '2017-10-04T03:01:06.900Z',
						'options': [
							{
								'description': 'Op2',
								'isCorrect': 'true',
								'_id': '59d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							},
							{
								'description': 'Op11',
								'isCorrect': 'true',
								'_id': '59d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							}
						]
					},
					{
						'description': 'Question 2 for Quiz 2',
						'optionType': 'Checkbox',
						'_id': '59d454156340542770834a49',
						'createDate': '2017-10-04T03:23:01.722Z',
						'options': [
							{
								'description': 'Op2',
								'isCorrect': 'true',
								'_id': '59d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							},
							{
								'description': 'Op11',
								'isCorrect': 'true',
								'_id': '59d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							}
						]
					}
				],
			},
			{
				'_id': '59d369d0ea5e4309d482e59e',
				'description': 'Quiz 3',
				'level': '2',
				'timeoutInterval': '4000',
				'createDate': '2017-10-03T10:43:28.573Z',
				'questions': [
					{
						'description': 'Question 1 for Quiz 3',
						'optionType': 'Radio',
						'_id': '59d44ef26340542770834a43',
						'createDate': '2017-10-04T03:01:06.900Z',
						'options': [
							{
								'description': 'Option 1 for Question 1 Quiz 3',
								'isCorrect': 'true',
								'_id': '59d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							},
							{
								'description': 'Option 2 for Question 1 Quiz 3',
								'isCorrect': 'true',
								'_id': '69d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							},
							{
								'description': 'Option 3 for Question 1 Quiz 3',
								'isCorrect': 'true',
								'_id': '79d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							},
							{
								'description': 'Option 4 for Question 1 Quiz 3',
								'isCorrect': 'true',
								'_id': '89d46e6a73a0341924a64c97',
								'createDate': '2017-10-04T05:15:22.399Z'
							}
						]
					},
					{
						'description': 'Question 2 for Quiz 3',
						'optionType': 'Radio',
						'_id': '59d4506e6340542770834a45',
						'createDate': '2017-10-04T03:07:26.801Z',
						'options': [
							{
								'description': 'Option1 for Question 2 Quiz 3',
								'isCorrect': 'true',
								'_id': '59d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option2 for Question 2 Quiz 3',
								'isCorrect': 'true',
								'_id': '69d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option3 for Question 2 Quiz 3',
								'isCorrect': 'true',
								'_id': '79d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option4 for Question 2 Quiz 3',
								'isCorrect': 'true',
								'_id': '89d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							}
						]
					},
					{
						'description': 'Question 3 for Quiz 3',
						'optionType': 'Checkbox',
						'_id': '59d450876340542770834a46',
						'createDate': '2017-10-04T03:07:51.368Z',
						'options': [
							{
								'description': 'Option1 for Question 3 Quiz 3',
								'isCorrect': 'true',
								'_id': '59d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option2 for Question 3 Quiz 3',
								'isCorrect': 'true',
								'_id': '69d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option3 for Question 3 Quiz 3',
								'isCorrect': 'true',
								'_id': '79d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option4 for Question 3 Quiz 3',
								'isCorrect': 'true',
								'_id': '89d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							}
						]
					},
					{
						'description': 'Question 4 for Quiz 3',
						'optionType': 'Text',
						'_id': '59d453846340542770834a48',
						'createDate': '2017-10-04T03:20:36.724Z',
						'options': [
							{
								'description': 'Option1 for Question 4 Quiz 3',
								'isCorrect': 'true',
								'_id': '59d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option2 for Question 4 Quiz 3',
								'isCorrect': 'true',
								'_id': '69d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option3 for Question 4 Quiz 3',
								'isCorrect': 'true',
								'_id': '79d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							},
							{
								'description': 'Option4 for Question 4 Quiz 3',
								'isCorrect': 'true',
								'_id': '89d4d7049e40d719e48951ca',
								'createDate': '2017-10-04T12:41:40.165Z'
							}
						]
					}
				]

			}
		]);

		// return this.http.get(this.quizUrl)
		// 		.toPromise()
		// 		.then(response => response.json() as Quiz[])
		// 		.catch(HttpUtil.handleError);
	}

	public getUserQuizs(user) {
		return this.http.get(this.userQuizUrl + '/' + user.id)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);	

	}

	public getUser(user) {
		return this.http.get(this.quizUserUrl + '/' + user.id)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);	
	}

	public getLocalUserOrRedirect() {
		var localUser = this.localStorageService.getItem('user');
		if(localUser) {
			return this.getUser(localUser)
			.then(user => {
				if(!user) {
					this.localStorageService.unSetItem('user');
					localUser = null;
					this.router.navigateByUrl('/users/registration');
				}

				return user;
			})
		}
		
		if(!localUser) {
			this.router.navigateByUrl('/users/registration');
		}
		
		return Promise.resolve(null);
	}

	public submitAndGetNextQuestion(user) {
		return this.http.post(this.userQuestionUrl, user)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);	
	}

	public getUserByEmail(user) {
		return this.http.get(this.quizUserUrl + '/getbyemail?emailId=' + user.email)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);		
	}

	public registerUser(user) {
		return this.http.post(this.quizUserUrl, user)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);
	}

	public startQuiz(user) {
		return this.http.post(this.userQuizUrl, user)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);		
	}

	public setNextQuizForUser(user) {
		return this.getQuizs().then(quizs => {
			if (typeof user.currentUserQuizLevel === "undefined") {
				user.currentUserQuizLevel = 0;
			}
			else {
				user.currentUserQuizLevel++;
			}

			if (quizs && quizs.length && quizs.length > user.currentUserQuizLevel) {
				user.currentQuestionIndex = 0;
				user.currentUserQuiz = _.orderBy(quizs, ['level'], ['asc'])[user.currentUserQuizLevel];

				if (quizs.length == user.currentUserQuizLevel + 1) {
					user.isLastQuiz = true;
				}
			}
			else {
				return null;
			}

			return user;
		});
	}
}
