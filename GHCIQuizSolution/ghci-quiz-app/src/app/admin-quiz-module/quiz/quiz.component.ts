import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { QuizService } from '../service/quiz.service';

const TEMP_QUIZid = '*temp*';
//const QUESTION_COMPLEXITITES = [ "COMPLEX", "MEDIUM", "EASY" ]

@Component({
	selector: 'app-quizs',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
	private toasterConfig = {timeout: 0};
	private quizs: Quiz[];
	private idCounter = 1;
	private QUESTION_COMPLEXITITES = [ "COMPLEX", "MEDIUM", "EASY" ];

	constructor(private quizService: QuizService) {
	}

	ngOnInit() {
		this.quizService.getQuizs()
			.then((quizs: [Quiz]) => {
				this.quizs = quizs.map(q => {
					return this.populateCompositionLevel(q);
				});
			});
	}

	private populateCompositionLevel(quiz: Quiz) {
		if(!quiz.complexityComposition) {
			quiz.complexityComposition = "[ { \"level\": null, \"nos\": null }]";
		}
		quiz.ComplexityComposition = JSON.parse(quiz.complexityComposition);
		return quiz;
	}

	private removeCompositionLevel(quiz, index) {
		if(quiz.ComplexityComposition.length > 1) {
			quiz.ComplexityComposition.splice(index, 1);
		}
	}

	private addNewQuiz() {
		const newQuiz = new Quiz();
		this.populateCompositionLevel(newQuiz);
		newQuiz.id = TEMP_QUIZid + (this.idCounter++);
		this.quizs.push(newQuiz);
	}

	private updateQuiz(quiz: Quiz) {
		quiz.complexityComposition = JSON.stringify(quiz.ComplexityComposition);		
		let updateFn = null;

		if(quiz.id.startsWith(TEMP_QUIZid)) {
			updateFn = this.quizService.createQuiz;
		}
		else {
			updateFn = this.quizService.updateQuiz;
		}

		updateFn(quiz).then(quizResult => {
			console.log(quizResult);
			_.extend(quiz, quizResult);
			this.populateCompositionLevel(quiz);
		});
	}

	private deleteQuiz(quiz: Quiz) {
		if(quiz.id.indexOf(TEMP_QUIZid) >= 0) {
			const index = _.findIndex(this.quizs, { id: quiz.id });
			this.quizs.splice(index, 1);			
		}
		else {
			this.quizService.deleteQuiz(quiz.id).then((deletedQuizId: String) => {
				const index = _.findIndex(this.quizs, { id: quiz.id });
				this.quizs.splice(index, 1);
			});
		}
	}
}
