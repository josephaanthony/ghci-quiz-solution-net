import { Option } from './option'

export class Question {
	public _id: String;
	public desc: String;
	public optionType: String;
	public options: Option[];
}