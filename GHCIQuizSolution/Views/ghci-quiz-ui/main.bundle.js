webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quiz_module_service_quiz_service__ = __webpack_require__("../../../../../src/app/quiz-module/service/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quiz_module_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz-module/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quiz_module_question_question_component__ = __webpack_require__("../../../../../src/app/quiz-module/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_quiz_module_components_user_quiz_component__ = __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_quiz_module_services_user_quiz_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/user-quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_quiz_module_components_user_registration_user_registration_component__ = __webpack_require__("../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_quiz_module_services_local_storage_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'users/quiz', component: __WEBPACK_IMPORTED_MODULE_11__user_quiz_module_components_user_quiz_component__["a" /* UserQuizComponent */] },
    { path: 'users/registration', component: __WEBPACK_IMPORTED_MODULE_13__user_quiz_module_components_user_registration_user_registration_component__["a" /* UserRegistrationComponent */] },
    { path: 'questions/:quizId', component: __WEBPACK_IMPORTED_MODULE_10__quiz_module_question_question_component__["a" /* QuestionComponent */] },
    {
        path: 'quizs',
        component: __WEBPACK_IMPORTED_MODULE_9__quiz_module_quiz_quiz_component__["a" /* QuizComponent */],
    },
    {
        path: '',
        redirectTo: '/users/quiz',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__user_quiz_module_components_user_quiz_component__["a" /* UserQuizComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__quiz_module_quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_10__quiz_module_question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_quiz_module_components_user_quiz_component__["a" /* UserQuizComponent */],
            __WEBPACK_IMPORTED_MODULE_13__user_quiz_module_components_user_registration_user_registration_component__["a" /* UserRegistrationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__quiz_module_service_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_12__user_quiz_module_services_user_quiz_service__["a" /* UserQuizService */], __WEBPACK_IMPORTED_MODULE_14__user_quiz_module_services_local_storage_service__["a" /* LocalStorageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/quiz-module/models/option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = (function () {
    function Option() {
    }
    return Option;
}());

//# sourceMappingURL=option.js.map

/***/ }),

/***/ "../../../../../src/app/quiz-module/models/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ "../../../../../src/app/quiz-module/models/quiz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quiz; });
var Quiz = (function () {
    function Quiz() {
    }
    return Quiz;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ "../../../../../src/app/quiz-module/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid > :nth-child(odd){\r\n  background-color:#3d3d3d;\r\n}\r\n\r\n.container-fluid > :nth-child(even){\r\n  background-color:#3498db;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz-module/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<toaster-container [toasterconfig]=\"toasterConfig\"></toaster-container>\n\t<div *ngIf=\"quiz\" class=\"panel panel-info\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<!-- <div>\n\t\t\t\t<h3 class=\"panel-title\">Questions</h3>\n\t\t\t</div> -->\n\t\t\t<div>\n\t\t\t\t<div class=\"col-md-3\">{{quiz._id}}</div>\n\t\t\t\t<div class=\"col-md-3\">{{quiz.desc}}</div>\n\t\t\t\t<div class=\"col-md-2\">{{quiz.level}}</div>\n\t\t\t\t<div class=\"col-md-2\">{{quiz.timeoutInterval}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"panel-title\">Questions\n\t\t\t\t<a [routerLink]=\"['/quizs']\" class=\"glyphicon glyphicon-home\"></a>\n\t\t\t</div>\n\t\t\t<h3></h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"col-md-2\">Id</div>\n\t\t\t\t\t<div class=\"col-md-2\">Desc</div>\n\t\t\t\t\t<div class=\"col-md-2\">OptionType</div>\n\t\t\t\t\t<div class=\"col-md-3\">Options</div>\n\t\t\t\t\t<div class=\"col-md-3\"><button class=\"btn btn-primary btn-sm\" (click)=\"addNewQuestion()\">Add New Question</button></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div *ngFor=\"let question of quiz.questions\">\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<label>{{question._id}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"question.desc\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"question.optionType\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" style=\"width:120px\" (click)=\"showOptions(question)\">Show Options ({{question?.options?.length}})</button>\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"addNewOption(question)\">Add New Option</button>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"updateQuestion(question)\">Update Question</button>\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"deleteQuestion(question)\">Delete Question</button>\n\t\t\t\t\t\t<!-- <a [routerLink]=\"['/questions', quiz._id]\" class=\"btn btn-default btn-sm\">Show Options ({{quiz.questions?.options?.length}})</a> -->\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<div class=\"panel-title\">Options</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"selectedQuestion\" class=\"row\">\n\t\t\t\t<div *ngFor=\"let option of selectedQuestion.options\">\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<label>{{option._id}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"option.desc\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"option.isCorrect\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"updateOption(selectedQuestion, option)\">Update Option</button>\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"deleteOption(selectedQuestion, option)\">Delete Option</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/quiz-module/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_question__ = __webpack_require__("../../../../../src/app/quiz-module/models/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_option__ = __webpack_require__("../../../../../src/app/quiz-module/models/option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_quiz_service__ = __webpack_require__("../../../../../src/app/quiz-module/service/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TEMP_QUESTION_ID = '*temp*';
var TEMP_OPTION_ID = '*temp*';
var QuestionComponent = (function () {
    function QuestionComponent(route, quizService) {
        this.route = route;
        this.quizService = quizService;
        this.idCounter = 1;
        this.toasterconfig = { timeout: 0 };
        this.optionIdCounter = 1;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuestions(this.route.snapshot.params['quizId'])
            .then(function (quiz) {
            _this.quiz = quiz;
        });
    };
    QuestionComponent.prototype.addNewQuestion = function () {
        var newQuestion = new __WEBPACK_IMPORTED_MODULE_3__models_question__["a" /* Question */]();
        newQuestion._id = TEMP_QUESTION_ID + (this.idCounter++);
        if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(this.quiz.questions)) {
            this.quiz.questions = [];
        }
        this.quiz.questions.push(newQuestion);
    };
    QuestionComponent.prototype.updateQuestion = function (question) {
        var _this = this;
        if (question._id.startsWith(TEMP_QUESTION_ID)) {
            var questionToUpdate = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.omit(question, ['_id']);
            this.quizService.createQuestion(this.quiz._id, questionToUpdate).then(function (updatedQuestion) {
                var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(_this.quiz.questions, { _id: question._id });
                _this.quiz.questions[index] = updatedQuestion;
            });
        }
        else {
            this.quizService.updateQuestion(question).then(function (updatedQuestion) {
                var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(_this.quiz.questions, { _id: question._id });
                _this.quiz.questions[index] = updatedQuestion;
            });
        }
    };
    QuestionComponent.prototype.deleteQuestion = function (question) {
        var _this = this;
        this.quizService.deleteQuestion(question._id).then(function (deletedQuestionId) {
            var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(_this.quiz.questions, { _id: deletedQuestionId });
            _this.quiz.questions.splice(index, 1);
        });
    };
    QuestionComponent.prototype.showOptions = function (question) {
        this.selectedQuestion = question;
    };
    QuestionComponent.prototype.addNewOption = function (question) {
        this.showOptions(question);
        var newOption = new __WEBPACK_IMPORTED_MODULE_4__models_option__["a" /* Option */]();
        newOption._id = TEMP_OPTION_ID + (this.optionIdCounter++);
        if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(this.selectedQuestion.options)) {
            this.selectedQuestion.options = [];
        }
        this.selectedQuestion.options.push(newOption);
    };
    QuestionComponent.prototype.updateOption = function (question, option) {
        console.log('Update Option: ' + option.desc);
        if (option._id.startsWith(TEMP_OPTION_ID)) {
            var optionToUpdate = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.omit(option, ['_id']);
            this.quizService.createOption(question._id, optionToUpdate).then(function (updatedOption) {
                var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(question.options, { _id: option._id });
                question.options[index] = updatedOption;
            });
        }
        else {
            this.quizService.updateOption(option).then(function (updatedOption) {
                var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(question.options, { _id: option._id });
                question.options[index] = updatedOption;
            });
        }
    };
    QuestionComponent.prototype.deleteOption = function (question, option) {
        this.quizService.deleteOption(option._id).then(function (deletedOptionId) {
            var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(question.options, { _id: deletedOptionId });
            question.options.splice(index, 1);
        });
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-questions',
        template: __webpack_require__("../../../../../src/app/quiz-module/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quiz-module/question/question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__service_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_quiz_service__["a" /* QuizService */]) === "function" && _b || Object])
], QuestionComponent);

var _a, _b;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/quiz-module/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n\tmargin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz-module/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">Quiz</h3>\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Id</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Desc</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Level</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">TimeOut</div>\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-2\"><button class=\"btn btn-primary btn-sm\" (click)=\"addNewQuiz()\">Add New Quiz</button></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div *ngFor=\"let quiz of quizs\">\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<label>{{quiz._id}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.desc\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.level\"/>\r\n\t\t\t\t\t</div>\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.timeoutInterval\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"updateQuiz(quiz)\">Update Quiz</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"deleteQuiz(quiz)\">Delete Quiz</button>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/questions', quiz._id]\" class=\"btn btn-default btn-sm\">Show Questions ({{quiz.questions?.length}})</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/quiz-module/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_quiz__ = __webpack_require__("../../../../../src/app/quiz-module/models/quiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_quiz_service__ = __webpack_require__("../../../../../src/app/quiz-module/service/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TEMP_QUIZ_ID = '*temp*';
var QuizComponent = (function () {
    function QuizComponent(quizService) {
        this.quizService = quizService;
        this.idCounter = 1;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuizs()
            .then(function (quizs) {
            _this.quizs = quizs;
        });
    };
    QuizComponent.prototype.addNewQuiz = function () {
        var newQuiz = new __WEBPACK_IMPORTED_MODULE_2__models_quiz__["a" /* Quiz */]();
        newQuiz._id = TEMP_QUIZ_ID + (this.idCounter++);
        this.quizs.push(newQuiz);
    };
    QuizComponent.prototype.updateQuiz = function (quiz) {
        var _this = this;
        if (quiz._id.startsWith(TEMP_QUIZ_ID)) {
            var quizToUpdate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.omit(quiz, ['_id']);
            this.quizService.createQuiz(quizToUpdate).then(function (updatedQuiz) {
                var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(_this.quizs, { _id: quiz._id });
                _this.quizs[index] = updatedQuiz;
            });
        }
        else {
            this.quizService.updateQuiz(quiz).then(function (updatedQuiz) {
                var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(_this.quizs, { _id: quiz._id });
                _this.quizs[index] = updatedQuiz;
            });
        }
    };
    QuizComponent.prototype.deleteQuiz = function (quiz) {
        var _this = this;
        this.quizService.deleteQuiz(quiz._id).then(function (deletedQuizId) {
            var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(_this.quizs, { _id: deletedQuizId });
            _this.quizs.splice(index, 1);
        });
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quizs',
        template: __webpack_require__("../../../../../src/app/quiz-module/quiz/quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quiz-module/quiz/quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_quiz_service__["a" /* QuizService */]) === "function" && _a || Object])
], QuizComponent);

var _a;
//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/quiz-module/service/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_util_http_util__ = __webpack_require__("../../../../../src/app/shared/util/http.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizService = (function () {
    function QuizService(http, toasterService) {
        var _this = this;
        this.http = http;
        this.toasterService = toasterService;
        this.quizUrl = 'http://localhost:5000/api/quizs';
        this.questionUrl = 'http://localhost:5000/api/questions';
        this.optionUrl = 'http://localhost:5000/api/options';
        this.quizErrorHandler = __WEBPACK_IMPORTED_MODULE_5__shared_util_http_util__["a" /* HttpUtil */].handleErrorWithMessage(this.toasterService);
        this.createQuiz = function (newQuiz) { return _this.createData(_this.quizUrl, newQuiz); };
        this.deleteQuiz = function (delQuizId) { return _this.deleteData(_this.quizUrl, delQuizId); };
        this.updateQuiz = function (putQuiz) { return _this.updateData(_this.quizUrl, putQuiz); };
        this.createQuestion = function (quizId, newQuestion) {
            return _this.createData(_this.questionUrl + '/' + quizId, newQuestion);
        };
        this.deleteQuestion = function (delQuestionId) { return _this.deleteData(_this.questionUrl, delQuestionId); };
        this.updateQuestion = function (putQuestion) { return _this.updateData(_this.questionUrl, putQuestion); };
        this.createOption = function (questionId, newOption) {
            return _this.createData(_this.optionUrl + '/' + questionId, newOption);
        };
        this.deleteOption = function (delOptionId) { return _this.deleteData(_this.optionUrl, delOptionId); };
        this.updateOption = function (putOption) { return _this.updateData(_this.optionUrl, putOption); };
    }
    QuizService.prototype.getQuizs = function () {
        return this.http.get(this.quizUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__shared_util_http_util__["a" /* HttpUtil */].handleError);
    };
    QuizService.prototype.getQuestions = function (quizId) {
        return this.http.get(this.questionUrl + '/' + quizId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__shared_util_http_util__["a" /* HttpUtil */].handleError);
    };
    // post("/api/quizs")
    QuizService.prototype.createData = function (url, newData) {
        return this.http.post(url, newData)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__shared_util_http_util__["a" /* HttpUtil */].handleError);
    };
    // delete("/api/quizs/:id")
    QuizService.prototype.deleteData = function (url, delDataId) {
        return this.http.delete(url + '/' + delDataId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__shared_util_http_util__["a" /* HttpUtil */].handleError);
    };
    // put("/api/quizs/:id")
    QuizService.prototype.updateData = function (url, putData) {
        var putUrl = url + '/' + putData['_id'];
        return this.http.put(putUrl, putData)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    return QuizService;
}());
QuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object])
], QuizService);

