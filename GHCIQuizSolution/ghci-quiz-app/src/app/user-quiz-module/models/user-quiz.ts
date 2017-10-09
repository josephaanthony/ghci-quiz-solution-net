import { UserQuestion } from './user-question';

export class UserQuiz
{
	public _id: String;
	public quizId: String;
	public level: number;
	public timeTakenInterval: Number;
	public userQuestions: UserQuestion[];
}
