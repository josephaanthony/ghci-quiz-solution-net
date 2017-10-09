import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { Option } from '../models/option'
import { QuizService } from '../service/quiz.service';

const TEMP_QUIZ_ID = '*temp*';

@Component({
	selector: 'app-quizs',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
	private quizs: [Quiz];
	private idCounter = 1;

	constructor(private quizService: QuizService) {

	}

	ngOnInit() {
		this.quizService.getQuizs()
			.then((quizs: [Quiz]) => {
				this.quizs = quizs;
			});
	}

	private addNewQuiz() {
		const newQuiz = new Quiz();
		newQuiz._id = TEMP_QUIZ_ID + (this.idCounter++);
		this.quizs.push(newQuiz);
	}

	private updateQuiz(quiz: Quiz) {
		if(quiz._id.startsWith(TEMP_QUIZ_ID)) {
			const quizToUpdate = _.omit(quiz, ['_id']);
			this.quizService.createQuiz(quizToUpdate).then((updatedQuiz: Quiz) => {
				const index = _.findIndex(this.quizs, { _id: quiz._id });
				this.quizs[index] = updatedQuiz;
			});
		} else {
			this.quizService.updateQuiz(quiz).then((updatedQuiz: Quiz) => {
				const index = _.findIndex(this.quizs, { _id: quiz._id });
				this.quizs[index] = updatedQuiz;
			});
		}
	}

	private deleteQuiz(quiz: Quiz) {
		this.quizService.deleteQuiz(quiz._id).then((deletedQuizId: String) => {
			const index = _.findIndex(this.quizs, { _id: deletedQuizId });
			this.quizs.splice(index, 1);
		});
	}

	// private updateQuiz(quiz) {
	// 	this.quizService.updateQuiz(quiz)
	// 		.subscribe(updatedQuiz => {
	// 			//
	// 		},
	// 		error => {
	// 			let index = _.findIndex(this.quizs, { _id: quiz.id });
	// 			this.quizs[index] = quiz;
	// 		});
	// }
}
