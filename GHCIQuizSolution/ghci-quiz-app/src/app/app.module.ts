import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuizService } from './quiz-module/service/quiz.service'
import { QuizComponent } from './quiz-module/quiz/quiz.component';
import { QuestionComponent } from './quiz-module/question/question.component';

import { UserQuizComponent } from './user-quiz-module/components/user-quiz.component';
import { UserQuizService } from './user-quiz-module/services/user-quiz.service';
import { UserRegistrationComponent } from './user-quiz-module/components/user-registration/user-registration.component';
import { LocalStorageService } from './user-quiz-module/services/local-storage.service';

const appRoutes: Routes = [
    { path: 'users/quiz', component: UserQuizComponent },
    { path: 'users/registration', component: UserRegistrationComponent },
    { path: 'questions/:quizId', component: QuestionComponent },
    {
        path: 'quizs',
        component: QuizComponent,
    },
    {
        path: '',
        redirectTo: '/users/quiz',
        pathMatch: 'full'
    },
    { path: '**', component: UserQuizComponent }
];


@NgModule({
  declarations: [
      AppComponent,
      QuizComponent,
      QuestionComponent,
      UserQuizComponent,
      UserRegistrationComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      ToasterModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [QuizService, UserQuizService, LocalStorageService, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
