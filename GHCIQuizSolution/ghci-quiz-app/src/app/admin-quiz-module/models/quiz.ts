import { Question } from './question'

export class Quiz {
	public id: String;
	public level: Number;
	public desc: String;
	public timeoutInterval: Number;
	public complexityComposition: string;
	public ComplexityComposition: any;
	public Questions: Question[];
	public file: any;
}