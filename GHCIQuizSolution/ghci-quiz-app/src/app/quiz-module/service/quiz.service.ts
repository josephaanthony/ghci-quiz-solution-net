import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';

import { HttpUtil } from '../../shared/util/http.util';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Option } from '../models/option';

@Injectable()
export class QuizService {
	private quizUrl = 'http://localhost:5000/api/quizs';
	private questionUrl = 'http://localhost:5000/api/questions';
	private optionUrl = 'http://localhost:5000/api/options';

	private quizErrorHandler = HttpUtil.handleErrorWithMessage(this.toasterService);

	constructor(private http: Http, private toasterService: ToasterService) {

	}

	public getQuizs() {
		return this.http.get(this.quizUrl)
				.toPromise()
				.then(response => response.json() as Quiz[])
				.catch(HttpUtil.handleError);
	}

	public createQuiz = (newQuiz: Quiz): Promise<Quiz> => this.createData<Quiz>(this.quizUrl, newQuiz);
	public deleteQuiz = (delQuizId: String): Promise<String> => this.deleteData(this.quizUrl, delQuizId);
	public updateQuiz = (putQuiz: Quiz): Promise<Quiz> => this.updateData<Quiz>(this.quizUrl, putQuiz);

	public createQuestion = (quizId, newQuestion: Question): Promise<Question> => 
		this.createData<Question>(this.questionUrl + '/' + quizId, newQuestion);
	public deleteQuestion = (delQuestionId: String): Promise<String> => this.deleteData(this.questionUrl, delQuestionId);
	public updateQuestion = (putQuestion: Question): Promise<Question> => this.updateData<Question>(this.questionUrl, putQuestion);

	public createOption = (questionId, newOption: Option): Promise<Option> => 
		this.createData<Option>(this.optionUrl + '/' + questionId, newOption);
	public deleteOption = (delOptionId: String): Promise<String> => this.deleteData(this.optionUrl, delOptionId);
	public updateOption = (putOption: Option): Promise<Option> => this.updateData<Option>(this.optionUrl, putOption);

	public getQuestions(quizId) {
		return this.http.get(this.questionUrl + '/' + quizId)
			.toPromise()
			.then(response => response.json() as Quiz)
			.catch(HttpUtil.handleError);
	}




	// post("/api/quizs")
	public createData<T>(url, newData: T): Promise<T> {
		return this.http.post(url, newData)
			.toPromise()
			.then(response => response.json() as T)
			.catch(HttpUtil.handleError);
	}

	// delete("/api/quizs/:id")
	public deleteData(url, delDataId: String): Promise<String> {
		return this.http.delete(url + '/' + delDataId)
			.toPromise()
			.then(response => response.json() as String)
			.catch(HttpUtil.handleError);
	}


	// put("/api/quizs/:id")
	public updateData<T>(url, putData: T): Promise<T> {
		var putUrl = url + '/' + putData['_id'];
		return this.http.put(putUrl, putData)
			.toPromise()
			.then(response => response.json() as T)
			.catch(this.quizErrorHandler);
	}




	// public addQuestion(question) {
	// 	return this.http.post('http://localhost:3000/api/question', question).map(HttpUtil.mapJsonAndStatus);
	// }

	// public deleteQuestion(id) {
	// 	return this.http.delete('http://localhost:3000/api/question/' + id).map(HttpUtil.mapJsonAndStatus);
	// }
}
