EXEC sp_rename 'Quiz.id', 'Id', 'COLUMN'

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
