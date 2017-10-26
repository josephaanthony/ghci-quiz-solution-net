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

/***/ "../../../../../src/app/admin-quiz-module/models/question.ts":
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

/***/ "../../../../../src/app/admin-quiz-module/models/quiz.ts":
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

/***/ "../../../../../src/app/admin-quiz-module/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.question-row input,textarea {\r\n\twidth: 100%\r\n}\r\n\r\n.option-row input {\r\n\twidth: 100%\r\n}\r\n\r\n\r\nselect {\r\n    height: 27px;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<toaster-container [toasterconfig]=\"toasterConfig\"></toaster-container>\n\t<div *ngIf=\"quiz\" class=\"panel panel-info\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<!-- <div>\n\t\t\t\t<h3 class=\"panel-title\">Questions</h3>\n\t\t\t</div> -->\n\t\t\t<div>\n\t\t\t\t<div class=\"col-md-3\">{{quiz.id}}</div>\n\t\t\t\t<div class=\"col-md-3\">{{quiz.description}}</div>\n\t\t\t\t<div class=\"col-md-2\">{{quiz.level}}</div>\n\t\t\t\t<div class=\"col-md-2\">{{quiz.timeoutInterval}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"panel-title\">Quizs\n\t\t\t\t<a [routerLink]=\"['/admin/quizhome']\" class=\"glyphicon glyphicon-home\"></a>\n\t\t\t</div>\n\t\t\t<h3></h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"col-md-1\">Id</div>\n\t\t\t\t\t<div class=\"col-md-3\">Desc</div>\n\t\t\t\t\t<div class=\"col-md-1\">OptionType</div>\n\t\t\t\t\t<div class=\"col-md-1\">Complexity</div>\n\t\t\t\t\t<div class=\"col-md-3\">Options</div>\n\t\t\t\t\t<div class=\"col-md-3\"><button class=\"btn btn-primary btn-sm\" (click)=\"addNewQuestion()\">Add New Question</button></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"question-row\">\n\t\t\t\t<div class=\"row\" *ngFor=\"let question of quiz.Questions\">\n\t\t\t\t\t<div class=\"col-md-1\" style=\"padding-right:0px\" title=\"{{question.id}}\">\n\t\t\t\t\t\t<label style=\"white-space: nowrap; text-overflow: ellipsis; overflow: hidden;\">{{question.id}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<textarea style=\"height:200px\" type=\"text\" [(ngModel)]=\"question.description\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t<select [(ngModel)]=\"question.optionType\">\n\t\t\t\t\t\t\t<option *ngFor=\"let op of OPTION_TYPE\">{{op}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t<select [(ngModel)]=\"question.complexity\">\n\t\t\t\t\t\t\t<option *ngFor=\"let op of QUESTION_COMPLEXITITES\">{{op}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"option-row\">\n\t\t\t\t\t\t\t<div style=\"padding-left:0px; color:#2f3133\" class=\"row\" \n\t\t\t\t\t\t\t\t*ngFor=\"let option of question.QuizOptions; let i = index\" [attr.data-index]=\"i\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"option.description\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t<select [(ngModel)]=\"option.isCorrect\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let op of OPTION_FLAG\">{{op}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\" style=\"color:#df691a\">\n\t\t\t\t\t\t\t\t\t<span style=\"cursor: pointer\" class=\"glyphicon glyphicon-minus\" \n\t\t\t\t\t\t\t\t\t\t(click)=\"removeQuizOption(question, i)\"></span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"i == question.QuizOptions.length-1\" style=\"cursor: pointer\" class=\"glyphicon glyphicon-plus\" \n\t\t\t\t\t\t\t\t\t\t(click)=\"addQuizOption(question, i)\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"updateQuestion(question)\">Update Question</button>\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"deleteQuestion(question)\">Delete Question</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_question__ = __webpack_require__("../../../../../src/app/admin-quiz-module/models/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_quiz_service__ = __webpack_require__("../../../../../src/app/admin-quiz-module/service/quiz.service.ts");
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
        this.questionIndexCounter = 0;
        this.toasterconfig = { timeout: 0 };
        this.OPTION_FLAG = ["true", "false"];
        this.OPTION_TYPE = ["Radio", "Checkbox"];
        this.QUESTION_COMPLEXITITES = ["COMPLEX", "MEDIUM", "EASY"];
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuestions(this.route.snapshot.params['quizId'])
            .then(function (quiz) {
            _this.quiz = quiz;
            var maxIndexQuestion = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.maxBy(_this.quiz.Questions, 'index');
            if (maxIndexQuestion) {
                _this.questionIndexCounter = maxIndexQuestion.index + 1;
            }
        });
    };
    QuestionComponent.prototype.addQuizOption = function (question) {
        var optionIndexCounter = 0;
        var maxIndexOption = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.maxBy(question.QuizOptions, 'index');
        if (maxIndexOption) {
            optionIndexCounter = maxIndexOption.index + 1;
        }
        question.QuizOptions.push({ id: null, description: null, isCorrect: null, index: optionIndexCounter });
    };
    QuestionComponent.prototype.removeQuizOption = function (question, index) {
        if (question.QuizOptions.length > 1) {
            question.QuizOptions.splice(index, 1);
        }
    };
    QuestionComponent.prototype.addNewQuestion = function () {
        var newQuestion = new __WEBPACK_IMPORTED_MODULE_3__models_question__["a" /* Question */]();
        newQuestion.id = TEMP_QUESTION_ID + (this.idCounter++);
        newQuestion.index = this.questionIndexCounter++;
        newQuestion.quizId = this.quiz.id;
        newQuestion.QuizOptions = [{ id: null, description: null, isCorrect: null, index: 0 }];
        if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(this.quiz.Questions)) {
            this.quiz.Questions = [];
        }
        this.quiz.Questions.push(newQuestion);
    };
    QuestionComponent.prototype.updateQuestion = function (question) {
        var updateFn = null;
        if (question.id.startsWith(TEMP_QUESTION_ID)) {
            updateFn = this.quizService.createQuestion;
        }
        else {
            updateFn = this.quizService.updateQuestion;
        }
        updateFn(question).then(function (questionResult) {
            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.extend(question, questionResult);
        });
    };
    QuestionComponent.prototype.deleteQuestion = function (question) {
        var _this = this;
        if (question.id.startsWith(TEMP_QUESTION_ID)) {
            var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(this.quiz.Questions, { id: question.id });
            this.quiz.Questions.splice(index, 1);
        }
        else {
            this.quizService.deleteQuestion(question.id).then(function (deletedQuestionId) {
                var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(_this.quiz.Questions, { id: question.id });
                _this.quiz.Questions.splice(index, 1);
            });
        }
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-questions',
        template: __webpack_require__("../../../../../src/app/admin-quiz-module/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-quiz-module/question/question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_quiz_service__["a" /* QuizService */]) === "function" && _b || Object])
], QuestionComponent);

