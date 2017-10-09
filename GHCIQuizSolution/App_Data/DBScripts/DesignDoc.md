create table Quiz (
	_id varchar(36),	
	description varchar(500),
	level integer,
	timeoutInterval integer
)

CREATE TABLE [dbo].[Question] (
    [_id]         VARCHAR (36)  NOT NULL,
    [quizId]      VARCHAR (36)  NULL,
    [description] VARCHAR (500) NULL,
    [optionType]  VARCHAR (10)  NULL, 
    CONSTRAINT [PK_Question] PRIMARY KEY ([_id])
);

create table QuizOption (
	_id varchar(36), 
	questionId varchar(36),
	description varchar(500), 
	isCorrect bit
)









create table UserQuiz
(
	_id varchar(36),
	quizId varchar(36),
	timeTakenInterval integer
)


create table UserQuestion 
(
	_id varchar(36),
	questionId varchar(36),
	selectedOptionIds varchar(500),
	isCorrect bit
)


create table QuizUser
(
	_id varchar(36),
	name varchar(36),
	email varchar(100),
	currentUserQuizId varchar(36),
	archivedUserQuizIds varchar(500)
)



insert into Quiz values ('5a122b17-a3a5-403a-8a9c-79b84095d515', 'Quiz No 1', 1, 3600);
insert into Quiz values ('5a122b17-a3a5-403a-8a9c-79b84095d516', 'Quiz No 2', 2, 3600);
insert into Quiz values ('5a122b17-a3a5-403a-8a9c-79b84095d517', 'Quiz No 3', 3, 3600);


insert into Question values ('5a122b17-a3a5-403a-8a9c-79b84095d518', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 1 for Quiz 1', 'Radio');
insert into Question values ('5a122b17-a3a5-403a-8a9c-79b84095d519', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 2 for Quiz 1', 'Radio');
insert into Question values ('5a122b17-a3a5-403a-8a9c-79b84095d520', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 3 for Quiz 1', 'Checkbox');
insert into Question values ('5a122b17-a3a5-403a-8a9c-79b84095d521', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 4 for Quiz 1', 'Radio');
insert into Question values ('5a122b17-a3a5-403a-8a9c-79b84095d522', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 5 for Quiz 1', 'Radio');

insert into Question values ('6a122b17-a3a5-403a-8a9c-79b84095d518', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 1 for Quiz 2', 'Radio');
insert into Question values ('6a122b17-a3a5-403a-8a9c-79b84095d519', '5a122b17-a3a5-403a-8a9c-79b84095d516', 'Question No 2 for Quiz 2', 'Radio');
insert into Question values ('6a122b17-a3a5-403a-8a9c-79b84095d520', '5a122b17-a3a5-403a-8a9c-79b84095d516', 'Question No 3 for Quiz 2', 'Checkbox');

insert into Question values ('6a122b17-a3a5-403a-8a9c-79b84095d521', '5a122b17-a3a5-403a-8a9c-79b84095d517', 'Question No 1 for Quiz 3', 'Radio');
insert into Question values ('6a122b17-a3a5-403a-8a9c-79b84095d522', '5a122b17-a3a5-403a-8a9c-79b84095d517', 'Question No 2 for Quiz 3', 'Radio');



insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d523', '5a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 1 for Question 1 Quiz 1', true);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d524', '5a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 2 for Question 1 Quiz 1', false);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d525', '5a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 3 for Question 1 Quiz 1', false);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d526', '5a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 4 for Question 1 Quiz 1', false);

insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d527', '5a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 1 for Question 2 Quiz 1', false);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d528', '5a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 2 for Question 2 Quiz 1', true);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d529', '5a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 3 for Question 2 Quiz 1', false);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d530', '5a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 4 for Question 2 Quiz 1', false);


insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d531', '6a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 1 for Question 1 Quiz 2', true);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d532', '6a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 2 for Question 1 Quiz 2', false);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d533', '6a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 3 for Question 1 Quiz 2', true);
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095d534', '6a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 4 for Question 1 Quiz 2', false);
