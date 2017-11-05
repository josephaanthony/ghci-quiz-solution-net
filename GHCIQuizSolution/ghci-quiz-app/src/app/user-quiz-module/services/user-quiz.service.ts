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
import { BaseService } from '../../shared/service/base.service';
import { UserQuiz } from '../models/user-quiz';
import { UserQuestion } from '../models/user-question';
import { LocalStorageService } from './local-storage.service';
import { LoaderService } from '../../shared/components/loader.service'

@Injectable()
export class UserQuizService extends BaseService {
	private quizUserUrl = environment.apiContextUrl +  '/api/quizuser';
	private userQuestionUrl = environment.apiContextUrl +  '/api/userquestion';
	private userQuizUrl = environment.apiContextUrl +  '/api/userquiz'

	constructor(http: Http, private router: Router, toasterService: ToasterService,
		private localStorageService: LocalStorageService, loaderService: LoaderService) {
			super(http, toasterService, loaderService);
	}

	public getUserQuizs(user) {
		return this.getHttp(this.userQuizUrl + '/' + user.id);
	}

	public getUser(user) {
		return this.getHttp(this.quizUserUrl + '/' + user.id);
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
		return this.postHttp(this.userQuestionUrl, user, null, (response) => {
			console.log("Check Response " + response);
		});
	}

	public getUserByEmail(user) {
		return this.getHttp(this.quizUserUrl + '/getbyemail?emailId=' + user.email);
	}

	public registerUser(user) {
		return this.postHttp(this.quizUserUrl, user)
	}

	public startQuiz(user) {
		return this.postHttp(this.userQuizUrl, user);
	}
}
