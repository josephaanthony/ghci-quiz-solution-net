import { QuizOption } from './option'

export class Question {
	public id: String;
	public quizId: String;
	public desc: String;
	public optionType: String;
	public index: number;
	public QuizOptions: QuizOption[];
	public file: any;
}