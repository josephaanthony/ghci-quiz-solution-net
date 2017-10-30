update UserQuiz set userId = null;
delete from QuizUser;
delete from UserQuestion;
delete from UserQuiz;

select * from QuizUser;
select * from UserQuiz uq, Quiz q where uq.quizId = q.id;
select * from UserQuestion uq, Question q where uq.questionId = q.id;

select * from QuizOption where [index] = '';
delete from Quiz where description = 'Test'

/*
delete from QuizOption
delete from Question;
delete from Quiz where id = '8adc4ae2-f2e5-42af-85de-735f09bab58d';
*/

select count(*) from Question where quizId is null;
select count(*) from QuizOption where questionId is null;

select * from Quiz where id = '50b9e675-4a0a-4847-b657-b1407686ce0a'
select * from Question where quizId = '50b9e675-4a0a-4847-b657-b1407686ce0a'
select * from QuizOption where questionId  in (select id from Question where quizId = '50b9e675-4a0a-4847-b657-b1407686ce0a');
select count(*) from Question;
select count(*) from QuizOption;


select * from Quiz;
select * from Question;
select * from QuizOption;
select count(*) from Question;
select count(*) from QuizOption;

select * from QuizUser;
select * from UserQuiz;
select * from UserQuestion order by userQuizId, [index];
select * from QuizOption where questionId = '5a122b17-a3a5-403a-8a9c-79b84095d520'

select * from Question;
select * from QuizOption;

EXEC sp_rename 'Quiz.id', 'Id', 'COLUMN'

insert into Quiz values ('5a122b17-a3a5-403a-8a9c-79b84095d515', 'Quiz No 1', 1, 3600);
insert into Quiz values ('5a122b17-a3a5-403a-8a9c-79b84095d516', 'Quiz No 2', 2, 3600);
insert into Quiz values ('5a122b17-a3a5-403a-8a9c-79b84095d517', 'Quiz No 3', 3, 3600);

insert into Question values ('5a122b17-a3a5-403a-8a9c-79b84095d518', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 1 for Quiz 1', 'Radio');
insert into Question values ('5a122b17-a3a5-403a-8a9c-79b84095d519', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 2 for Quiz 1', 'Radio');
insert into Question values ('5a122b17-a3a5-403a-8a9c-79b84095d520', '5a122b17-a3a5-403a-8a9c-79b84095d515', 'Question No 3 for Quiz 1', 'Checkbox');

insert into Question values ('6a122b17-a3a5-403a-8a9c-79b84095d518', '5a122b17-a3a5-403a-8a9c-79b84095d516', 'Question No 1 for Quiz 2', 'Radio');
insert into Question values ('6a122b17-a3a5-403a-8a9c-79b84095d519', '5a122b17-a3a5-403a-8a9c-79b84095d516', 'Question No 2 for Quiz 2', 'Radio');
insert into Question values ('6a122b17-a3a5-403a-8a9c-79b84095d520', '5a122b17-a3a5-403a-8a9c-79b84095d516', 'Question No 3 for Quiz 2', 'Checkbox');

insert into Question values ('7a122b17-a3a5-403a-8a9c-79b84095d518', '5a122b17-a3a5-403a-8a9c-79b84095d517', 'Question No 1 for Quiz 3', 'Radio');
insert into Question values ('7a122b17-a3a5-403a-8a9c-79b84095d519', '5a122b17-a3a5-403a-8a9c-79b84095d517', 'Question No 2 for Quiz 3', 'Radio');
insert into Question values ('7a122b17-a3a5-403a-8a9c-79b84095d520', '5a122b17-a3a5-403a-8a9c-79b84095d517', 'Question No 3 for Quiz 3', 'Checkbox');


-- Qz1
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095a523', '5a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 1 for Question 1 Quiz 1', 'true');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095a524', '5a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 2 for Question 1 Quiz 1', 'false');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095a525', '5a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 3 for Question 1 Quiz 1', 'false');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095a526', '5a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 4 for Question 1 Quiz 1', 'false');

insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095b523', '5a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 1 for Question 2 Quiz 1', 'false');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095b524', '5a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 2 for Question 2 Quiz 1', 'true');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095b525', '5a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 3 for Question 2 Quiz 1', 'false');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095b526', '5a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 4 for Question 2 Quiz 1', 'false');

insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095c523', '5a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 1 for Question 3 Quiz 1', 'false');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095c524', '5a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 2 for Question 3 Quiz 1', 'true');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095c525', '5a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 3 for Question 3 Quiz 1', 'true');
insert into QuizOption values ('5a122b17-a3a5-403a-8a9c-79b84095c526', '5a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 4 for Question 3 Quiz 1', 'false');



-- Qz2
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095a523', '6a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 1 for Question 1 Quiz 2', 'true');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095a524', '6a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 2 for Question 1 Quiz 2', 'false');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095a525', '6a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 3 for Question 1 Quiz 2', 'false');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095a526', '6a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 4 for Question 1 Quiz 2', 'false');

insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095b523', '6a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 1 for Question 2 Quiz 2', 'false');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095b524', '6a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 2 for Question 2 Quiz 2', 'true');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095b525', '6a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 3 for Question 2 Quiz 2', 'false');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095b526', '6a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 4 for Question 2 Quiz 2', 'false');

insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095c523', '6a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 1 for Question 3 Quiz 2', 'false');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095c524', '6a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 2 for Question 3 Quiz 2', 'true');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095c525', '6a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 3 for Question 3 Quiz 2', 'true');
insert into QuizOption values ('6a122b17-a3a5-403a-8a9c-79b84095c526', '6a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 4 for Question 3 Quiz 2', 'false');


-- Qz3
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095a523', '7a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 1 for Question 1 Quiz 3', 'true');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095a524', '7a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 2 for Question 1 Quiz 3', 'false');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095a525', '7a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 3 for Question 1 Quiz 3', 'false');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095a526', '7a122b17-a3a5-403a-8a9c-79b84095d518', 'Option 4 for Question 1 Quiz 3', 'false');

insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095b523', '7a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 1 for Question 2 Quiz 3', 'false');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095b524', '7a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 2 for Question 2 Quiz 3', 'true');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095b525', '7a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 3 for Question 2 Quiz 3', 'false');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095b526', '7a122b17-a3a5-403a-8a9c-79b84095d519', 'Option 4 for Question 2 Quiz 3', 'false');

insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095c523', '7a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 1 for Question 3 Quiz 3', 'false');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095c524', '7a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 2 for Question 3 Quiz 3', 'true');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095c525', '7a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 3 for Question 3 Quiz 3', 'true');
insert into QuizOption values ('7a122b17-a3a5-403a-8a9c-79b84095c526', '7a122b17-a3a5-403a-8a9c-79b84095d520', 'Option 4 for Question 3 Quiz 3', 'false');
