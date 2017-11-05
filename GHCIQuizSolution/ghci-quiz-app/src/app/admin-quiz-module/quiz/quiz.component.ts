import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { ToasterService } from 'angular2-toaster';

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
	private quizs: Quiz[];
	private idCounter = 1;
	private QUESTION_COMPLEXITITES = [ "COMPLEX", "MEDIUM", "EASY" ];

	constructor(private quizService: QuizService, private toasterService: ToasterService) {
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

		try {
			quiz.ComplexityComposition = JSON.parse(quiz.complexityComposition);			
		} catch (error) {
			this.toasterService.pop('error', 'Exception', 'Complexity value is not valid');
		}
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
			quiz.file = null;
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

	fileChange(quiz, event): void {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
			const file = fileList[0];
			this.quizService.updloadFile(file).then(fileResult => {
				quiz.file = fileResult;
			});
        }
	}
	
	deleteImage(quiz) {
		if(!quiz.file) {
			quiz.file = {};
		}
		quiz.file.isDeleted = true;
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
