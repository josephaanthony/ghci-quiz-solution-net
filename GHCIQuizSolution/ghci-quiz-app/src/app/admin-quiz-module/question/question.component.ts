import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';

import { Question } from '../models/question';
import { QuizOption } from '../models/option'
import { Quiz } from '../models/quiz'
import { QuizService } from '../service/quiz.service'

const TEMP_QUESTION_ID = '*temp*';
const TEMP_OPTION_ID = '*temp*';

@Component({
	selector: 'app-questions',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	private quiz: Quiz;
	private idCounter = 1;
	private questionIndexCounter = 0;
	private OPTION_FLAG =  [ "true", "false" ]
	private OPTION_TYPE =  [ "Radio", "Checkbox" ] 
	private QUESTION_COMPLEXITITES = [ "COMPLEX", "MEDIUM", "EASY" ];

	constructor(private route: ActivatedRoute, private quizService: QuizService) {

	}

	ngOnInit() {
		this.quizService.getQuestions(this.route.snapshot.params['quizId'])
			.then((quiz: Quiz) => {
				this.quiz = quiz;
				let maxIndexQuestion = _.maxBy(this.quiz.Questions, 'index');
				if(maxIndexQuestion) {
					this.questionIndexCounter = maxIndexQuestion.index + 1;
				}
			});
	}

	private addQuizOption(question: Question) {
		let optionIndexCounter = 0;
		let maxIndexOption = _.maxBy(question.QuizOptions, 'index');
		if(maxIndexOption) {
			optionIndexCounter = maxIndexOption.index + 1;
		}
		question.QuizOptions.push({ id: null, description: null, isCorrect: null, index: optionIndexCounter })
	}

	private removeQuizOption(question, index) {
		if(question.QuizOptions.length > 1) {
			question.QuizOptions.splice(index, 1);
		}
	}
	
	private addNewQuestion() {
		const newQuestion = new Question();
		newQuestion.id = TEMP_QUESTION_ID + (this.idCounter++);
		newQuestion.index = this.questionIndexCounter ++;
		newQuestion.quizId = this.quiz.id;
		newQuestion.QuizOptions = [{ id: null, description: null, isCorrect: null, index: 0 }];

		if(_.isEmpty(this.quiz.Questions)) {
			this.quiz.Questions = [];
		}
		this.quiz.Questions.push(newQuestion);

		window.scrollTo(0, (document.body.scrollHeight || document.documentElement.scrollHeight) + 100);
	}

	private updateQuestion(question: Question) {
		let updateFn = null;
		if(question.id.startsWith(TEMP_QUESTION_ID)) {
			updateFn = this.quizService.createQuestion;
		}
		else {
			updateFn = this.quizService.updateQuestion;
		}

		updateFn(question).then(questionResult => {
			_.extend(question, questionResult);
		});
	}

	private deleteQuestion(question: Question) {
		if(question.id.startsWith(TEMP_QUESTION_ID)) {
			const index = _.findIndex(this.quiz.Questions, { id: question.id });
			this.quiz.Questions.splice(index, 1);			
		}
		else {
			this.quizService.deleteQuestion(question.id).then((deletedQuestionId: String) => {
				const index = _.findIndex(this.quiz.Questions, { id: question.id });
				this.quiz.Questions.splice(index, 1);
			});
		}
	}
}
