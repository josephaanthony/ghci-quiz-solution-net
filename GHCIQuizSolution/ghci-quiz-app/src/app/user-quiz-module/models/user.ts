import { UserQuiz } from './user-quiz';
import { UserQuestion } from './user-question';

export class User
{
	public _id: String;
	public registrationId: String;
	public name: String;
	public email: String;

	public currentQuestionIndex: number;
	public currentQuestion: UserQuestion;

	public currentUserQuizLevel: number;
	public currentUserQuiz: UserQuiz;
	public archivedUserQuiz: UserQuiz[];
}