import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { MatProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { QuizService } from './admin-quiz-module/service/quiz.service'
import { QuizComponent } from './admin-quiz-module/quiz/quiz.component';
import { QuestionComponent } from './admin-quiz-module/question/question.component';
import { UsersComponent } from './admin-quiz-module/users/users.component';

import { UserQuizComponent } from './user-quiz-module/components/user-quiz.component';
import { UserQuizHomeComponent } from './user-quiz-module/components/user-quiz-home/user-quiz-home.component';
import { UserQuizService } from './user-quiz-module/services/user-quiz.service';
import { UserRegistrationComponent } from './user-quiz-module/components/user-registration/user-registration.component';
import { LocalStorageService } from './user-quiz-module/services/local-storage.service';
import { LoaderService } from './shared/components/loader.service'
import { LoaderComponent } from './shared/components/loader.component'
import { UsersService } from './admin-quiz-module/service/users.service';
import { fakeBackendProvider } from './shared/service/fakeBackend.service';


const appRoutes: Routes = [
    { path: 'users/quizhome', component: UserQuizHomeComponent },
    { path: 'users/quiz', component: UserQuizComponent },
    { path: 'users/registration', component: UserRegistrationComponent },

    { path: 'admin/quizhome', component: QuizComponent },
    { path: 'admin/questionshome/:quizId', component: QuestionComponent },
    { path: 'admin/userhome', component: UsersComponent },

    //{ path: 'questions/:quizId', component: QuestionComponent },
    // {
    //     path: 'quizs',
    //     component: QuizComponent,
    // },
    {
        path: '',
        redirectTo: '/users/registration',
        pathMatch: 'full'
    },
    { 
        path: '**', 
        redirectTo: '/users/registration',
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
      LoaderComponent,
      UsersComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      ToasterModule,
      MatProgressBarModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: false } // <-- debugging purposes only
      )
  ],
  providers: [QuizService, UserQuizService, LocalStorageService, ToasterService, LoaderService, UsersService
    , fakeBackendProvider
    , MockBackend, BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
