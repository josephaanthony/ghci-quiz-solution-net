import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';

import { environment } from '../../../environments/environment'
import { HttpUtil } from '../../shared/util/http.util';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { QuizOption } from '../models/option';
import { LoaderService } from '../../shared/components/loader.service';

@Injectable()
export class QuizService {
	private quizUrl = environment.apiContextUrl +  '/api/adminquiz';
	private questionUrl = environment.apiContextUrl +  '/api/adminquestion';
	private optionUrl = environment.apiContextUrl +  '/api/adminoption';

	private quizErrorHandler = HttpUtil.handleErrorWithMessage(this.toasterService);
	private quizSuccessHandler = HttpUtil.handleSuccessWithMessag(this.toasterService);

	private dispayLoaderFn;
	private hideLoaderFn;

	constructor(private http: Http, private toasterService: ToasterService, private loaderService: LoaderService) {
		this.dispayLoaderFn = () => { 
			this.loaderService.display(true);
		}
		this.hideLoaderFn = () => {
			this.loaderService.display(false);
		} 
	}

	public getQuizs() {
		this.dispayLoaderFn();
		return this.http.get(this.quizUrl)		
				.do(this.hideLoaderFn)
				.toPromise()
				.then(response => response.json() as Quiz[])
				.catch(HttpUtil.handleError);
	}

	public createQuiz = (newQuiz: Quiz): Promise<Quiz> => this.createData<Quiz>(this.quizUrl, newQuiz);
	public deleteQuiz = (delQuizId: String): Promise<String> => this.deleteData(this.quizUrl, delQuizId);
	public updateQuiz = (putQuiz: Quiz): Promise<Quiz> => this.updateData<Quiz>(this.quizUrl, putQuiz);

	public createQuestion = (newQuestion: Question): Promise<Question> => 
		this.createData<Question>(this.questionUrl, newQuestion);
	public deleteQuestion = (delQuestionId: String): Promise<String> => this.deleteData(this.questionUrl, delQuestionId);
	public updateQuestion = (putQuestion: Question): Promise<Question> => this.updateData<Question>(this.questionUrl, putQuestion);

	// public createOption = (questionId, newOption: Option): Promise<Option> => 
	// 	this.createData<Option>(this.optionUrl + '/' + questionId, newOption);
	// public deleteOption = (delOptionId: String): Promise<String> => this.deleteData(this.optionUrl, delOptionId);
	// public updateOption = (putOption: Option): Promise<Option> => this.updateData<Option>(this.optionUrl, putOption);

	public getQuestions(quizId) {
		this.dispayLoaderFn();
		return this.http.get(this.questionUrl + '/' + quizId)
			.do(this.hideLoaderFn)
			.toPromise()
			.then(response => response.json() as Quiz)
			.catch(HttpUtil.handleError);
	}




	// post("/api/quizs")
	public createData<T>(url, newData: T): Promise<T> {
		return this.http.post(url, newData)
			.do(this.quizSuccessHandler)
			.toPromise()
			.then(response => response.json() as T)
			.catch(this.quizErrorHandler);
	}

	// delete("/api/quizs/:id")
	public deleteData(url, delDataId: String): Promise<String> {
		return this.http.delete(url + '/' + delDataId)
			.do(this.quizSuccessHandler)
			.toPromise()
			.then(response => response.json() as String)
			.catch(this.quizErrorHandler);
	}


	// put("/api/quizs/:id")
	public updateData<T>(url, putData: T): Promise<T> {
		var putUrl = url;
		return this.http.put(putUrl, putData)
			.do(this.quizSuccessHandler)
			.toPromise()
			.then(response => response.json() as T)
			.catch(this.quizErrorHandler);
	}
}