var _a, _b;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.quiz-row input {\r\n\twidth: 100%\r\n}\r\n\r\nselect {\r\n\theight: 27px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">Quiz</h3>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<toaster-container></toaster-container>\r\n\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Id</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Desc</div>\r\n\t\t\t\t\t<div class=\"col-md-1\">Level</div>\r\n\t\t\t\t\t<div class=\"col-md-1\">TimeOut</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Complexity</div>\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-4\"><button class=\"btn btn-primary btn-sm\" (click)=\"addNewQuiz()\">Add New Quiz</button></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"quiz-row\">\r\n\t\t\t\t<div class=\"row\" *ngFor=\"let quiz of quizs\">\r\n\t\t\t\t\t<div class=\"col-md-2\" style=\"padding-right: 0px\">\r\n\t\t\t\t\t\t<label>{{quiz.id}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.description\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.level\"/>\r\n\t\t\t\t\t</div>\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.timeoutInterval\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<div class=\"row1\">\r\n\t\t\t\t\t\t\t<div style=\"padding-left:0px; color:#2f3133\" class=\"row\" \r\n\t\t\t\t\t\t\t\t*ngFor=\"let comp of quiz.ComplexityComposition; let i = index\" [attr.data-index]=\"i\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<!-- <input type=\"text\" [(ngModel)]=\"comp.level\"/> -->\r\n\t\t\t\t\t\t\t\t\t<select [(ngModel)]=\"comp.level\">\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let compLevel of QUESTION_COMPLEXITITES\">{{compLevel}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\" style=\"padding:0px\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"comp.nos\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"color:#df691a\">\r\n\t\t\t\t\t\t\t\t\t<span style=\"cursor: pointer\" class=\"glyphicon glyphicon-minus\" \r\n\t\t\t\t\t\t\t\t\t\t(click)=\"removeCompositionLevel(quiz, i)\"></span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"i == quiz.ComplexityComposition.length-1\" style=\"cursor: pointer\" class=\"glyphicon glyphicon-plus\" \r\n\t\t\t\t\t\t\t\t\t\t(click)=\"quiz.ComplexityComposition.push({})\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"updateQuiz(quiz)\">Update Quiz</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"deleteQuiz(quiz)\">Delete Quiz</button>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/admin/questionshome', quiz.id]\" class=\"btn btn-default btn-sm\">Show Questions ({{quiz.questions?.length}})</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_quiz__ = __webpack_require__("../../../../../src/app/admin-quiz-module/models/quiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_quiz_service__ = __webpack_require__("../../../../../src/app/admin-quiz-module/service/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TEMP_QUIZid = '*temp*';
//const QUESTION_COMPLEXITITES = [ "COMPLEX", "MEDIUM", "EASY" ]
var QuizComponent = (function () {
    function QuizComponent(quizService, toasterService) {
        this.quizService = quizService;
        this.toasterService = toasterService;
        this.idCounter = 1;
        this.QUESTION_COMPLEXITITES = ["COMPLEX", "MEDIUM", "EASY"];
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuizs()
            .then(function (quizs) {
            _this.quizs = quizs.map(function (q) {
                return _this.populateCompositionLevel(q);
            });
        });
    };
    QuizComponent.prototype.populateCompositionLevel = function (quiz) {
        if (!quiz.complexityComposition) {
            quiz.complexityComposition = "[ { \"level\": null, \"nos\": null }]";
        }
        try {
            quiz.ComplexityComposition = JSON.parse(quiz.complexityComposition);
        }
        catch (error) {
            this.toasterService.pop('error', 'Exception', 'Complexity value is not valid');
        }
        return quiz;
    };
    QuizComponent.prototype.removeCompositionLevel = function (quiz, index) {
        if (quiz.ComplexityComposition.length > 1) {
            quiz.ComplexityComposition.splice(index, 1);
        }
    };
    QuizComponent.prototype.addNewQuiz = function () {
        var newQuiz = new __WEBPACK_IMPORTED_MODULE_3__models_quiz__["a" /* Quiz */]();
        this.populateCompositionLevel(newQuiz);
        newQuiz.id = TEMP_QUIZid + (this.idCounter++);
        this.quizs.push(newQuiz);
    };
    QuizComponent.prototype.updateQuiz = function (quiz) {
        var _this = this;
        quiz.complexityComposition = JSON.stringify(quiz.ComplexityComposition);
        var updateFn = null;
        if (quiz.id.startsWith(TEMP_QUIZid)) {
            updateFn = this.quizService.createQuiz;
        }
        else {
            updateFn = this.quizService.updateQuiz;
        }
        updateFn(quiz).then(function (quizResult) {
            console.log(quizResult);
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.extend(quiz, quizResult);
            _this.populateCompositionLevel(quiz);
        });
    };
    QuizComponent.prototype.deleteQuiz = function (quiz) {
        var _this = this;
        if (quiz.id.indexOf(TEMP_QUIZid) >= 0) {
            var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(this.quizs, { id: quiz.id });
            this.quizs.splice(index, 1);
        }
        else {
            this.quizService.deleteQuiz(quiz.id).then(function (deletedQuizId) {
                var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(_this.quizs, { id: quiz.id });
                _this.quizs.splice(index, 1);
            });
        }
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quizs',
        template: __webpack_require__("../../../../../src/app/admin-quiz-module/quiz/quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-quiz-module/quiz/quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object])
], QuizComponent);

var _a, _b;
//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/service/quiz.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_util_http_util__ = __webpack_require__("../../../../../src/app/shared/util/http.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_loader_service__ = __webpack_require__("../../../../../src/app/shared/components/loader.service.ts");
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
    function QuizService(http, toasterService, loaderService) {
        var _this = this;
        this.http = http;
        this.toasterService = toasterService;
        this.loaderService = loaderService;
        this.quizUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiContextUrl + '/api/adminquiz';
        this.questionUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiContextUrl + '/api/adminquestion';
        this.optionUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiContextUrl + '/api/adminoption';
        this.quizErrorHandler = __WEBPACK_IMPORTED_MODULE_6__shared_util_http_util__["a" /* HttpUtil */].handleErrorWithMessage(this.toasterService);
        this.quizSuccessHandler = __WEBPACK_IMPORTED_MODULE_6__shared_util_http_util__["a" /* HttpUtil */].handleSuccessWithMessag(this.toasterService);
        this.createQuiz = function (newQuiz) { return _this.createData(_this.quizUrl, newQuiz); };
        this.deleteQuiz = function (delQuizId) { return _this.deleteData(_this.quizUrl, delQuizId); };
        this.updateQuiz = function (putQuiz) { return _this.updateData(_this.quizUrl, putQuiz); };
        this.createQuestion = function (newQuestion) {
            return _this.createData(_this.questionUrl, newQuestion);
        };
        this.deleteQuestion = function (delQuestionId) { return _this.deleteData(_this.questionUrl, delQuestionId); };
        this.updateQuestion = function (putQuestion) { return _this.updateData(_this.questionUrl, putQuestion); };
        this.dispayLoaderFn = function () {
            _this.loaderService.display(true);
        };
        this.hideLoaderFn = function () {
            _this.loaderService.display(false);
        };
    }
    QuizService.prototype.getQuizs = function () {
        this.dispayLoaderFn();
        return this.http.get(this.quizUrl)
            .do(this.hideLoaderFn)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__shared_util_http_util__["a" /* HttpUtil */].handleError);
    };
    // public createOption = (questionId, newOption: Option): Promise<Option> => 
    // 	this.createData<Option>(this.optionUrl + '/' + questionId, newOption);
    // public deleteOption = (delOptionId: String): Promise<String> => this.deleteData(this.optionUrl, delOptionId);
    // public updateOption = (putOption: Option): Promise<Option> => this.updateData<Option>(this.optionUrl, putOption);
    QuizService.prototype.getQuestions = function (quizId) {
        this.dispayLoaderFn();
        return this.http.get(this.questionUrl + '/' + quizId)
            .do(this.hideLoaderFn)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__shared_util_http_util__["a" /* HttpUtil */].handleError);
    };
    // post("/api/quizs")
    QuizService.prototype.createData = function (url, newData) {
        return this.http.post(url, newData)
            .do(this.quizSuccessHandler)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    // delete("/api/quizs/:id")
    QuizService.prototype.deleteData = function (url, delDataId) {
        return this.http.delete(url + '/' + delDataId)
            .do(this.quizSuccessHandler)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    // put("/api/quizs/:id")
    QuizService.prototype.updateData = function (url, putData) {
        var putUrl = url;
        return this.http.put(putUrl, putData)
            .do(this.quizSuccessHandler)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    return QuizService;
}());
QuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_components_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_components_loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], QuizService);

var _a, _b, _c;
//# sourceMappingURL=quiz.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tootlbar-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.tootlbar-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <router-outlet> \r\n    <spinner-component></spinner-component>   \r\n  </router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_quiz_module_service_quiz_service__ = __webpack_require__("../../../../../src/app/admin-quiz-module/service/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_quiz_module_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/admin-quiz-module/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_quiz_module_question_question_component__ = __webpack_require__("../../../../../src/app/admin-quiz-module/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_quiz_module_components_user_quiz_component__ = __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_quiz_module_components_user_quiz_home_user_quiz_home_component__ = __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz-home/user-quiz-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_quiz_module_services_user_quiz_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/user-quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_quiz_module_components_user_registration_user_registration_component__ = __webpack_require__("../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_quiz_module_services_local_storage_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_components_loader_service__ = __webpack_require__("../../../../../src/app/shared/components/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_components_loader_component__ = __webpack_require__("../../../../../src/app/shared/components/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'users/quizhome', component: __WEBPACK_IMPORTED_MODULE_12__user_quiz_module_components_user_quiz_home_user_quiz_home_component__["a" /* UserQuizHomeComponent */] },
    { path: 'users/quiz', component: __WEBPACK_IMPORTED_MODULE_11__user_quiz_module_components_user_quiz_component__["a" /* UserQuizComponent */] },
    { path: 'users/registration', component: __WEBPACK_IMPORTED_MODULE_14__user_quiz_module_components_user_registration_user_registration_component__["a" /* UserRegistrationComponent */] },
    { path: 'admin/quizhome', component: __WEBPACK_IMPORTED_MODULE_9__admin_quiz_module_quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'admin/questionshome/:quizId', component: __WEBPACK_IMPORTED_MODULE_10__admin_quiz_module_question_question_component__["a" /* QuestionComponent */] },
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
        pathMatch: 'full'
    }
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
            __WEBPACK_IMPORTED_MODULE_9__admin_quiz_module_quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_10__admin_quiz_module_question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_quiz_module_components_user_quiz_component__["a" /* UserQuizComponent */],
            __WEBPACK_IMPORTED_MODULE_14__user_quiz_module_components_user_registration_user_registration_component__["a" /* UserRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_quiz_module_components_user_quiz_home_user_quiz_home_component__["a" /* UserQuizHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__shared_components_loader_component__["a" /* LoaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            )
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__admin_quiz_module_service_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_13__user_quiz_module_services_user_quiz_service__["a" /* UserQuizService */], __WEBPACK_IMPORTED_MODULE_15__user_quiz_module_services_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_16__shared_components_loader_service__["a" /* LoaderService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cp-spinner{width:48px;height:48px;display:inline-block;box-sizing:border-box;position:relative}.cp-round:before{border-radius:50%;content:\" \";width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 6px #bababa;border-right:solid 6px #bababa;border-bottom:solid 6px #bababa;border-left:solid 6px #bababa;position:absolute;top:0;left:0}.cp-round:after{border-radius:50%;content:\" \";width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 6px #f56151;border-right:solid 6px transparent;border-bottom:solid 6px transparent;border-left:solid 6px transparent;position:absolute;top:0;left:0;-webkit-animation:cp-round-animate 1s ease-in-out infinite;animation:cp-round-animate 1s ease-in-out infinite}@-webkit-keyframes cp-round-animate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cp-round-animate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cp-pinwheel{border-radius:50%;width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 24px #0fd6ff;border-right:solid 24px #58bd55;border-bottom:solid 24px #eb68a1;border-left:solid 24px #f3d53f;-webkit-animation:cp-pinwheel-animate 1s linear infinite;animation:cp-pinwheel-animate 1s linear infinite}@-webkit-keyframes cp-pinwheel-animate{0%{border-top-color:#0fd6ff;border-right-color:#58bd55;border-bottom-color:#eb68a1;border-left-color:#f3d53f;-webkit-transform:rotate(0);transform:rotate(0)}25%{border-top-color:#eb68a1;border-right-color:#f3d53f;border-bottom-color:#0fd6ff;border-left-color:#58bd55}50%{border-top-color:#0fd6ff;border-right-color:#58bd55;border-bottom-color:#eb68a1;border-left-color:#f3d53f}75%{border-top-color:#eb68a1;border-right-color:#f3d53f;border-bottom-color:#0fd6ff;border-left-color:#58bd55}100%{border-top-color:#0fd6ff;border-right-color:#58bd55;border-bottom-color:#eb68a1;border-left-color:#f3d53f;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cp-pinwheel-animate{0%{border-top-color:#0fd6ff;border-right-color:#58bd55;border-bottom-color:#eb68a1;border-left-color:#f3d53f;-webkit-transform:rotate(0);transform:rotate(0)}25%{border-top-color:#eb68a1;border-right-color:#f3d53f;border-bottom-color:#0fd6ff;border-left-color:#58bd55}50%{border-top-color:#0fd6ff;border-right-color:#58bd55;border-bottom-color:#eb68a1;border-left-color:#f3d53f}75%{border-top-color:#eb68a1;border-right-color:#f3d53f;border-bottom-color:#0fd6ff;border-left-color:#58bd55}100%{border-top-color:#0fd6ff;border-right-color:#58bd55;border-bottom-color:#eb68a1;border-left-color:#f3d53f;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cp-balls{-webkit-animation:cp-balls-animate 1s linear infinite;animation:cp-balls-animate 1s linear infinite}.cp-balls:before{border-radius:50%;content:\" \";width:24px;height:24px;display:inline-block;box-sizing:border-box;background-color:#0fd6ff;position:absolute;top:0;left:0;-webkit-animation:cp-balls-animate-before 1s ease-in-out infinite;animation:cp-balls-animate-before 1s ease-in-out infinite}.cp-balls:after{border-radius:50%;content:\" \";width:24px;height:24px;display:inline-block;box-sizing:border-box;background-color:#eb68a1;position:absolute;bottom:0;right:0;-webkit-animation:cp-balls-animate-after 1s ease-in-out infinite;animation:cp-balls-animate-after 1s ease-in-out infinite}@-webkit-keyframes cp-balls-animate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cp-balls-animate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes cp-balls-animate-before{0%{-webkit-transform:translate(-5px,-5px);transform:translate(-5px,-5px)}50%{-webkit-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(-5px,-5px);transform:translate(-5px,-5px)}}@keyframes cp-balls-animate-before{0%{-webkit-transform:translate(-5px,-5px);transform:translate(-5px,-5px)}50%{-webkit-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(-5px,-5px);transform:translate(-5px,-5px)}}@-webkit-keyframes cp-balls-animate-after{0%{-webkit-transform:translate(5px,5px);transform:translate(5px,5px)}50%{-webkit-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(5px,5px);transform:translate(5px,5px)}}@keyframes cp-balls-animate-after{0%{-webkit-transform:translate(5px,5px);transform:translate(5px,5px)}50%{-webkit-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(5px,5px);transform:translate(5px,5px)}}.cp-bubble{border-radius:50%;width:24px;height:24px;display:inline-block;box-sizing:border-box;background:#58bd55;-webkit-animation:cp-bubble-animate 1s linear infinite;animation:cp-bubble-animate 1s linear infinite}.cp-bubble:before{border-radius:50%;content:\" \";width:24px;height:24px;display:inline-block;box-sizing:border-box;background-color:#58bd55;position:absolute;left:-30px;-webkit-animation:cp-bubble-animate-before 1s ease-in-out infinite;animation:cp-bubble-animate-before 1s ease-in-out infinite}.cp-bubble:after{border-radius:50%;content:\" \";width:24px;height:24px;display:inline-block;box-sizing:border-box;background-color:#58bd55;position:absolute;right:-30px;-webkit-animation:cp-bubble-animate-after 1s ease-in-out infinite;animation:cp-bubble-animate-after 1s ease-in-out infinite}@-webkit-keyframes cp-bubble-animate{0%{opacity:.5;-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0)}25%{opacity:1;-webkit-transform:scale(1.1) translateX(-15px);transform:scale(1.1) translateX(-15px)}50%{opacity:1;-webkit-transform:scale(1.2) translateX(15px);transform:scale(1.2) translateX(15px)}100%{opacity:.5;-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0)}}@keyframes cp-bubble-animate{0%{opacity:.5;-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0)}25%{opacity:1;-webkit-transform:scale(1.1) translateX(-15px);transform:scale(1.1) translateX(-15px)}50%{opacity:1;-webkit-transform:scale(1.2) translateX(15px);transform:scale(1.2) translateX(15px)}100%{opacity:.5;-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0)}}@-webkit-keyframes cp-bubble-animate-before{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%,50%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes cp-bubble-animate-before{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%,50%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes cp-bubble-animate-after{0%,50%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%,75%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes cp-bubble-animate-after{0%,50%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%,75%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.cp-flip{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-perspective:10em;perspective:10em}.cp-flip:before{width:48px;height:48px;display:inline-block;box-sizing:border-box;background:#f56151;content:\" \";position:absolute;top:0;left:0;-webkit-animation:cp-flip-animate-before 2s linear infinite;animation:cp-flip-animate-before 2s linear infinite}@-webkit-keyframes cp-flip-animate-before{0%{-webkit-transform:rotateY(0) rotateX(0);transform:rotateY(0) rotateX(0)}25%{-webkit-transform:rotateY(360deg) rotateX(0);transform:rotateY(360deg) rotateX(0)}50%{-webkit-transform:rotateY(360deg) rotateX(360deg);transform:rotateY(360deg) rotateX(360deg)}75%{-webkit-transform:rotateY(0) rotateX(360deg);transform:rotateY(0) rotateX(360deg)}100%{-webkit-transform:rotateY(0) rotateX(0);transform:rotateY(0) rotateX(0)}}@keyframes cp-flip-animate-before{0%{-webkit-transform:rotateY(0) rotateX(0);transform:rotateY(0) rotateX(0)}25%{-webkit-transform:rotateY(360deg) rotateX(0);transform:rotateY(360deg) rotateX(0)}50%{-webkit-transform:rotateY(360deg) rotateX(360deg);transform:rotateY(360deg) rotateX(360deg)}75%{-webkit-transform:rotateY(0) rotateX(360deg);transform:rotateY(0) rotateX(360deg)}100%{-webkit-transform:rotateY(0) rotateX(0);transform:rotateY(0) rotateX(0)}}.cp-hue{width:24px;height:24px;display:inline-block;box-sizing:border-box;background:#f56151;border-radius:50%;-webkit-animation:cp-hue-animate 1s ease-in-out infinite;animation:cp-hue-animate 1s ease-in-out infinite}.cp-hue:before{border-radius:0 12px 12px 0;content:\" \";width:12px;height:24px;display:inline-block;box-sizing:border-box;background:#fff;position:absolute;top:0;right:0;-webkit-animation:cp-hue-animate-before 1s ease-in-out infinite;animation:cp-hue-animate-before 1s ease-in-out infinite}@-webkit-keyframes cp-hue-animate{0%{background:#f56151}25%{background:#58bd55}50%{background:#eb68a1}75%{background:#f3d53f}100%{background:#f56151}}@keyframes cp-hue-animate{0%{background:#f56151}25%{background:#58bd55}50%{background:#eb68a1}75%{background:#f3d53f}100%{background:#f56151}}@-webkit-keyframes cp-hue-animate-before{0%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left center;transform-origin:left center;opacity:.5}30%,70%{-webkit-transform:rotateY(180deg);transform:rotateY(180deg);-webkit-transform-origin:left center;transform-origin:left center;opacity:.2}100%{-webkit-transform:rotateY(0);transform:rotateY(0);opacity:.5}}@keyframes cp-hue-animate-before{0%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left center;transform-origin:left center;opacity:.5}30%,70%{-webkit-transform:rotateY(180deg);transform:rotateY(180deg);-webkit-transform-origin:left center;transform-origin:left center;opacity:.2}100%{-webkit-transform:rotateY(0);transform:rotateY(0);opacity:.5}}.cp-skeleton{border-radius:50%;border-top:solid 6px #f56151;border-right:solid 6px transparent;border-bottom:solid 6px transparent;border-left:solid 6px transparent;-webkit-animation:cp-skeleton-animate 1s linear infinite;animation:cp-skeleton-animate 1s linear infinite}.cp-skeleton:before{border-radius:50%;content:\" \";width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 6px transparent;border-right:solid 6px transparent;border-bottom:solid 6px transparent;border-left:solid 6px #f56151;position:absolute;top:-6px;left:-6px;-webkit-transform:rotateZ(-30deg);transform:rotateZ(-30deg)}.cp-skeleton:after{border-radius:50%;content:\" \";width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 6px transparent;border-right:solid 6px #f56151;border-bottom:solid 6px transparent;border-left:solid 6px transparent;position:absolute;top:-6px;right:-6px;-webkit-transform:rotateZ(30deg);transform:rotateZ(30deg)}@-webkit-keyframes cp-skeleton-animate{0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}50%{opacity:.7}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:1}}@keyframes cp-skeleton-animate{0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}50%{opacity:.7}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:1}}.cp-eclipse{width:12px;height:12px;display:inline-block;box-sizing:border-box;border-radius:50%;background:#f3d53f;margin:12px;-webkit-animation:cp-eclipse-animate 1s ease-out infinite;animation:cp-eclipse-animate 1s ease-out infinite}.cp-eclipse:before{border-radius:50%;content:\" \";width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 6px transparent;border-right:solid 6px #f3d53f;border-bottom:solid 6px transparent;border-left:solid 6px transparent;position:absolute;top:-18px;left:-18px}.cp-eclipse:after{border-radius:50%;content:\" \";width:48px;height:48px;display:inline-block;box-sizing:border-box;border-top:solid 6px transparent;border-right:solid 6px transparent;border-bottom:solid 6px transparent;border-left:solid 6px #f3d53f;position:absolute;top:-18px;right:-18px}@-webkit-keyframes cp-eclipse-animate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cp-eclipse-animate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cp-boxes:before{width:24px;height:24px;display:inline-block;box-sizing:border-box;content:\" \";background:#58bd55;position:absolute;top:12px;left:0;-webkit-animation:cp-boxes-animate-before 1s ease-in-out infinite;animation:cp-boxes-animate-before 1s ease-in-out infinite}.cp-boxes:after{width:24px;height:24px;display:inline-block;box-sizing:border-box;content:\" \";background:#58bd55;position:absolute;top:12px;right:0;-webkit-animation:cp-boxes-animate-after 1s ease-in-out infinite;animation:cp-boxes-animate-after 1s ease-in-out infinite}@-webkit-keyframes cp-boxes-animate-before{0%{-webkit-transform:translateX(-24px) rotate(45deg);transform:translateX(-24px) rotate(45deg)}50%{-webkit-transform:translateX(-8px) rotate(225deg);transform:translateX(-8px) rotate(225deg)}100%{-webkit-transform:translateX(-24px) rotate(45deg);transform:translateX(-24px) rotate(45deg)}}@keyframes cp-boxes-animate-before{0%{-webkit-transform:translateX(-24px) rotate(45deg);transform:translateX(-24px) rotate(45deg)}50%{-webkit-transform:translateX(-8px) rotate(225deg);transform:translateX(-8px) rotate(225deg)}100%{-webkit-transform:translateX(-24px) rotate(45deg);transform:translateX(-24px) rotate(45deg)}}@-webkit-keyframes cp-boxes-animate-after{0%{-webkit-transform:translateX(24px) rotate(45deg);transform:translateX(24px) rotate(45deg)}50%{-webkit-transform:translateX(8px) rotate(-225deg);transform:translateX(8px) rotate(-225deg)}100%{-webkit-transform:translateX(24px) rotate(45deg);transform:translateX(24px) rotate(45deg)}}@keyframes cp-boxes-animate-after{0%{-webkit-transform:translateX(24px) rotate(45deg);transform:translateX(24px) rotate(45deg)}50%{-webkit-transform:translateX(8px) rotate(-225deg);transform:translateX(8px) rotate(-225deg)}100%{-webkit-transform:translateX(24px) rotate(45deg);transform:translateX(24px) rotate(45deg)}}.cp-morph{width:48px;height:48px;display:inline-block;box-sizing:border-box;background:#0fd6ff;-webkit-animation:cp-morph-animate 1s linear infinite;animation:cp-morph-animate 1s linear infinite}@-webkit-keyframes cp-morph-animate{0%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);border-radius:0;background:#f3d53f}25%,75%{-webkit-transform:rotate(180deg) scale(.4);transform:rotate(180deg) scale(.4);border-radius:50%;background:#0fd6ff}100%{-webkit-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);border-radius:0;background:#f3d53f}}@keyframes cp-morph-animate{0%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);border-radius:0;background:#f3d53f}25%,75%{-webkit-transform:rotate(180deg) scale(.4);transform:rotate(180deg) scale(.4);border-radius:50%;background:#0fd6ff}100%{-webkit-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1);border-radius:0;background:#f3d53f}}.cp-heart{-webkit-animation:cp-heart-animate 2s ease-in-out infinite;animation:cp-heart-animate 2s ease-in-out infinite}.cp-heart:before{border-radius:12px 12px 0 0;content:\" \";width:24px;height:35px;display:inline-block;box-sizing:border-box;background-color:#eb68a1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:absolute;top:0;left:8px}.cp-heart:after{border-radius:12px 12px 0 0;content:\" \";width:24px;height:35px;display:inline-block;box-sizing:border-box;background-color:#eb68a1;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;top:0;right:8px}@-webkit-keyframes cp-heart-animate{0%{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center;transform-origin:center}15%{-webkit-transform:scale(1.4);transform:scale(1.4);-webkit-transform-origin:center;transform-origin:center}30%{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center;transform-origin:center}45%{-webkit-transform:scale(1.4);transform:scale(1.4);-webkit-transform-origin:center;transform-origin:center}100%,60%{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center;transform-origin:center}}@keyframes cp-heart-animate{0%{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center;transform-origin:center}15%{-webkit-transform:scale(1.4);transform:scale(1.4);-webkit-transform-origin:center;transform-origin:center}30%{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center;transform-origin:center}45%{-webkit-transform:scale(1.4);transform:scale(1.4);-webkit-transform-origin:center;transform-origin:center}100%,60%{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center;transform-origin:center}}.cp-meter{border-radius:50%;border-top:solid 6px #0fd6ff;border-right:solid 6px #0fd6ff;border-bottom:solid 6px #0fd6ff;border-left:solid 6px #0fd6ff;width:48px;height:48px;display:inline-block;box-sizing:border-box}.cp-meter:before{border-radius:3px;content:\" \";width:6px;height:12px;display:inline-block;box-sizing:border-box;background-color:#0fd6ff;position:absolute;top:5px;left:16px;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation:cp-meter-animate-before 1s linear infinite;animation:cp-meter-animate-before 1s linear infinite}@-webkit-keyframes cp-meter-animate-before{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}100%{-webkit-transform:rotate(315deg);transform:rotate(315deg)}}@keyframes cp-meter-animate-before{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}100%{-webkit-transform:rotate(315deg);transform:rotate(315deg)}}\r\n\r\n\r\n/* Absolute Center Spinner */\r\n.loader {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n/* Transparent Overlay */\r\n.loader:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.7);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../../src/app/shared/components/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(spinner) {
        var _this = this;
        spinner.status.subscribe(function (status) {
            _this.showLoader = status;
        });
    }
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'spinner-component',
        //   'template': '<span *ngIf="showLoader" class="loading"></span>',
        'template': '<div *ngIf="showLoader" class=" loader"><div class="cp-spinner cp-skeleton"></div></div>',
        styles: [__webpack_require__("../../../../../src/app/shared/components/loader.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]) === "function" && _a || Object])
], LoaderComponent);

var _a;
//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    return LoaderService;
}());
LoaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], LoaderService);

