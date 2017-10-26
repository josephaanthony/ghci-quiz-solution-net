import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuizService } from './admin-quiz-module/service/quiz.service'
import { QuizComponent } from './admin-quiz-module/quiz/quiz.component';
import { QuestionComponent } from './admin-quiz-module/question/question.component';

import { UserQuizComponent } from './user-quiz-module/components/user-quiz.component';
import { UserQuizHomeComponent } from './user-quiz-module/components/user-quiz-home/user-quiz-home.component';
import { UserQuizService } from './user-quiz-module/services/user-quiz.service';
import { UserRegistrationComponent } from './user-quiz-module/components/user-registration/user-registration.component';
import { LocalStorageService } from './user-quiz-module/services/local-storage.service';
import { LoaderService } from './shared/components/loader.service'
import { LoaderComponent } from './shared/components/loader.component'

const appRoutes: Routes = [
    { path: 'users/quizhome', component: UserQuizHomeComponent },
    { path: 'users/quiz', component: UserQuizComponent },
    { path: 'users/registration', component: UserRegistrationComponent },

    { path: 'admin/quizhome', component: QuizComponent },
    { path: 'admin/questionshome/:quizId', component: QuestionComponent },

    //{ path: 'questions/:quizId', component: QuestionComponent },
    // {
    //     path: 'quizs',
    //     component: QuizComponent,
    // },
    {
        path: '',
        redirectTo: '/users/quizhome',
        pathMatch: 'full'
    },
    { 
        path: '**', 
        redirectTo: '/users/quizhome',
        pathMatch: 'full' }
];


@NgModule({
  declarations: [
      AppComponent,
      QuizComponent,
      QuestionComponent,
      UserQuizComponent,
      UserRegistrationComponent,
      UserQuizHomeComponent,
      LoaderComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      ToasterModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: false } // <-- debugging purposes only
      )
  ],
  providers: [QuizService, UserQuizService, LocalStorageService, ToasterService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
