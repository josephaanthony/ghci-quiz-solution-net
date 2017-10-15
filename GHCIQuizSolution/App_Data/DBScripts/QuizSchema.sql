



'vstest.executionengine.x86.exe' (CLR v4.0.30319: TestSourceHost: Enumering assembly): Loaded 'C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\IDE\PrivateAssemblies\Runtime\Microsoft.VisualStudio.Debugger.Runtime.dll'. Skipped loading symbols. Module is optimized and the debugger option 'Just My Code' is enabled.
'vstest.executionengine.x86.exe' (CLR v4.0.30319: TestSourceHost: Enumering assembly): Loaded 'C:\WINDOWS\Microsoft.Net\assembly\GAC_MSIL\System.Dynamic\v4.0_4.0.0.0__b03f5f7f11d50a3a\System.Dynamic.dll'. Skipped loading symbols. Module is optimized and the debugger option 'Just My Code' is enabled.
'vstest.executionengine.x86.exe' (CLR v4.0.30319: TestSourceHost: Enumering assembly): Loaded 'C:\WINDOWS\Microsoft.Net\assembly\GAC_MSIL\System.ComponentModel.DataAnnotations\v4.0_4.0.0.0__31bf3856ad364e35\System.ComponentModel.DataAnnotations.dll'. Skipped loading symbols. Module is optimized and the debugger option 'Just My Code' is enabled.
Opened connection at 10/10/2017 5:47:47 PM +05:30

Started transaction at 10/10/2017 5:47:47 PM +05:30

INSERT [dbo].[UserQuiz]([id], [quizId], [timeTakenInterval])
VALUES (@0, @1, NULL)

-- @0: '99b9867a-be53-49a5-9079-36d064c48052' (Type = AnsiString, Size = 36)

-- @1: '5a122b17-a3a5-403a-8a9c-79b84095d515' (Type = AnsiString, Size = 36)

-- Executing at 10/10/2017 5:47:48 PM +05:30

-- Completed in 596 ms with result: 1



INSERT [dbo].[UserQuestion]([id], [questionId], [userQuizId], [selectedOptionIds], [isCorrect], [index])
VALUES (@0, @1, @2, NULL, NULL, @3)

-- @0: '1e742c9f-1696-49ec-b872-160dcdad4a83' (Type = AnsiString, Size = 36)

-- @1: '5a122b17-a3a5-403a-8a9c-79b84095d519' (Type = AnsiString, Size = 36)

-- @2: '99b9867a-be53-49a5-9079-36d064c48052' (Type = AnsiString, Size = 36)

-- @3: '1' (Type = Int32)

-- Executing at 10/10/2017 5:47:48 PM +05:30

-- Completed in 137 ms with result: 1



INSERT [dbo].[UserQuestion]([id], [questionId], [userQuizId], [selectedOptionIds], [isCorrect], [index])
VALUES (@0, @1, @2, NULL, NULL, @3)

-- @0: '4cec033a-be96-436a-98a4-bcd286c03dfd' (Type = AnsiString, Size = 36)

-- @1: '5a122b17-a3a5-403a-8a9c-79b84095d518' (Type = AnsiString, Size = 36)

-- @2: '99b9867a-be53-49a5-9079-36d064c48052' (Type = AnsiString, Size = 36)

-- @3: '0' (Type = Int32)

-- Executing at 10/10/2017 5:47:49 PM +05:30

-- Completed in 0 ms with result: 1



INSERT [dbo].[QuizUser]([id], [name], [email], [currentUserQuizId], [currentUserQuizIndex], [currentUserQuestionId], [currentUserQuestionIndex])
VALUES (@0, @1, @2, @3, @4, @5, @6)

-- @0: '3f55e5df-60b7-4db5-a205-83dc4c7efaca' (Type = AnsiString, Size = 36)

-- @1: 'Joe' (Type = AnsiString, Size = 36)

-- @2: 'test@test.com' (Type = AnsiString, Size = 100)

-- @3: '99b9867a-be53-49a5-9079-36d064c48052' (Type = AnsiString, Size = 36)

-- @4: '1' (Type = Int32)

-- @5: '4cec033a-be96-436a-98a4-bcd286c03dfd' (Type = AnsiString, Size = 36)

-- @6: '0' (Type = Int32)

-- Executing at 10/10/2017 5:47:49 PM +05:30

-- Completed in 120 ms with result: 1



INSERT [dbo].[UserQuestion]([id], [questionId], [userQuizId], [selectedOptionIds], [isCorrect], [index])
VALUES (@0, @1, @2, NULL, NULL, @3)

-- @0: '819da6bc-2b1d-41f7-ae28-90d9c06527ee' (Type = AnsiString, Size = 36)

-- @1: '5a122b17-a3a5-403a-8a9c-79b84095d520' (Type = AnsiString, Size = 36)

-- @2: '99b9867a-be53-49a5-9079-36d064c48052' (Type = AnsiString, Size = 36)

-- @3: '2' (Type = Int32)

-- Executing at 10/10/2017 5:47:49 PM +05:30

-- Completed in 0 ms with result: 1



INSERT [dbo].[UserQuestion]([id], [questionId], [userQuizId], [selectedOptionIds], [isCorrect], [index])
VALUES (@0, @1, @2, NULL, NULL, @3)

-- @0: 'bcda4262-7535-4507-9913-898047246acf' (Type = AnsiString, Size = 36)

-- @1: '6a122b17-a3a5-403a-8a9c-79b84095d518' (Type = AnsiString, Size = 36)

-- @2: '99b9867a-be53-49a5-9079-36d064c48052' (Type = AnsiString, Size = 36)

-- @3: '5' (Type = Int32)

-- Executing at 10/10/2017 5:47:49 PM +05:30

-- Completed in 0 ms with result: 1



INSERT [dbo].[UserQuestion]([id], [questionId], [userQuizId], [selectedOptionIds], [isCorrect], [index])
VALUES (@0, @1, @2, NULL, NULL, @3)

-- @0: 'e567f1d9-5d93-4c73-aec7-e09eb9c3dc2a' (Type = AnsiString, Size = 36)

-- @1: '5a122b17-a3a5-403a-8a9c-79b84095d522' (Type = AnsiString, Size = 36)

-- @2: '99b9867a-be53-49a5-9079-36d064c48052' (Type = AnsiString, Size = 36)

-- @3: '4' (Type = Int32)

-- Executing at 10/10/2017 5:47:49 PM +05:30

-- Completed in 0 ms with result: 1



INSERT [dbo].[UserQuestion]([id], [questionId], [userQuizId], [selectedOptionIds], [isCorrect], [index])
VALUES (@0, @1, @2, NULL, NULL, @3)

-- @0: 'ef22737c-4e91-49fb-b04a-016ea663d634' (Type = AnsiString, Size = 36)

-- @1: '5a122b17-a3a5-403a-8a9c-79b84095d521' (Type = AnsiString, Size = 36)

-- @2: '99b9867a-be53-49a5-9079-36d064c48052' (Type = AnsiString, Size = 36)

-- @3: '3' (Type = Int32)

-- Executing at 10/10/2017 5:47:49 PM +05:30

-- Completed in 0 ms with result: 1



Committed transaction at 10/10/2017 5:47:49 PM +05:30

Closed connection at 10/10/2017 5:47:49 PM +05:30