var _a, _b;
//# sourceMappingURL=quiz.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/util/http.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);

var HttpUtil = (function () {
    function HttpUtil() {
    }
    HttpUtil.mapJson = function (res) {
        return res.json();
    };
    HttpUtil.handleErrorWithMessage = function (toasterService) {
        return function (error) {
            return HttpUtil.handleError(error, toasterService);
        };
    };
    HttpUtil.handleError = function (error, toasterService) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console
        if (toasterService) {
            toasterService.pop(errMsg);
        }
        return Promise.reject(errMsg);
    };
    HttpUtil.mapJsonAndStatus = function (checkUpdate, res) {
        var retRes = res.json();
        if (retRes['nModified'] && retRes['n'] && retRes['ok']) {
            if (checkUpdate && retRes['nModified'] < 1) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(retRes);
            }
        }
        return retRes;
    };
    return HttpUtil;
}());

//# sourceMappingURL=http.util.js.map

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slides {\r\n\tlist-style: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">UserQuiz {{ user?.currentUserQuiz?.description}}</h3>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"!showNextQuizOption && user.currentQuestion\" class=\"panel-body\">\r\n\t\t\t<div class=\"carousel\">\r\n\t\t\t\t<h1> {{ user.currentQuestion.description }} </h1>\r\n\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<ul *ngIf=\"user.currentQuestion?.options\" class=\"slides\">\r\n\t\t\t\t\t<li *ngFor=\"let option of user.currentQuestion.options\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<input *ngIf=\"user.currentQuestion.optionType === 'Checkbox'\" type=\"checkbox\" (change)=\"onOptionSelected(user.currentQuestion, option)\">\r\n\t\t\t\t\t\t<input *ngIf=\"user.currentQuestion.optionType != 'Checkbox'\" type=\"radio\" name=\"optionRadio\" (change)=\"onOptionSelected(user.currentQuestion, option)\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<label>{{option.description}}</label>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"getNextQuestion()\">Get Next Question</button>\r\n\t\t\t</div>\t\t  \r\n\t\t</div>\r\n\t\t<div *ngIf=\"showNextQuizOption && !user.isLastQuiz\" style=\"text-align:center\">\r\n\t\t\t<h3>You have completed the current quiz. Press Next to go to the next level.</h3>\r\n\t\t\t<br/>\r\n\t\t\t<button class=\"btn btn-primary\" (click)=\"startNextQuiz()\" style=\"margin-bottom: 10px\">Next</button>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div *ngIf=\"showNextQuizOption && user.isLastQuiz\" style=\"text-align:center\">\r\n\t\t\t<h3>You have completed all the levels. Hurray!</h3>\r\n\t\t\t<br/>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_quiz_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/user-quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TEMP_QUIZ_ID = '*temp*';
var UserQuizComponent = (function () {
    // private currentQuestionIndex: number = -1;
    // private currentQuestion: any;
    //private currentQuizIndex: number = -1;
    function UserQuizComponent(router, quizService, localStorageService) {
        this.router = router;
        this.quizService = quizService;
        this.localStorageService = localStorageService;
        this.user = this.localStorageService.getItem('user');
        if (!this.user) {
            this.router.navigateByUrl('/users/registration');
        }
    }
    UserQuizComponent.prototype.ngOnInit = function () {
        // this.quizService.getUser()
        // 	.then(user => {
        // 		this.user = user;
        // 		if(user.currentUserQuiz == null) {
        // 			this.quizService.getQuizs().then(quizs => {
        // 				this.quizs = quizs;
        // 				this.startNextQuiz();
        // 			})
        // 		}
        // 	});
        // this.quizService.getQuizs()
        // 	.then((quizs: [Quiz]) => {
        // 		this.quizs = quizs;
        // 	});
        this.startCarousel();
    };
    UserQuizComponent.prototype.onOptionSelected = function (question, option, $event) {
        if (!this.user.currentQuestion.selectedOptions) {
            this.user.currentQuestion.selectedOptions = [];
        }
        this.user.currentQuestion.selectedOptions.push(option._id);
    };
    UserQuizComponent.prototype.getNextQuestion = function () {
        if (this.user.currentQuestion.selectedOptions && this.user.currentQuestion.selectedOptions.length > 0) {
            this.startCarousel(false);
        }
        else {
            alert("Please select an option to proceed.");
        }
    };
    UserQuizComponent.prototype.startCarousel = function (isInitial) {
        if (isInitial === void 0) { isInitial = true; }
        if (!isInitial || this.user.currentQuestionIndex < 0) {
            this.user.currentQuestionIndex++;
        }
        if (this.user && this.user.currentUserQuiz && this.user.currentUserQuiz.questions
            && this.user.currentUserQuiz.questions.length > this.user.currentQuestionIndex) {
            this.user.currentQuestion = this.user.currentUserQuiz.questions[this.user.currentQuestionIndex];
            this.localStorageService.setItem('user', this.user);
        }
        else if (this.user && this.user.currentUserQuiz && this.user.currentUserQuiz.questions
            && this.user.currentUserQuiz.questions.length === this.user.currentQuestionIndex) {
            this.showNextQuizOption = true;
        }
        else {
            alert("You have completed all the Quiz. Congratulations");
        }
    };
    UserQuizComponent.prototype.startNextQuiz = function () {
        var _this = this;
        this.quizService.setNextQuizForUser(this.user).then(function (user) {
            _this.showNextQuizOption = false;
            _this.user = user;
            _this.user.currentQuestion = _this.user.currentQuestion;
            _this.localStorageService.setItem('user', _this.user);
        });
        // if(this.quizs && this.quizs.length > this.currentQuizIndex + 1) {
        // 	this.currentQuestionIndex = -1;
        // 	this.currentQuizIndex++;
        // 	this.user.currentUserQuiz = this.quizs[this.currentQuizIndex];
        // 	this.startCarousel();
        // }
    };
    UserQuizComponent.prototype.isActive = function (question) {
        return question === this.user.currentUserQuiz.questions[0];
    };
    return UserQuizComponent;
}());
UserQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-quizs',
        template: __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_quiz_service__["a" /* UserQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_quiz_service__["a" /* UserQuizService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _c || Object])
], UserQuizComponent);

var _a, _b, _c;
//# sourceMappingURL=user-quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">User Registration</h3>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<h2>Please register to begin</h2>\r\n\r\n\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t<fieldset>\r\n\t\t\t\t\t<legend>Welcome</legend>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" placeholder=\"Name\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.college\" name=\"college\" placeholder=\"College Name\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"registerUser()\">Submit</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_quiz_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/user-quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/user-quiz-module/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(router, quizService, localStorageService) {
        this.router = router;
        this.quizService = quizService;
        this.localStorageService = localStorageService;
        this.user = this.localStorageService.getItem('user');
        if (this.user) {
            alert('Error occured. Please contact the administrator');
        }
        else {
            this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
        }
    }
    UserRegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        this.quizService.setNextQuizForUser(this.user).then(function (user) {
            _this.user = user;
            _this.localStorageService.setItem('user', _this.user);
            _this.router.navigateByUrl('/users/quiz');
        });
        // this.quizService.getQuizs().then(quizs => {
        // 	this.startNextQuiz(quizs);
        // });
    };
    UserRegistrationComponent.prototype.startNextQuiz = function (quizs) {
        this.quizService.setNextQuizForUser(this.user);
        // if(quizs && quizs.length) {
        // 	this.user.currentQuestionIndex = -1;
        // 	this.user.currentUserQuiz = _.orderBy(quizs, ['level'], ['asc'])[0];
        // 	this.user.currentUserQuizLevel = this.user.currentUserQuiz.level;
        // 	this.localStorageService.setItem('user', this.user);
        // 	this.router.navigateByUrl('/users/quiz');
        // }
    };
    return UserRegistrationComponent;
}());
UserRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-registration',
        template: __webpack_require__("../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_quiz_service__["a" /* UserQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_quiz_service__["a" /* UserQuizService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _c || Object])
], UserRegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=user-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var LocalStorageService = (function () {
    function LocalStorageService() {
        this.storageCategory = '#ghci-mean#';
        var initialValue = {};
        try {
            initialValue = JSON.parse(localStorage.getItem(this.storageCategory));
        }
        catch (error) {
            // Ignore Error
        }
        if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(initialValue)) {
            initialValue = {};
        }
        this.localStorageData = {};
        this.localStorageData[this.storageCategory] = initialValue;
        localStorage.setItem(this.storageCategory, JSON.stringify(initialValue));
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        this.localStorageData[this.storageCategory][key] = value;
        localStorage.setItem(this.storageCategory, JSON.stringify(this.localStorageData[this.storageCategory]));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return this.localStorageData[this.storageCategory][key];
    };
    return LocalStorageService;
}());

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/services/user-quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_util_http_util__ = __webpack_require__("../../../../../src/app/shared/util/http.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserQuizService = (function () {
    function UserQuizService(http, toasterService) {
        this.http = http;
        this.toasterService = toasterService;
        this.quizUrl = 'http://localhost:5000/api/quizs';
        this.questionUrl = 'http://localhost:5000/api/questions';
        this.optionUrl = 'http://localhost:5000/api/options';
        this.quizErrorHandler = __WEBPACK_IMPORTED_MODULE_6__shared_util_http_util__["a" /* HttpUtil */].handleErrorWithMessage(this.toasterService);
    }
    UserQuizService.prototype.getQuizs = function () {
        return Promise.resolve([
            {
                '_id': '59d36571a769ac08e0f87b03',
                'description': 'Quiz1',
                'level': '1',
                'timeoutInterval': '3600',
                'createDate': '2017-10-03T10:24:49.938Z',
                'questions': [
                    {
                        'description': 'Question 1 for Quiz 1',
                        'optionType': 'Radio',
                        '_id': '59d44ef26340542770834a43',
                        'createDate': '2017-10-04T03:01:06.900Z',
                        'options': [
                            {
                                'description': 'Option 1 for Question 1 Quiz 1',
                                'isCorrect': 'true',
                                '_id': '59d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            },
                            {
                                'description': 'Option 2 for Question 1 Quiz 1',
                                'isCorrect': 'true',
                                '_id': '69d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            },
                            {
                                'description': 'Option 3 for Question 1 Quiz 1',
                                'isCorrect': 'true',
                                '_id': '79d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            },
                            {
                                'description': 'Option 4 for Question 1 Quiz 1',
                                'isCorrect': 'true',
                                '_id': '89d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            }
                        ]
                    },
                    {
                        'description': 'Question 2 for Quiz 1',
                        'optionType': 'Checkbox',
                        '_id': '59d4506e6340542770834a45',
                        'createDate': '2017-10-04T03:07:26.801Z',
                        'options': [
                            {
                                'description': 'Option1 for Question 2 Quiz 1',
                                'isCorrect': 'true',
                                '_id': '59d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option2 for Question 2 Quiz 1',
                                'isCorrect': 'true',
                                '_id': '69d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option3 for Question 2 Quiz 1',
                                'isCorrect': 'true',
                                '_id': '79d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option4 for Question 2 Quiz 1',
                                'isCorrect': 'true',
                                '_id': '89d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            }
                        ]
                    }
                    //, 
                    // { 
                    // 	'description': 'Question 3 for Quiz 1', 
                    // 	'optionType': 'Checkbox', 
                    // 	'_id': '59d450876340542770834a46', 
                    // 	'createDate': '2017-10-04T03:07:51.368Z', 
                    // 	'options': [
                    // 		{ 
                    // 			'description': 'Option1 for Question 3 Quiz 1', 
                    // 			'isCorrect': 'true', 
                    // 			'_id': '59d4d7049e40d719e48951ca', 
                    // 			'createDate': '2017-10-04T12:41:40.165Z' 
                    // 		},
                    // 		{ 
                    // 			'description': 'Option2 for Question 3 Quiz 1', 
                    // 			'isCorrect': 'true', 
                    // 			'_id': '69d4d7049e40d719e48951ca', 
                    // 			'createDate': '2017-10-04T12:41:40.165Z' 
                    // 		},
                    // 		{ 
                    // 			'description': 'Option3 for Question 3 Quiz 1', 
                    // 			'isCorrect': 'true', 
                    // 			'_id': '79d4d7049e40d719e48951ca', 
                    // 			'createDate': '2017-10-04T12:41:40.165Z' 
                    // 		},
                    // 		{ 
                    // 			'description': 'Option4 for Question 3 Quiz 1', 
                    // 			'isCorrect': 'true', 
                    // 			'_id': '89d4d7049e40d719e48951ca', 
                    // 			'createDate': '2017-10-04T12:41:40.165Z' 
                    // 		}
                    // 	]
                    // }, 
                    // { 
                    // 	'description': 'Question 4 for Quiz 1', 
                    // 	'optionType': 'Text', 
                    // 	'_id': '59d453846340542770834a48', 
                    // 	'createDate': '2017-10-04T03:20:36.724Z', 
                    // 	'options': [
                    // 		{ 
                    // 			'description': 'Option1 for Question 4 Quiz 1', 
                    // 			'isCorrect': 'true', 
                    // 			'_id': '59d4d7049e40d719e48951ca', 
                    // 			'createDate': '2017-10-04T12:41:40.165Z' 
                    // 		},
                    // 		{ 
                    // 			'description': 'Option2 for Question 4 Quiz 1', 
                    // 			'isCorrect': 'true', 
                    // 			'_id': '69d4d7049e40d719e48951ca', 
                    // 			'createDate': '2017-10-04T12:41:40.165Z' 
                    // 		},
                    // 		{ 
                    // 			'description': 'Option3 for Question 4 Quiz 1', 
                    // 			'isCorrect': 'true', 
                    // 			'_id': '79d4d7049e40d719e48951ca', 
                    // 			'createDate': '2017-10-04T12:41:40.165Z' 
                    // 		},
                    // 		{ 
                    // 			'description': 'Option4 for Question 4 Quiz 1', 
                    // 			'isCorrect': 'true', 
                    // 			'_id': '89d4d7049e40d719e48951ca', 
                    // 			'createDate': '2017-10-04T12:41:40.165Z' 
                    // 		}
                    // 	] 
                    // }
                ]
            },
            {
                '_id': '59d36571a769ac08e0f87b04',
                'description': 'Quiz2',
                'level': '2',
                'timeoutInterval': '3600',
                'createDate': '2017-10-03T10:24:49.938Z',
                'questions': [
                    {
                        'description': 'Question 1 for Quiz 2',
                        'optionType': 'Radio',
                        '_id': '59d44ef26340542770834a43',
                        'createDate': '2017-10-04T03:01:06.900Z',
                        'options': [
                            {
                                'description': 'Op2',
                                'isCorrect': 'true',
                                '_id': '59d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            },
                            {
                                'description': 'Op11',
                                'isCorrect': 'true',
                                '_id': '59d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            }
                        ]
                    },
                    {
                        'description': 'Question 2 for Quiz 2',
                        'optionType': 'Checkbox',
                        '_id': '59d454156340542770834a49',
                        'createDate': '2017-10-04T03:23:01.722Z',
                        'options': [
                            {
                                'description': 'Op2',
                                'isCorrect': 'true',
                                '_id': '59d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            },
                            {
                                'description': 'Op11',
                                'isCorrect': 'true',
                                '_id': '59d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            }
                        ]
                    }
                ],
            },
            {
                '_id': '59d369d0ea5e4309d482e59e',
                'description': 'Quiz 3',
                'level': '2',
                'timeoutInterval': '4000',
                'createDate': '2017-10-03T10:43:28.573Z',
                'questions': [
                    {
                        'description': 'Question 1 for Quiz 3',
                        'optionType': 'Radio',
                        '_id': '59d44ef26340542770834a43',
                        'createDate': '2017-10-04T03:01:06.900Z',
                        'options': [
                            {
                                'description': 'Option 1 for Question 1 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '59d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            },
                            {
                                'description': 'Option 2 for Question 1 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '69d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            },
                            {
                                'description': 'Option 3 for Question 1 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '79d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            },
                            {
                                'description': 'Option 4 for Question 1 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '89d46e6a73a0341924a64c97',
                                'createDate': '2017-10-04T05:15:22.399Z'
                            }
                        ]
                    },
                    {
                        'description': 'Question 2 for Quiz 3',
                        'optionType': 'Radio',
                        '_id': '59d4506e6340542770834a45',
                        'createDate': '2017-10-04T03:07:26.801Z',
                        'options': [
                            {
                                'description': 'Option1 for Question 2 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '59d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option2 for Question 2 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '69d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option3 for Question 2 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '79d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option4 for Question 2 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '89d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            }
                        ]
                    },
                    {
                        'description': 'Question 3 for Quiz 3',
                        'optionType': 'Checkbox',
                        '_id': '59d450876340542770834a46',
                        'createDate': '2017-10-04T03:07:51.368Z',
                        'options': [
                            {
                                'description': 'Option1 for Question 3 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '59d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option2 for Question 3 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '69d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option3 for Question 3 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '79d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option4 for Question 3 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '89d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            }
                        ]
                    },
                    {
                        'description': 'Question 4 for Quiz 3',
                        'optionType': 'Text',
                        '_id': '59d453846340542770834a48',
                        'createDate': '2017-10-04T03:20:36.724Z',
                        'options': [
                            {
                                'description': 'Option1 for Question 4 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '59d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option2 for Question 4 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '69d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option3 for Question 4 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '79d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            },
                            {
                                'description': 'Option4 for Question 4 Quiz 3',
                                'isCorrect': 'true',
                                '_id': '89d4d7049e40d719e48951ca',
                                'createDate': '2017-10-04T12:41:40.165Z'
                            }
                        ]
                    }
                ]
            }
        ]);
        // return this.http.get(this.quizUrl)
        // 		.toPromise()
        // 		.then(response => response.json() as Quiz[])
        // 		.catch(HttpUtil.handleError);
    };
    UserQuizService.prototype.getUser = function () {
        return Promise.resolve({
            _id: '59d36571a769ac08e0f87b03',
            registrationId: '59d36571a769ac08e0f87b04',
            name: 'Test User 1',
            email: 'testuser@user.com',
            currentUserQuiz: null,
            archivedUserQuiz: null
        });
    };
    UserQuizService.prototype.setNextQuizForUser = function (user) {
        return this.getQuizs().then(function (quizs) {
            if (typeof user.currentUserQuizLevel === "undefined") {
                user.currentUserQuizLevel = 0;
            }
            else {
                user.currentUserQuizLevel++;
            }
            if (quizs && quizs.length && quizs.length > user.currentUserQuizLevel) {
                user.currentQuestionIndex = 0;
                user.currentUserQuiz = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.orderBy(quizs, ['level'], ['asc'])[user.currentUserQuizLevel];
                if (quizs.length == user.currentUserQuizLevel + 1) {
                    user.isLastQuiz = true;
                }
            }
            else {
                return null;
            }
            return user;
        });
    };
    return UserQuizService;
}());
UserQuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object])
], UserQuizService);

var _a, _b;
//# sourceMappingURL=user-quiz.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map