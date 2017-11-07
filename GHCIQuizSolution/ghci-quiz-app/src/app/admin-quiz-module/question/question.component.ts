import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';

import { ToasterService } from 'angular2-toaster';
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
	private QUESTION_COMPLEXITITES = QuizService.QUESTION_COMPLEXITITES;

	constructor(private route: ActivatedRoute, private quizService: QuizService, private toasterService: ToasterService) {

	}

	ngOnInit() {
		this.quizService.getQuestions(this.route.snapshot.params['quizId'])
			.then((quiz: Quiz) => {
				this.quiz = quiz;
				
				if(this.quiz.complexityComposition && this.quiz.complexityComposition.indexOf("GROUP") >= 0) {
					this.QUESTION_COMPLEXITITES = ["GROUP"];
				}
				
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

		if(this.QUESTION_COMPLEXITITES.length === 1) {
			newQuestion.complexity = this.QUESTION_COMPLEXITITES[0];
		}

		if(_.isEmpty(this.quiz.Questions)) {
			this.quiz.Questions = [];
		}
		this.quiz.Questions.push(newQuestion);

		window.scrollTo(0, (document.body.scrollHeight || document.documentElement.scrollHeight) + 100);
	}

	private validateQuestion(question: Question) {
		if(this.QUESTION_COMPLEXITITES.indexOf(question.complexity) < 0) {
			this.toasterService.pop("error", "Validation", "Complexity value not valid");	
			return false;
		}

		return true;
	}

	private updateQuestion(question: Question) {
		let updateFn = null;
		if(question.id.startsWith(TEMP_QUESTION_ID)) {
			updateFn = this.quizService.createQuestion;
		}
		else {
			updateFn = this.quizService.updateQuestion;
		}

		if(!this.validateQuestion(question)) {
			return;
		}

		updateFn(question).then(questionResult => {
			question.file = null;
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

	fileChange(question, event): void {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
			const file = fileList[0];
			//question.file = file;
			this.quizService.updloadFile(file).then(fileResult => {
				question.file = fileResult;
			});
        }
	}
	
	deleteImage(question) {
		if(!question.file) {
			question.file = {};
		}
		question.file.isDeleted = true;
	}

	private imageCounter = 0;
	private getImage(imageName) {
		if(imageName) {
			return this.quizService.getContextUrl() + "/Images/" + imageName + "?" + this.imageCounter++;
		}
		else {
			return null;
		}
	}
}
