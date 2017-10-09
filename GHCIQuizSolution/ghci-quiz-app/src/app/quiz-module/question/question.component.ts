import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';

import { Question } from '../models/question';
import { Option } from '../models/option'
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
	private toasterconfig  = {timeout: 0};

	constructor(private route: ActivatedRoute, private quizService: QuizService) {

	}

	ngOnInit() {
		this.quizService.getQuestions(this.route.snapshot.params['quizId'])
			.then((quiz: Quiz) => {
				this.quiz = quiz;
			});
	}

	private addNewQuestion() {
		const newQuestion = new Question();
		newQuestion._id = TEMP_QUESTION_ID + (this.idCounter++);
		if(_.isEmpty(this.quiz.questions)) {
			this.quiz.questions = [];
		}
		this.quiz.questions.push(newQuestion);
	}

	private updateQuestion(question: Question) {
		if(question._id.startsWith(TEMP_QUESTION_ID)) {
			const questionToUpdate = _.omit(question, ['_id']);
			this.quizService.createQuestion(this.quiz._id, questionToUpdate).then((updatedQuestion: Question) => {
				const index = _.findIndex(this.quiz.questions, { _id: question._id });
				this.quiz.questions[index] = updatedQuestion;
			});
		} else {
			this.quizService.updateQuestion(question).then((updatedQuestion: Question) => {
				const index = _.findIndex(this.quiz.questions, { _id: question._id });
				this.quiz.questions[index] = updatedQuestion;
			});
		}
	}

	private deleteQuestion(question: Question) {
		this.quizService.deleteQuestion(question._id).then((deletedQuestionId: String) => {
			const index = _.findIndex(this.quiz.questions, { _id: deletedQuestionId });
			this.quiz.questions.splice(index, 1);
		});
	}

	private selectedQuestion;
	private optionIdCounter = 1;
	private showOptions(question) {
		this.selectedQuestion = question;
	}

	private addNewOption(question) {
		this.showOptions(question);
		const newOption = new Option();
		newOption._id = TEMP_OPTION_ID + (this.optionIdCounter++);
		if(_.isEmpty(this.selectedQuestion.options)) {
			this.selectedQuestion.options = [];
		}
		this.selectedQuestion.options.push(newOption);
	}

	private updateOption(question: Question, option: Option) {
		console.log('Update Option: ' + option.desc);
		if(option._id.startsWith(TEMP_OPTION_ID)) {
			const optionToUpdate = _.omit(option, ['_id']);
			this.quizService.createOption(question._id, optionToUpdate).then((updatedOption: Option) => {
				const index = _.findIndex(question.options, { _id: option._id });
				question.options[index] = updatedOption;
			});
		} else {
			this.quizService.updateOption(option).then((updatedOption: Option) => {
				const index = _.findIndex(question.options, { _id: option._id });
				question.options[index] = updatedOption;
			});
		}
	}

	private deleteOption(question: Question, option: Option) {
		this.quizService.deleteOption(option._id).then((deletedOptionId: String) => {
			const index = _.findIndex(question.options, { _id: deletedOptionId });
			question.options.splice(index, 1);
		});
	}

}
