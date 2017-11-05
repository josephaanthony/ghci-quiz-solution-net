import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';


import { environment } from '../../../environments/environment'
import { BaseService } from '../../shared/service/base.service';
import { HttpUtil } from '../../shared/util/http.util';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { QuizOption } from '../models/option';
import { LoaderService } from '../../shared/components/loader.service';

@Injectable()
export class QuizService extends BaseService {
	private quizUrl = environment.apiContextUrl +  '/api/adminquiz';
	private questionUrl = environment.apiContextUrl +  '/api/adminquestion';
	private optionUrl = environment.apiContextUrl +  '/api/adminoption';

	constructor(http: Http, toasterService: ToasterService, loaderService: LoaderService) {
		super(http, toasterService, loaderService);
	}

	public getQuizs() {
		return this.getHttp<Quiz[]>(this.quizUrl);
	}

	public updloadFile(file) {
		const formData = new FormData();
		formData.append('file', file, file.name);
		return this.postHttp(environment.apiContextUrl + '/api/fileupload', formData, null, () => {});
	}

	public createQuiz = (newQuiz: Quiz): Promise<Quiz> => this.createData<Quiz>(this.quizUrl, newQuiz);
	public deleteQuiz = (delQuizId: String): Promise<String> => this.deleteData(this.quizUrl, delQuizId);
	public updateQuiz = (putQuiz: Quiz): Promise<Quiz> => this.updateData<Quiz>(this.quizUrl, putQuiz);

	public createQuestion = (newQuestion: Question): Promise<Question> => 
		this.createData<Question>(this.questionUrl, newQuestion);
	public deleteQuestion = (delQuestionId: String): Promise<String> => this.deleteData(this.questionUrl, delQuestionId);
	public updateQuestion = (putQuestion: Question): Promise<Question> => this.updateData<Question>(this.questionUrl, putQuestion);

	public getQuestions(quizId) {
		return this.getHttp<Quiz>(this.questionUrl + '/' + quizId);
	}



	// post("/api/quizs")
	public createData<T>(url, newData: T): Promise<T> {
		return this.postHttp<T>(url, newData);
	}

	// delete("/api/quizs/:id")
	public deleteData(url, delDataId: String): Promise<String> {
		return this.deleteHttp<String>(url + '/' + delDataId);
	}

	// put("/api/quizs/:id")
	public updateData<T>(url, putData: T): Promise<T> {
		return this.putHttp<T>(url, putData);
	}
}
