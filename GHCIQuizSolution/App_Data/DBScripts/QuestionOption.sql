select * from Question where quizId = '5a122b17-a3a5-403a-8a9c-79b84095d515'
select * from QuizOption where questionId  in (select id from Question where quizId = '5a122b17-a3a5-403a-8a9c-79b84095d515') order by questionId;
select count(*) from Question;
select count(*) from QuizOption;

update QuizOption set isCorrect = 'false' where isCorrect is null;
delete from QuizOption where questionId is null;

update Question set [index] = 0 where [index] is null;
update QuizOption set [index] = 0 where [index] is null;

select * from Question where quizId is null;
select * from QuizOption where questionId = 'f0239bd6-a7f7-4ef8-832b-03d832456b33'

update Question set complexity = 'EASY' where complexity is null;

delete from Question where quizId  is null;
delete from QuizOption where questionId = 'f0239bd6-a7f7-4ef8-832b-03d832456b33'
