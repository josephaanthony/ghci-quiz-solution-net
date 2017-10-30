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
import { LoaderService } from '../../shared/components/loader.service'

@Injectable()
export class UserQuizService {
	private quizUserUrl = environment.apiContextUrl +  '/api/quizuser';
	private userQuestionUrl = environment.apiContextUrl +  '/api/userquestion';
	private userQuizUrl = environment.apiContextUrl +  '/api/userquiz'

	private quizErrorHandler = HttpUtil.handleErrorWithMessage(this.toasterService);
	private dispayLoaderFn;
	private hideLoaderFn;

	constructor(private http: Http, private router: Router, private toasterService: ToasterService,
		private localStorageService: LocalStorageService, private loaderService: LoaderService) {
		this.dispayLoaderFn = () => { 
			this.loaderService.display(true);
		}
		this.hideLoaderFn = () => {
			this.loaderService.display(false);
		} 
	}

	public getUserQuizs(user) {
		this.dispayLoaderFn();
		return this.http.get(this.userQuizUrl + '/' + user.id)
			.finally(this.hideLoaderFn)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);	

	}

	public getUser(user) {
		this.dispayLoaderFn();
		return this.http.get(this.quizUserUrl + '/' + user.id)
			.finally(this.hideLoaderFn)
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
		this.dispayLoaderFn();
		return this.http.post(this.userQuestionUrl, user)
			.finally(this.hideLoaderFn)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);	
	}

	public getUserByEmail(user) {
		this.dispayLoaderFn();
		return this.http.get(this.quizUserUrl + '/getbyemail?emailId=' + user.email)
			.finally(this.hideLoaderFn)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);		
	}

	public registerUser(user) {
		this.dispayLoaderFn();
		return this.http.post(this.quizUserUrl, user)
			.finally(this.hideLoaderFn)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);
	}

	public startQuiz(user) {
		this.dispayLoaderFn();
		return this.http.post(this.userQuizUrl, user)
			.finally(this.hideLoaderFn)
			.toPromise()
			.then(response => response.json())
			.catch(this.quizErrorHandler);		
	}
}
