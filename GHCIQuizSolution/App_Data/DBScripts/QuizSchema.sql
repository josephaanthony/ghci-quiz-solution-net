CREATE TABLE [dbo].[Quiz] (
    [_id]             VARCHAR (36)  NOT NULL,
    [description]     VARCHAR (500) NULL,
    [level]           INT           NULL,
    [timeoutInterval] INT           NULL, 
    CONSTRAINT [PK_Quiz] PRIMARY KEY ([_id])
);


CREATE TABLE [dbo].[Question] (
    [_id]         VARCHAR (36)  NOT NULL,
    [quizId]      VARCHAR (36)  NULL,
    [description] VARCHAR (500) NULL,
    [optionType]  VARCHAR (10)  NULL, 
    CONSTRAINT [PK_Question] PRIMARY KEY ([_id]), 
    CONSTRAINT [FK_Question_Quiz] FOREIGN KEY ([quizId]) REFERENCES [Quiz]([_id])
);
