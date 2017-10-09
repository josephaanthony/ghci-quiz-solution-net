import { Question } from './question'

export class Quiz {
	public _id: String;
	public level: Number;
	public desc: String;
	public timeoutInterval: Number;
	public questions: Question[];
}