//# sourceMappingURL=loader.service.js.map

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
    HttpUtil.handleSuccessWithMessag = function (toasterService) {
        return function (res) { return HttpUtil.handleSuccess(res, toasterService); };
    };
    HttpUtil.handleSuccess = function (res, toasterService) {
        toasterService.pop('success', "Update", "Updated data successfully");
    };
    HttpUtil.handleError = function (error, toasterService) {
        var errorJson;
        try {
            errorJson = error.json();
        }
        catch (error) {
            errorJson = { Message: error };
        }
        // let errMsg = (error.message) ? error.message :
        // 	error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // console.error(errMsg); // log to console
        if (toasterService) {
            toasterService.pop("error", errorJson.Message, errorJson.ExceptionMessage);
        }
        return Promise.reject(errorJson.Message);
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

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz-home/user-quiz-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"text-align: center\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">Welcome {{ user?.name }}</h3>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<toaster-container [toasterconfig]=\"toasterConfig\"></toaster-container>\r\n\r\n\t\t<div *ngIf=\"quizs\" class=\"panel-body\">\r\n\t\t\t<form>\r\n\t\t\t\t<ul class=\"slides\" style=\"list-style: none; padding-left:0px\">\r\n\t\t\t\t\t<li *ngFor=\"let quiz of quizs\">\r\n\t\t\t\t\t\t<div style=\"width: 100%;margin-bottom: 10px;\" class=\"btn btn-warning\" [ngClass]=\"{disabled: !quiz.isActive}\" (click)=\"startQuiz(quiz)\">\r\n\t\t\t\t\t\t\t{{ quiz.description }} - {{ quiz.level }}\r\n\t\t\t\t\t\t\t<span *ngIf=\"quiz.UserQuizs.length > 0\" style=\"margin-left:10px\" class=\"glyphicon\" [ngClass]=\"{'glyphicon-ok': quiz.UserQuizs[0].status === 'COMPLETED_SUCCESS', \r\n\t\t\t\t\t\t\t\t\t\t\t  'glyphicon-remove': quiz.UserQuizs[0].status === 'COMPLETED_FAIL',\r\n\t\t\t\t\t\t\t\t\t\t\t  'glyphicon-pencil': quiz.UserQuizs[0].status === 'IN_PROGRESS'}\"></span>\r\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- <button class=\"btn btn-default\" (click)=\"startQuiz(quiz)\" [disabled]=\"!quiz.isActive\">\r\n\t\t\t\t\t\t\t{{ quiz.description }} - {{ quiz.level }}\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div *ngIf=\"quiz.UserQuizs && quiz.UserQuizs.length > 0\">\r\n\t\t\t\t\t\t\tStatus: {{ quiz.UserQuizs[0].status }}\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz-home/user-quiz-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuizHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_quiz_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/user-quiz.service.ts");
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
var UserQuizHomeComponent = (function () {
    function UserQuizHomeComponent(elementRef, router, quizService, toasterService) {
        this.elementRef = elementRef;
        this.router = router;
        this.quizService = quizService;
        this.toasterService = toasterService;
        this.toasterconfig = { timeout: 0 };
        // this.localUser = this.localStorageService.getItem('user');
        // if(!this.localUser) {
        // 	this.router.navigateByUrl('/users/registration');
        // }
    }
    UserQuizHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getLocalUserOrRedirect()
            .then(function (user) {
            if (user) {
                _this.user = user;
                _this.quizService.getUserQuizs(user)
                    .then(function (quizs) {
                    _this.quizs = quizs.map(function (q) { __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.remove(q.UserQuizs, function (u) { return u === null; }); return q; });
                    _this.setQuizActive(_this.quizs, _this.user);
                });
            }
        });
    };
    UserQuizHomeComponent.prototype.setQuizActive = function (quizs, user) {
        var currentQuiz = { id: null, status: null, Quiz: { id: null } };
        if (user && user.CurrentUserQuiz) {
            currentQuiz = user.CurrentUserQuiz;
        }
        __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.each(quizs, function (quiz) {
            if (quiz.id === currentQuiz.Quiz.id && currentQuiz.status === "IN_PROGRESS") {
                quiz.isActive = true;
                return false;
            }
            else if (!quiz.UserQuizs || quiz.UserQuizs.length == 0) {
                quiz.isActive = true;
                return false;
            }
        });
    };
    UserQuizHomeComponent.prototype.startQuiz = function (quiz) {
        var _this = this;
        if (quiz.isActive) {
            this.quizService.startQuiz({
                id: this.user.id,
                CurrentUserQuiz: {
                    quizId: quiz.id
                }
            })
                .then(function (user) {
                _this.router.navigateByUrl('/users/quiz');
            });
        }
    };
    return UserQuizHomeComponent;
}());
UserQuizHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-quiz-home',
        template: __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz-home/user-quiz-home.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_quiz_service__["a" /* UserQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_quiz_service__["a" /* UserQuizService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], UserQuizHomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-quiz-home.component.js.map

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

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">UserQuiz {{ user?.CurrentUserQuiz?.Quiz?.description}}</h3>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<toaster-container [toasterconfig]=\"toasterConfig\"></toaster-container>\r\n\r\n\t\t<div *ngIf=\"user?.CurrentUserQuestion?.id\" class=\"panel-body\">\r\n\t\t\t<div class=\"carousel\">\r\n\t\t\t\t<code style=\"background:transparent; color: white; word-wrap: break-word; white-space: pre-wrap;\">{{user.CurrentUserQuestion.Question.description}}</code>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<form>\r\n\t\t\t\t\t<ul *ngIf=\"user.CurrentUserQuestion.Question.QuizOptions\" class=\"slides\">\r\n\t\t\t\t\t\t<li *ngFor=\"let option of user.CurrentUserQuestion.Question.QuizOptions\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--  -->\r\n\t\t\t\t\t\t\t<input *ngIf=\"user.CurrentUserQuestion.Question.optionType === 'Checkbox'\" type=\"checkbox\" \r\n\t\t\t\t\t\t\t\tname=\"optionSelection\"\r\n\t\t\t\t\t\t\t\tvalue=\"{{option.id}}\"\r\n\t\t\t\t\t\t\t\t(change)=\"onOptionSelected(user.CurrentUserQuestion, option)\">\r\n\t\t\t\t\t\t\t<input *ngIf=\"user.CurrentUserQuestion.Question.optionType != 'Checkbox'\" type=\"radio\" \r\n\t\t\t\t\t\t\t\tname=\"optionSelection\" \r\n\t\t\t\t\t\t\t\tvalue=\"{{option.id}}\"\r\n\t\t\t\t\t\t\t\t(change)=\"onOptionSelected(user.CurrentUserQuestion, option)\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<label>{{option.description}}</label>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</form>\r\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"getNextQuestion()\">Get Next Question</button>\r\n\t\t\t</div>\t\t  \r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"user && !user?.CurrentUserQuestion?.id\">\r\n\t\t\t<div *ngIf=\"user.CurrentUserQuiz\" style=\"text-align:center\">\r\n\t\t\t\t<h3>You have completed the current quiz. Press Next to go to the next level.</h3>\r\n\t\t\t\t<br/>\r\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"startNextQuiz()\" style=\"margin-bottom: 10px\">Next</button>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div *ngIf=\"!user.CurrentUserQuiz\" style=\"text-align:center\">\r\n\t\t\t\t<h3>You have completed all the levels. Hurray!</h3>\r\n\t\t\t\t<br/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_quiz_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/user-quiz.service.ts");
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
    function UserQuizComponent(elementRef, router, quizService, toasterService) {
        this.elementRef = elementRef;
        this.router = router;
        this.quizService = quizService;
        this.toasterService = toasterService;
        this.toasterconfig = { timeout: 0 };
        // var localUser = this.localStorageService.getItem('user');
        // if(!localUser) {
        // 	this.router.navigateByUrl('/users/registration');
        // }
    }
    UserQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getLocalUserOrRedirect()
            .then(function (user) {
            _this.user = user;
            _this.checkQuizCompleted(_this.user);
        });
    };
    UserQuizComponent.prototype.onOptionSelected = function (userQuestion, option) {
        this.user.CurrentUserQuestion.selectedOptionIds =
            __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.reduce(__WEBPACK_IMPORTED_MODULE_4_jquery__(this.elementRef.nativeElement).find('[name="optionSelection"]:checked'), function (strObj, e) {
                strObj.val = strObj.val + (strObj.index++ ? "," : "") + __WEBPACK_IMPORTED_MODULE_4_jquery__(e).val();
                return strObj;
            }, { index: 0, val: "" }).val;
    };
    UserQuizComponent.prototype.getNextQuestion = function () {
        var _this = this;
        if (this.user.CurrentUserQuestion.selectedOptionIds && this.user.CurrentUserQuestion.selectedOptionIds.length > 0) {
            this.quizService.submitAndGetNextQuestion({
                id: this.user.id,
                CurrentUserQuestion: this.user.CurrentUserQuestion
            })
                .then(function (user) {
                _this.user.isLastQuestionForCurrentQuiz = user.isLastQuestionForCurrentQuiz;
                _this.user.CurrentUserQuestion = user.CurrentUserQuestion;
                _this.checkQuizCompleted(_this.user);
            });
        }
        else {
            this.toasterService.pop('error', 'Options', 'Please select an option to proceed');
        }
    };
    UserQuizComponent.prototype.checkQuizCompleted = function (user) {
        if (user && (user.CurrentUserQuestion == null || user.CurrentUserQuestion.id == null)) {
            this.router.navigateByUrl('/users/quizhome');
        }
    };
    return UserQuizComponent;
}());
UserQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-quizs',
        template: __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_quiz_service__["a" /* UserQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_quiz_service__["a" /* UserQuizService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], UserQuizComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">User Registration</h3>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<toaster-container [toasterconfig]=\"toasterConfig\"></toaster-container>\r\n\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<h2>Please register to begin</h2>\r\n\r\n\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t<fieldset>\r\n\t\t\t\t\t<legend>Welcome</legend>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" placeholder=\"Name\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.college\" name=\"college\" placeholder=\"College Name\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"registerUser()\">Submit</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"singInUser()\">SignIn</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_quiz_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/user-quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__("../../../../../src/app/user-quiz-module/models/user.ts");
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
    function UserRegistrationComponent(router, quizService, toasterService, localStorageService) {
        this.router = router;
        this.quizService = quizService;
        this.toasterService = toasterService;
        this.localStorageService = localStorageService;
        this.toasterconfig = { timeout: 0 };
        this.user = this.localStorageService.getItem('user');
        if (this.user) {
            this.router.navigateByUrl('/users/quizhome');
        }
        else {
            this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
        }
    }
    UserRegistrationComponent.prototype.signInSuccess = function (user) {
        this.user = user;
        this.localStorageService.setItem('user', { id: this.user.id, email: this.user.email, name: this.user.name });
        this.router.navigateByUrl('/users/quizhome');
    };
    UserRegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        this.quizService.registerUser(this.user).then(function (user) {
            _this.signInSuccess(user);
        });
    };
    UserRegistrationComponent.prototype.singInUser = function () {
        var _this = this;
        this.quizService.getUserByEmail(this.user).then(function (user) {
            if (user && user.id) {
                _this.signInSuccess(user);
            }
            else {
                _this.toasterService.pop("error", "Registration", "You have entered an invalid email id");
            }
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_quiz_service__["a" /* UserQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_quiz_service__["a" /* UserQuizService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _d || Object])
], UserRegistrationComponent);

var _a, _b, _c, _d;
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
    LocalStorageService.prototype.unSetItem = function (key) {
        delete this.localStorageData[this.storageCategory][key];
        localStorage.setItem(this.storageCategory, JSON.stringify(this.localStorageData[this.storageCategory]));
    };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_util_http_util__ = __webpack_require__("../../../../../src/app/shared/util/http.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__local_storage_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/local-storage.service.ts");
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
    function UserQuizService(http, router, toasterService, localStorageService) {
        this.http = http;
        this.router = router;
        this.toasterService = toasterService;
        this.localStorageService = localStorageService;
        this.quizUserUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiContextUrl + '/api/quizuser';
        this.userQuestionUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiContextUrl + '/api/userquestion';
        this.userQuizUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiContextUrl + '/api/userquiz';
        this.quizErrorHandler = __WEBPACK_IMPORTED_MODULE_8__shared_util_http_util__["a" /* HttpUtil */].handleErrorWithMessage(this.toasterService);
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
    UserQuizService.prototype.getUserQuizs = function (user) {
        return this.http.get(this.userQuizUrl + '/' + user.id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    UserQuizService.prototype.getUser = function (user) {
        return this.http.get(this.quizUserUrl + '/' + user.id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    UserQuizService.prototype.getLocalUserOrRedirect = function () {
        var _this = this;
        var localUser = this.localStorageService.getItem('user');
        if (localUser) {
            return this.getUser(localUser)
                .then(function (user) {
                if (!user) {
                    _this.localStorageService.unSetItem('user');
                    localUser = null;
                    _this.router.navigateByUrl('/users/registration');
                }
                return user;
            });
        }
        if (!localUser) {
            this.router.navigateByUrl('/users/registration');
        }
        return Promise.resolve(null);
    };
    UserQuizService.prototype.submitAndGetNextQuestion = function (user) {
        return this.http.post(this.userQuestionUrl, user)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    UserQuizService.prototype.getUserByEmail = function (user) {
        return this.http.get(this.quizUserUrl + '/getbyemail?emailId=' + user.email)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    UserQuizService.prototype.registerUser = function (user) {
        return this.http.post(this.quizUserUrl, user)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
    };
    UserQuizService.prototype.startQuiz = function (user) {
        return this.http.post(this.userQuizUrl, user)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.quizErrorHandler);
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
                user.currentUserQuiz = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.orderBy(quizs, ['level'], ['asc'])[user.currentUserQuizLevel];
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__local_storage_service__["a" /* LocalStorageService */]) === "function" && _d || Object])
], UserQuizService);

var _a, _b, _c, _d;
//# sourceMappingURL=user-quiz.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiContextUrl: ""
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