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
exports.push([module.i, ".row {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.question-row input,textarea {\r\n\twidth: 100%\r\n}\r\n\r\n.option-row input {\r\n\twidth: 100%\r\n}\r\n\r\n\r\nselect {\r\n    height: 27px;\r\n    color: black;\r\n}\r\n\r\n.question-row > .row {\r\n    border-bottom: 1px solid;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.img-deleted {\r\n    opacity: .5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div *ngIf=\"quiz\" class=\"panel panel-info\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<!-- <div>\n\t\t\t\t<h3 class=\"panel-title\">Questions</h3>\n\t\t\t</div> -->\n\t\t\t<div>\n\t\t\t\t<div class=\"col-md-3\">{{quiz.id}}</div>\n\t\t\t\t<div class=\"col-md-3\">{{quiz.description}}</div>\n\t\t\t\t<div class=\"col-md-2\">{{quiz.level}}</div>\n\t\t\t\t<div class=\"col-md-2\">{{quiz.timeoutInterval}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"panel-title\">Quizs\n\t\t\t\t<a [routerLink]=\"['/admin/quizhome']\" class=\"glyphicon glyphicon-home\"></a>\n\t\t\t</div>\n\t\t\t<h3></h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"col-md-1\">Id</div>\n\t\t\t\t\t<div class=\"col-md-3\">Desc</div>\n\t\t\t\t\t<div class=\"col-md-1\">Complexity/ Group</div>\n\t\t\t\t\t<div class=\"col-md-1\">OptionType</div>\n\t\t\t\t\t<div class=\"col-md-3\">Options</div>\n\t\t\t\t\t<div class=\"col-md-3\"><button style=\"position: fixed; bottom: 40px; right: 20px; z-index:9999\" class=\"btn btn-primary btn-sm\" (click)=\"addNewQuestion()\">Add New Question</button></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"question-row\">\n\t\t\t\t<div class=\"row\" *ngFor=\"let question of quiz.Questions\">\n\t\t\t\t\t<div class=\"col-md-1\" style=\"padding-right:0px\" title=\"{{question.id}}\">\n\t\t\t\t\t\t<label style=\"white-space: nowrap; text-overflow: ellipsis; overflow: hidden;\">{{question.id}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<textarea style=\"height:200px\" type=\"text\" [(ngModel)]=\"question.description\" autofocus></textarea>\n\t\t\t\t\t\t<input type=\"file\" (change)=\"fileChange(question, $event)\" name=\"file\" />\n\t\t\t\t\t\t<button *ngIf=\"question.imageUrl\" (click)=\"deleteImage(question)\" \n\t\t\t\t\t\t\t[disabled]=\"question?.file?.isDeleted\" >Delete Image</button> \n\t\t\t\t\t\t<img src=\"{{getImage(question.imageUrl)}}\" style=\"height:50px\" [ngClass]=\"{'img-deleted': question?.file?.isDeleted}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t<select [(ngModel)]=\"question.complexity\">\n\t\t\t\t\t\t\t<option *ngFor=\"let op of QUESTION_COMPLEXITITES\">{{op}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<div *ngIf=\"question.complexity === 'GROUP'\">\n\t\t\t\t\t\t\t<label style=\"margin-top:10px; margin-bottom:1px\">Group Name</label>\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"question.groupName\"/>\n\n\t\t\t\t\t\t\t<label style=\"margin-top:10px; margin-bottom:1px\">Index</label>\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"question.index\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t<select [(ngModel)]=\"question.optionType\">\n\t\t\t\t\t\t\t<option *ngFor=\"let op of OPTION_TYPE\">{{op}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"option-row\">\n\t\t\t\t\t\t\t<div style=\"padding-left:0px; color:#2f3133\" class=\"row\" \n\t\t\t\t\t\t\t\t*ngFor=\"let option of question.QuizOptions; let i = index\" [attr.data-index]=\"i\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"option.description\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t<select [(ngModel)]=\"option.isCorrect\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let op of OPTION_FLAG\">{{op}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\" style=\"color:#df691a\">\n\t\t\t\t\t\t\t\t\t<span style=\"cursor: pointer\" class=\"glyphicon glyphicon-minus\" \n\t\t\t\t\t\t\t\t\t\t(click)=\"removeQuizOption(question, i)\"></span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"i == question.QuizOptions.length-1 && question.optionType != 'Text'\" style=\"cursor: pointer\" class=\"glyphicon glyphicon-plus\" \n\t\t\t\t\t\t\t\t\t\t(click)=\"addQuizOption(question, i)\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"updateQuestion(question)\">Update Question</button>\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"deleteQuestion(question)\">Delete Question</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_question__ = __webpack_require__("../../../../../src/app/admin-quiz-module/models/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_quiz_service__ = __webpack_require__("../../../../../src/app/admin-quiz-module/service/quiz.service.ts");
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
    function QuestionComponent(route, quizService, toasterService) {
        this.route = route;
        this.quizService = quizService;
        this.toasterService = toasterService;
        this.idCounter = 1;
        this.questionIndexCounter = 0;
        this.OPTION_FLAG = ["true", "false"];
        this.OPTION_TYPE = ["Radio", "Checkbox", "Text"];
        this.QUESTION_COMPLEXITITES = __WEBPACK_IMPORTED_MODULE_5__service_quiz_service__["a" /* QuizService */].QUESTION_COMPLEXITITES;
        this.imageCounter = 0;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuestions(this.route.snapshot.params['quizId'])
            .then(function (quiz) {
            _this.quiz = quiz;
            if (_this.quiz.complexityComposition && _this.quiz.complexityComposition.indexOf("GROUP") >= 0) {
                _this.QUESTION_COMPLEXITITES = ["GROUP"];
            }
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
        var newQuestion = new __WEBPACK_IMPORTED_MODULE_4__models_question__["a" /* Question */]();
        newQuestion.id = TEMP_QUESTION_ID + (this.idCounter++);
        newQuestion.index = this.questionIndexCounter++;
        newQuestion.quizId = this.quiz.id;
        newQuestion.QuizOptions = [{ id: null, description: null, isCorrect: null, index: 0 }];
        if (this.QUESTION_COMPLEXITITES.length === 1) {
            newQuestion.complexity = this.QUESTION_COMPLEXITITES[0];
        }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(this.quiz.Questions)) {
            this.quiz.Questions = [];
        }
        this.quiz.Questions.push(newQuestion);
        window.scrollTo(0, (document.body.scrollHeight || document.documentElement.scrollHeight) + 100);
    };
    QuestionComponent.prototype.validateQuestion = function (question) {
        if (this.QUESTION_COMPLEXITITES.indexOf(question.complexity) < 0) {
            this.toasterService.pop("error", "Validation", "Complexity value not valid");
            return false;
        }
        return true;
    };
    QuestionComponent.prototype.updateQuestion = function (question) {
        var updateFn = null;
        if (question.id.startsWith(TEMP_QUESTION_ID)) {
            updateFn = this.quizService.createQuestion;
        }
        else {
            updateFn = this.quizService.updateQuestion;
        }
        if (!this.validateQuestion(question)) {
            return;
        }
        updateFn(question).then(function (questionResult) {
            question.file = null;
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
    QuestionComponent.prototype.fileChange = function (question, event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            //question.file = file;
            this.quizService.updloadFile(file).then(function (fileResult) {
                question.file = fileResult;
            });
        }
    };
    QuestionComponent.prototype.deleteImage = function (question) {
        if (!question.file) {
            question.file = {};
        }
        question.file.isDeleted = true;
    };
    QuestionComponent.prototype.getImage = function (imageName) {
        if (imageName) {
            return this.quizService.getContextUrl() + "/Images/" + imageName + "?" + this.imageCounter++;
        }
        else {
            return null;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__service_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_quiz_service__["a" /* QuizService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], QuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.quiz-row input {\r\n\twidth: 100%\r\n}\r\n\r\nselect {\r\n\theight: 27px;\r\n}\r\n\r\n.quiz-row > .row {\r\n   border-bottom: 1px solid;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.img-deleted {\r\n    opacity: .5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">Quiz</h3>\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Id</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Desc</div>\r\n\t\t\t\t\t<div class=\"col-md-1\">Message</div>\r\n\t\t\t\t\t<div class=\"col-md-1\">Level</div>\r\n\t\t\t\t\t<div class=\"col-md-1\">PassPoint</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">Complexity</div>\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-3\"><button class=\"btn btn-primary btn-sm\" (click)=\"addNewQuiz()\">Add New Quiz</button></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"quiz-row\">\r\n\t\t\t\t<div class=\"row\" *ngFor=\"let quiz of quizs\">\r\n\t\t\t\t\t<div class=\"col-md-2\" style=\"padding-right: 0px\">\r\n\t\t\t\t\t\t<label>{{quiz.id}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.description\"/>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<input type=\"file\" (change)=\"fileChange(quiz, $event)\" name=\"file\" />\r\n\t\t\t\t\t\t<button *ngIf=\"quiz.imageUrl\" (click)=\"deleteImage(quiz)\" \r\n\t\t\t\t\t\t\t[disabled]=\"quiz?.file?.isDeleted\" >Delete Image</button> \r\n\t\t\t\t\t\t<img src=\"{{getImage(quiz.imageUrl)}}\" style=\"height:50px\" [ngClass]=\"{'img-deleted': quiz?.file?.isDeleted}\">\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\t\t<label style=\"margin-bottom:1px\">Success</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.successMessage\"/>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<label style=\"margin-top:10px; margin-bottom:1px\">Fail</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.failedMessage\"/>\r\n\t\t\t\t\t</div>\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.level\"/>\r\n\t\t\t\t\t</div>\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"quiz.passpoint\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<div class=\"row1\">\r\n\t\t\t\t\t\t\t<div style=\"padding-left:0px; color:#2f3133\" class=\"row\" \r\n\t\t\t\t\t\t\t\t*ngFor=\"let comp of quiz.ComplexityComposition; let i = index\" [attr.data-index]=\"i\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<!-- <input type=\"text\" [(ngModel)]=\"comp.level\"/> -->\r\n\t\t\t\t\t\t\t\t\t<select [(ngModel)]=\"comp.level\" (change)=\"comp.level === 'GROUP'? comp.nos = 1: false; \">\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let compLevel of QUESTION_COMPLEXITITES\">{{compLevel}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\" style=\"padding:0px\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"comp.nos\" [disabled]=\"comp.level === 'GROUP'\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"color:#df691a\">\r\n\t\t\t\t\t\t\t\t\t<span style=\"cursor: pointer\" class=\"glyphicon glyphicon-minus\" \r\n\t\t\t\t\t\t\t\t\t\t(click)=\"removeCompositionLevel(quiz, i)\"></span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"i == quiz.ComplexityComposition.length-1\" style=\"cursor: pointer\" class=\"glyphicon glyphicon-plus\" \r\n\t\t\t\t\t\t\t\t\t\t(click)=\"quiz.ComplexityComposition.push({})\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"updateQuiz(quiz)\">Update Quiz</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"deleteQuiz(quiz)\">Delete Quiz</button>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/admin/questionshome', quiz.id]\" class=\"btn btn-default btn-sm\">Show Questions ({{quiz.questions?.length}})</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

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
        this.QUESTION_COMPLEXITITES = __WEBPACK_IMPORTED_MODULE_4__service_quiz_service__["a" /* QuizService */].QUESTION_COMPLEXITITES;
        this.imageCounter = 0;
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
            quiz.file = null;
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
    QuizComponent.prototype.fileChange = function (quiz, event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.quizService.updloadFile(file).then(function (fileResult) {
                quiz.file = fileResult;
            });
        }
    };
    QuizComponent.prototype.deleteImage = function (quiz) {
        if (!quiz.file) {
            quiz.file = {};
        }
        quiz.file.isDeleted = true;
    };
    QuizComponent.prototype.getImage = function (imageName) {
        if (imageName) {
            return this.quizService.getContextUrl() + "/Images/" + imageName + "?" + this.imageCounter++;
        }
        else {
            return null;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_base_service__ = __webpack_require__("../../../../../src/app/shared/service/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_loader_service__ = __webpack_require__("../../../../../src/app/shared/components/loader.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuizService = (function (_super) {
    __extends(QuizService, _super);
    function QuizService(http, toasterService, loaderService) {
        var _this = _super.call(this, http, toasterService, loaderService) || this;
        _this.quizUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiContextUrl + '/api/adminquiz';
        _this.questionUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiContextUrl + '/api/adminquestion';
        _this.optionUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiContextUrl + '/api/adminoption';
        _this.createQuiz = function (newQuiz) { return _this.createData(_this.quizUrl, newQuiz); };
        _this.deleteQuiz = function (delQuizId) { return _this.deleteData(_this.quizUrl, delQuizId); };
        _this.updateQuiz = function (putQuiz) { return _this.updateData(_this.quizUrl, putQuiz); };
        _this.createQuestion = function (newQuestion) {
            return _this.createData(_this.questionUrl, newQuestion);
        };
        _this.deleteQuestion = function (delQuestionId) { return _this.deleteData(_this.questionUrl, delQuestionId); };
        _this.updateQuestion = function (putQuestion) { return _this.updateData(_this.questionUrl, putQuestion); };
        return _this;
    }
    QuizService.prototype.getQuizs = function () {
        return this.getHttp(this.quizUrl);
    };
    QuizService.prototype.updloadFile = function (file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.postHttp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiContextUrl + '/api/fileupload', formData, null, function () { });
    };
    QuizService.prototype.getQuestions = function (quizId) {
        return this.getHttp(this.questionUrl + '/' + quizId);
    };
    // post("/api/quizs")
    QuizService.prototype.createData = function (url, newData) {
        return this.postHttp(url, newData);
    };
    // delete("/api/quizs/:id")
    QuizService.prototype.deleteData = function (url, delDataId) {
        return this.deleteHttp(url + '/' + delDataId);
    };
    // put("/api/quizs/:id")
    QuizService.prototype.updateData = function (url, putData) {
        return this.putHttp(url, putData);
    };
    return QuizService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_service_base_service__["a" /* BaseService */]));
QuizService.QUESTION_COMPLEXITITES = ["COMPLEX", "MEDIUM", "EASY", "GROUP"];
QuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_components_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_components_loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], QuizService);

var _a, _b, _c;
//# sourceMappingURL=quiz.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/service/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_base_service__ = __webpack_require__("../../../../../src/app/shared/service/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_loader_service__ = __webpack_require__("../../../../../src/app/shared/components/loader.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersService = (function (_super) {
    __extends(UsersService, _super);
    function UsersService(http, toasterService, loaderService) {
        var _this = _super.call(this, http, toasterService, loaderService) || this;
        _this.usersUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiContextUrl + '/api/adminuser';
        return _this;
    }
    UsersService.prototype.getUsers = function () {
        return this.getHttp(this.usersUrl);
    };
    UsersService.prototype.deleteUser = function (delDataId) {
        return this.deleteHttp(this.usersUrl + '/' + delDataId);
    };
    return UsersService;
}(__WEBPACK_IMPORTED_MODULE_4__shared_service_base_service__["a" /* BaseService */]));
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_components_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_components_loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], UsersService);

var _a, _b, _c;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"panel panel-info\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">Users</h3>\t\t\t\n\t\t</div>\n\n\t\t<div class=\"panel-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"col-md-1\">Id</div>\n\t\t\t\t\t<div class=\"col-md-2\">Name</div>\n\t\t\t\t\t<div class=\"col-md-2\">Email</div>\n\t\t\t\t\t<div class=\"col-md-3\">QuizStatus</div>\n\t\t\t\t\t<div class=\"col-md-1\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"user-row\">\n\t\t\t\t<div class=\"row\" *ngFor=\"let user of users\">\n          <div class=\"col-md-1\" style=\"padding-right:0px\" title=\"{{user.id}}\">\n\t\t\t\t\t\t<label style=\"white-space: nowrap; text-overflow: ellipsis; overflow: hidden;\">{{user.id}}</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t{{user.name}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t{{user.email}}\n\t\t\t\t\t</div>\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"row1\">\n\t\t\t\t\t\t\t<div class=\"row\" \n\t\t\t\t\t\t\t\t*ngFor=\"let quiz of user.UserQuizs; let i = index\" [attr.data-index]=\"i\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"width: 100%;margin-bottom: 10px;\">\n\t\t\t\t\t\t\t\t\t Level:{{ quiz.Quiz.level }} ({{quiz.attempt}}) - {{ quiz.Quiz.description }}\n\t\t\t\t\t\t\t\t<span style=\"margin-left:10px\" class=\"glyphicon\" [ngClass]=\"{'glyphicon-ok': quiz.status === 'COMPLETED_SUCCESS', \n\t\t\t\t\t\t\t\t\t\t\t'glyphicon-remove': quiz.status === 'COMPLETED_FAIL',\n\t\t\t\t\t\t\t\t\t\t\t'glyphicon-pencil': quiz.status === 'IN_PROGRESS'}\"></span>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\" (click)=\"deleteUser(user)\">Delete User</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-quiz-module/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_users_service__ = __webpack_require__("../../../../../src/app/admin-quiz-module/service/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) {
            _this.users = users;
        });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user.id).then(function (deletedUserId) {
            var index = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(_this.users, { id: user.id });
            _this.users.splice(index, 1);
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/admin-quiz-module/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-quiz-module/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

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

module.exports = "<div class=\"container-wrapper\">\r\n  <toaster-container></toaster-container>\r\n  <router-outlet> \r\n    <spinner-component></spinner-component>   \r\n  </router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_quiz_module_service_quiz_service__ = __webpack_require__("../../../../../src/app/admin-quiz-module/service/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_quiz_module_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/admin-quiz-module/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_quiz_module_question_question_component__ = __webpack_require__("../../../../../src/app/admin-quiz-module/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_quiz_module_users_users_component__ = __webpack_require__("../../../../../src/app/admin-quiz-module/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_quiz_module_components_user_quiz_component__ = __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_quiz_module_components_user_quiz_home_user_quiz_home_component__ = __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz-home/user-quiz-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_quiz_module_services_user_quiz_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/user-quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_quiz_module_components_user_registration_user_registration_component__ = __webpack_require__("../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_quiz_module_services_local_storage_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_components_loader_service__ = __webpack_require__("../../../../../src/app/shared/components/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_components_loader_component__ = __webpack_require__("../../../../../src/app/shared/components/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_quiz_module_service_users_service__ = __webpack_require__("../../../../../src/app/admin-quiz-module/service/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//import { fakeBackendProvider } from './shared/service/fakeBackend.service';
var appRoutes = [
    { path: 'users/quizhome', component: __WEBPACK_IMPORTED_MODULE_14__user_quiz_module_components_user_quiz_home_user_quiz_home_component__["a" /* UserQuizHomeComponent */] },
    { path: 'users/quiz', component: __WEBPACK_IMPORTED_MODULE_13__user_quiz_module_components_user_quiz_component__["a" /* UserQuizComponent */] },
    { path: 'users/registration', component: __WEBPACK_IMPORTED_MODULE_16__user_quiz_module_components_user_registration_user_registration_component__["a" /* UserRegistrationComponent */] },
    { path: 'admin/quizhome', component: __WEBPACK_IMPORTED_MODULE_10__admin_quiz_module_quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'admin/questionshome/:quizId', component: __WEBPACK_IMPORTED_MODULE_11__admin_quiz_module_question_question_component__["a" /* QuestionComponent */] },
    { path: 'admin/userhome', component: __WEBPACK_IMPORTED_MODULE_12__admin_quiz_module_users_users_component__["a" /* UsersComponent */] },
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
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__admin_quiz_module_quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_11__admin_quiz_module_question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__user_quiz_module_components_user_quiz_component__["a" /* UserQuizComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_quiz_module_components_user_registration_user_registration_component__["a" /* UserRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__user_quiz_module_components_user_quiz_home_user_quiz_home_component__["a" /* UserQuizHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__shared_components_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__admin_quiz_module_users_users_component__["a" /* UsersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            )
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__admin_quiz_module_service_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_15__user_quiz_module_services_user_quiz_service__["a" /* UserQuizService */], __WEBPACK_IMPORTED_MODULE_17__user_quiz_module_services_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_18__shared_components_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_20__admin_quiz_module_service_users_service__["a" /* UsersService */]
            //, fakeBackendProvider
            ,
            __WEBPACK_IMPORTED_MODULE_7__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BaseRequestOptions */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
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

/***/ "../../../../../src/app/shared/service/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_util_http_util__ = __webpack_require__("../../../../../src/app/shared/util/http.util.ts");




var BaseService = (function () {
    function BaseService(http, toasterService, loaderService) {
        var _this = this;
        this.http = http;
        this.toasterService = toasterService;
        this.loaderService = loaderService;
        this.quizErrorHandler = __WEBPACK_IMPORTED_MODULE_3__shared_util_http_util__["a" /* HttpUtil */].handleErrorWithMessage(this.toasterService);
        this.quizSuccessHandler = __WEBPACK_IMPORTED_MODULE_3__shared_util_http_util__["a" /* HttpUtil */].handleSuccessWithMessag(this.toasterService);
        this.dispayLoaderFn = function () {
            _this.loaderService.display(true);
        };
        this.hideLoaderFn = function () {
            _this.loaderService.display(false);
        };
    }
    BaseService.prototype.getContextUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiContextUrl;
    };
    BaseService.prototype.executHttp = function (fn, doFn, doWait) {
        var _this = this;
        if (!doWait) {
            this.dispayLoaderFn();
        }
        if (!doFn) {
            doFn = this.quizSuccessHandler;
        }
        return fn
            .map(function (response) { return response.json(); })
            .do(doFn)
            .finally(function () {
            if (!doWait) {
                _this.hideLoaderFn();
            }
        })
            .toPromise()
            .catch(this.quizErrorHandler);
        ;
    };
    BaseService.prototype.getHttp = function (url, options) {
        return this.executHttp(this.http.get(url, options), function () { });
    };
    BaseService.prototype.postHttp = function (url, body, options, doFn, doWait) {
        return this.executHttp(this.http.post(url, body, options), doFn, doWait);
    };
    BaseService.prototype.putHttp = function (url, body, options) {
        return this.executHttp(this.http.put(url, body, options));
    };
    BaseService.prototype.deleteHttp = function (url, options) {
        return this.executHttp(this.http.delete(url, options));
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

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

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz-home/user-quiz-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-section-cell.active {\r\n    cursor: pointer;\r\n}\r\n\r\n.section-0 {\r\n    background: #1C252C;\r\n    color: white;\r\n}\r\n\r\n.section-1 {\r\n    background: transparent;\r\n}\r\n\r\n.section-2 {\r\n    background: #ECEDF2;\r\n}\r\n\r\n.quiz-text {\r\n    font-size: 1.25em;\r\n     width: 189px; \r\n    display: inline-block;\r\n    text-align: left;\r\n    margin-left: 10px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.quiz-glyphicon {\r\n    width: 15px;\r\n    display: inline-block;\r\n    /* margin-left:15px; */\r\n    margin-right: 10px;\r\n    top: 3px;\r\n    font-size: 20px;\r\n}\r\n\r\n.glyphicon-ok, .glyphicon-pencil {\r\n    color: #9cc35e;\r\n}\r\n\r\n.glyphicon-remove {\r\n    color: red;\r\n}\r\n\r\n.quiz-image {\r\n    border-radius: 50%;\r\n    height: 125px;\r\n    width: 125px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.quiz-level {\r\n    position: relative;\r\n    /* top: -68px; */\r\n    left: -85px;\r\n     color: indianred; \r\n    font-size: 18px;\r\n    display: block;\r\n}\r\n\r\n.quiz-active {\r\n    /* margin-left: 26px; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz-home/user-quiz-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-wrapper\" style=\"text-align: center; background:white\">\r\n\t<div style=\"height:5%; min-height:40px\">\r\n\t\t<h2>Welcome</h2>\r\n\t</div>\r\n\r\n\t<div [@quizeHomeAnim]=\"quizs\" *ngFor=\"let quiz of quizs; let i = index\" [attr.data-index]=\"i\" style=\"height:30%; min-height: 150px\" class=\"row-section\">\r\n\t\t<div class=\"row-section-cell section-{{i}}\" [ngClass]=\"{active: quiz.isActive}\" (click)=\"startQuiz(quiz)\">\r\n\t\t\t<span>\r\n\t\t\t\t<!-- <label class=\"quiz-level\">Level:{{ quiz.level }}\r\n\t\t\t\t\t<div *ngIf=\"quiz.UserQuizs.length > 0\" class=\"glyphicon quiz-glyphicon\" [ngClass]=\"{'glyphicon-ok': quiz.UserQuizs[quiz.UserQuizs.length-1].status === 'COMPLETED_SUCCESS', \r\n\t\t\t\t\t\t\t\t\t\t'glyphicon-remove': quiz.UserQuizs[quiz.UserQuizs.length-1].status === 'COMPLETED_FAIL',\r\n\t\t\t\t\t\t\t\t\t\t'glyphicon-pencil': quiz.UserQuizs[quiz.UserQuizs.length-1].status === 'IN_PROGRESS'}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"quiz.UserQuizs.length === 0 && i > 0\" style=\"color:red\" class=\"glyphicon quiz-glyphicon glyphicon-ban-circle\"></div>\r\n\t\t\t\t\t<div *ngIf=\"quiz.UserQuizs.length === 0 && i === 0\" class=\"glyphicon quiz-glyphicon\"></div>\r\n\t\t\t\t</label> -->\r\n\t\t\t\t<img class=\"quiz-image\" src=\"{{getImage(quiz.imageUrl)}}\" />\t\t\t\t\r\n\t\t\t</span>\r\n\t\t\t\r\n\t\t\t<div class=\"quiz-text\">\t\t\t\t\r\n\t\t\t\t<div>\r\n\t\t\t\t\t{{ quiz.description }}\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<div *ngIf=\"quiz.UserQuizs.length > 0\" class=\"glyphicon quiz-glyphicon\" [ngClass]=\"{'glyphicon-ok': quiz.UserQuizs[quiz.UserQuizs.length-1].status === 'COMPLETED_SUCCESS', \r\n\t\t\t\t\t\t\t'glyphicon-remove': quiz.UserQuizs[quiz.UserQuizs.length-1].status === 'COMPLETED_FAIL',\r\n\t\t\t\t\t\t\t'glyphicon-pencil': quiz.UserQuizs[quiz.UserQuizs.length-1].status === 'IN_PROGRESS'}\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"quiz.UserQuizs.length === 0 && i > 0\" style=\"color:red\" class=\"glyphicon quiz-glyphicon glyphicon-ban-circle\"></div>\r\n\t\t\t\t\t\t<div *ngIf=\"quiz.UserQuizs.length === 0 && i === 0\" class=\"glyphicon quiz-glyphicon\"></div>\r\n\t\t\t\t\t</span>\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"quiz.isActive\" class=\"quiz-active\">\r\n\t\t\t\t\t<div style=\"color:#9cc35e; font-size: 40px;\" class=\"glyphicon quiz-glyphicon glyphicon-play\"></div>\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\r\n\t\t</div>\t\t\t\t\t\t\r\n\t</div>\r\n</div>"

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
    // private imageSrc = ["Business.jpg", 
    // 					"Logic.jpg", 
    // 					"Analytical.jpg"]
    function UserQuizHomeComponent(elementRef, route, router, quizService, toasterService) {
        this.elementRef = elementRef;
        this.route = route;
        this.router = router;
        this.quizService = quizService;
        this.toasterService = toasterService;
    }
    UserQuizHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getLocalUserOrRedirect()
            .then(function (user) {
            if (user) {
                _this.user = user;
                _this.quizService.getUserQuizs(user)
                    .then(function (quizs) {
                    _this.quizs = quizs.map(function (q) {
                        __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.remove(q.UserQuizs, function (u) { return u === null; });
                        q.UserQuizs = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.sortBy(q.UserQuizs, 'attempt');
                        return q;
                    });
                    _this.setQuizActive(_this.quizs, _this.user);
                });
            }
        });
    };
    UserQuizHomeComponent.prototype.getImage = function (imageName) {
        return this.quizService.getContextUrl() + "/Images/" + imageName;
    };
    UserQuizHomeComponent.prototype.setQuizActive = function (quizs, user) {
        var currentQuiz = { id: null, status: null, Quiz: { id: null } };
        if (user && user.CurrentUserQuiz) {
            currentQuiz = user.CurrentUserQuiz;
        }
        __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.each(quizs, function (quiz) {
            if (quiz.id === currentQuiz.Quiz.id && (currentQuiz.status === "IN_PROGRESS" || currentQuiz.status === "COMPLETED_FAIL")) {
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
        styles: [__webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz-home/user-quiz-home.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('quizeHomeAnim', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ transform: 'translateX(-100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('1s ease')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_quiz_service__["a" /* UserQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_quiz_service__["a" /* UserQuizService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _e || Object])
], UserQuizHomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-quiz-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#resultDiv {\r\n\tdisplay: none;\r\n}\r\n\r\n.slides {\r\n\tlist-style: none;\r\n\tpadding-left: 20px;\r\n}\r\n\r\n/* animation sets */\r\n\r\n/* move from / to  */\r\n\r\n.moveToLeft {\r\n\t-webkit-animation: moveToLeft .6s ease both;\r\n\tanimation: moveToLeft .6s ease both;\r\n}\r\n\r\n.moveFromLeft {\r\n\t-webkit-animation: moveFromLeft .6s ease both;\r\n\tanimation: moveFromLeft .6s ease both;\r\n}\r\n\r\n.moveToRight {\r\n\t-webkit-animation: moveToRight .6s ease both;\r\n\tanimation: moveToRight .6s ease both;\r\n}\r\n\r\n.moveFromRight {\r\n\t-webkit-animation: moveFromRight .6s ease both;\r\n\tanimation: moveFromRight .6s ease both;\r\n}\r\n\r\n.moveToTop {\r\n\t-webkit-animation: moveToTop .6s ease both;\r\n\tanimation: moveToTop .6s ease both;\r\n}\r\n\r\n.moveFromTop {\r\n\t-webkit-animation: moveFromTop .6s ease both;\r\n\tanimation: moveFromTop .6s ease both;\r\n}\r\n\r\n.moveToBottom {\r\n\t-webkit-animation: moveToBottom .6s ease both;\r\n\tanimation: moveToBottom .6s ease both;\r\n}\r\n\r\n.moveFromBottom {\r\n\t-webkit-animation: moveFromBottom .6s ease both;\r\n\tanimation: moveFromBottom .6s ease both;\r\n}\r\n\r\n/* fade */\r\n\r\n.fade {\r\n\t-webkit-animation: fade .7s ease both;\r\n\tanimation: fade .7s ease both;\r\n}\r\n\r\n/* move from / to and fade */\r\n\r\n.moveToLeftFade {\r\n\t-webkit-animation: moveToLeftFade .7s ease both;\r\n\tanimation: moveToLeftFade .7s ease both;\r\n}\r\n\r\n.moveFromLeftFade {\r\n\t-webkit-animation: moveFromLeftFade .7s ease both;\r\n\tanimation: moveFromLeftFade .7s ease both;\r\n}\r\n\r\n.moveToRightFade {\r\n\t-webkit-animation: moveToRightFade .7s ease both;\r\n\tanimation: moveToRightFade .7s ease both;\r\n}\r\n\r\n.moveFromRightFade {\r\n\t-webkit-animation: moveFromRightFade .7s ease both;\r\n\tanimation: moveFromRightFade .7s ease both;\r\n}\r\n\r\n.moveToTopFade {\r\n\t-webkit-animation: moveToTopFade .7s ease both;\r\n\tanimation: moveToTopFade .7s ease both;\r\n}\r\n\r\n.moveFromTopFade {\r\n\t-webkit-animation: moveFromTopFade .7s ease both;\r\n\tanimation: moveFromTopFade .7s ease both;\r\n}\r\n\r\n.moveToBottomFade {\r\n\t-webkit-animation: moveToBottomFade .7s ease both;\r\n\tanimation: moveToBottomFade .7s ease both;\r\n}\r\n\r\n.moveFromBottomFade {\r\n\t-webkit-animation: moveFromBottomFade .7s ease both;\r\n\tanimation: moveFromBottomFade .7s ease both;\r\n}\r\n\r\n/* move to with different easing */\r\n\r\n.moveToLeftEasing {\r\n\t-webkit-animation: moveToLeft .7s ease-in-out both;\r\n\tanimation: moveToLeft .7s ease-in-out both;\r\n}\r\n.moveToRightEasing {\r\n\t-webkit-animation: moveToRight .7s ease-in-out both;\r\n\tanimation: moveToRight .7s ease-in-out both;\r\n}\r\n.moveToTopEasing {\r\n\t-webkit-animation: moveToTop .7s ease-in-out both;\r\n\tanimation: moveToTop .7s ease-in-out both;\r\n}\r\n.moveToBottomEasing {\r\n\t-webkit-animation: moveToBottom .7s ease-in-out both;\r\n\tanimation: moveToBottom .7s ease-in-out both;\r\n}\r\n\r\n/********************************* keyframes **************************************/\r\n\r\n/* move from / to  */\r\n\r\n@-webkit-keyframes moveToLeft {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateX(-100%); }\r\n}\r\n@keyframes moveToLeft {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateX(-100%); transform: translateX(-100%); }\r\n}\r\n\r\n@-webkit-keyframes moveFromLeft {\r\n\tfrom { -webkit-transform: translateX(-100%); }\r\n}\r\n@keyframes moveFromLeft {\r\n\tfrom { -webkit-transform: translateX(-100%); transform: translateX(-100%); }\r\n}\r\n\r\n@-webkit-keyframes moveToRight { \r\n\tfrom { }\r\n\tto { -webkit-transform: translateX(100%); }\r\n}\r\n@keyframes moveToRight { \r\n\tfrom { }\r\n\tto { -webkit-transform: translateX(100%); transform: translateX(100%); }\r\n}\r\n\r\n@-webkit-keyframes moveFromRight {\r\n\tfrom { -webkit-transform: translateX(100%); }\r\n}\r\n@keyframes moveFromRight {\r\n\tfrom { -webkit-transform: translateX(100%); transform: translateX(100%); }\r\n}\r\n\r\n@-webkit-keyframes moveToTop {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateY(-100%); }\r\n}\r\n@keyframes moveToTop {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateY(-100%); transform: translateY(-100%); }\r\n}\r\n\r\n@-webkit-keyframes moveFromTop {\r\n\tfrom { -webkit-transform: translateY(-100%); }\r\n}\r\n@keyframes moveFromTop {\r\n\tfrom { -webkit-transform: translateY(-100%); transform: translateY(-100%); }\r\n}\r\n\r\n@-webkit-keyframes moveToBottom {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateY(100%); }\r\n}\r\n@keyframes moveToBottom {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateY(100%); transform: translateY(100%); }\r\n}\r\n\r\n@-webkit-keyframes moveFromBottom {\r\n\tfrom { -webkit-transform: translateY(100%); }\r\n}\r\n@keyframes moveFromBottom {\r\n\tfrom { -webkit-transform: translateY(100%); transform: translateY(100%); }\r\n}\r\n\r\n/* fade */\r\n\r\n@-webkit-keyframes fade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; }\r\n}\r\n@keyframes fade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; }\r\n}\r\n\r\n/* move from / to and fade */\r\n\r\n@-webkit-keyframes moveToLeftFade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; -webkit-transform: translateX(-100%); }\r\n}\r\n@keyframes moveToLeftFade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; -webkit-transform: translateX(-100%); transform: translateX(-100%); }\r\n}\r\n\r\n@-webkit-keyframes moveFromLeftFade {\r\n\tfrom { opacity: 0.3; -webkit-transform: translateX(-100%); }\r\n}\r\n@keyframes moveFromLeftFade {\r\n\tfrom { opacity: 0.3; -webkit-transform: translateX(-100%); transform: translateX(-100%); }\r\n}\r\n\r\n@-webkit-keyframes moveToRightFade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; -webkit-transform: translateX(100%); }\r\n}\r\n@keyframes moveToRightFade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; -webkit-transform: translateX(100%); transform: translateX(100%); }\r\n}\r\n\r\n@-webkit-keyframes moveFromRightFade {\r\n\tfrom { opacity: 0.3; -webkit-transform: translateX(100%); }\r\n}\r\n@keyframes moveFromRightFade {\r\n\tfrom { opacity: 0.3; -webkit-transform: translateX(100%); transform: translateX(100%); }\r\n}\r\n\r\n@-webkit-keyframes moveToTopFade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; -webkit-transform: translateY(-100%); }\r\n}\r\n@keyframes moveToTopFade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; -webkit-transform: translateY(-100%); transform: translateY(-100%); }\r\n}\r\n\r\n@-webkit-keyframes moveFromTopFade {\r\n\tfrom { opacity: 0.3; -webkit-transform: translateY(-100%); }\r\n}\r\n@keyframes moveFromTopFade {\r\n\tfrom { opacity: 0.3; -webkit-transform: translateY(-100%); transform: translateY(-100%); }\r\n}\r\n\r\n@-webkit-keyframes moveToBottomFade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; -webkit-transform: translateY(100%); }\r\n}\r\n@keyframes moveToBottomFade {\r\n\tfrom { }\r\n\tto { opacity: 0.3; -webkit-transform: translateY(100%); transform: translateY(100%); }\r\n}\r\n\r\n@-webkit-keyframes moveFromBottomFade {\r\n\tfrom { opacity: 0.3; -webkit-transform: translateY(100%); }\r\n}\r\n@keyframes moveFromBottomFade {\r\n\tfrom { opacity: 0.3; -webkit-transform: translateY(100%); transform: translateY(100%); }\r\n}\r\n\r\n/* scale and fade */\r\n\r\n.scaleDown {\r\n\t-webkit-animation: scaleDown .7s ease both;\r\n\tanimation: scaleDown .7s ease both;\r\n}\r\n\r\n.scaleUp {\r\n\t-webkit-animation: scaleUp .7s ease both;\r\n\tanimation: scaleUp .7s ease both;\r\n}\r\n\r\n.scaleUpDown {\r\n\t-webkit-animation: scaleUpDown .5s ease both;\r\n\tanimation: scaleUpDown .5s ease both;\r\n}\r\n\r\n.scaleDownUp {\r\n\t-webkit-animation: scaleDownUp .5s ease both;\r\n\tanimation: scaleDownUp .5s ease both;\r\n}\r\n\r\n.scaleDownCenter {\r\n\t-webkit-animation: scaleDownCenter .4s ease-in both;\r\n\tanimation: scaleDownCenter .4s ease-in both;\r\n}\r\n\r\n.scaleUpCenter {\r\n\t-webkit-animation: scaleUpCenter .4s ease-out both;\r\n\tanimation: scaleUpCenter .4s ease-out both;\r\n}\r\n\r\n/********************************* keyframes **************************************/\r\n\r\n/* scale and fade */\r\n\r\n@-webkit-keyframes scaleDown {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: scale(.8); }\r\n}\r\n@keyframes scaleDown {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: scale(.8); transform: scale(.8); }\r\n}\r\n\r\n@-webkit-keyframes scaleUp {\r\n\tfrom { opacity: 0; -webkit-transform: scale(.8); }\r\n}\r\n@keyframes scaleUp {\r\n\tfrom { opacity: 0; -webkit-transform: scale(.8); transform: scale(.8); }\r\n}\r\n\r\n@-webkit-keyframes scaleUpDown {\r\n\tfrom { opacity: 0; -webkit-transform: scale(1.2); }\r\n}\r\n@keyframes scaleUpDown {\r\n\tfrom { opacity: 0; -webkit-transform: scale(1.2); transform: scale(1.2); }\r\n}\r\n\r\n@-webkit-keyframes scaleDownUp {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: scale(1.2); }\r\n}\r\n@keyframes scaleDownUp {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: scale(1.2); transform: scale(1.2); }\r\n}\r\n\r\n@-webkit-keyframes scaleDownCenter {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: scale(.7); }\r\n}\r\n@keyframes scaleDownCenter {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: scale(.7); transform: scale(.7); }\r\n}\r\n\r\n@-webkit-keyframes scaleUpCenter {\r\n\tfrom { opacity: 0; -webkit-transform: scale(.7); }\r\n}\r\n@keyframes scaleUpCenter {\r\n\tfrom { opacity: 0; -webkit-transform: scale(.7); transform: scale(.7); }\r\n}\r\n\r\n/* rotate sides first and scale */\r\n\r\n.rotateRightSideFirst {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateRightSideFirst .8s both ease-in;\r\n\tanimation: rotateRightSideFirst .8s both ease-in;\r\n}\r\n.rotateLeftSideFirst {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateLeftSideFirst .8s both ease-in;\r\n\tanimation: rotateLeftSideFirst .8s both ease-in;\r\n}\r\n.rotateTopSideFirst {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateTopSideFirst .8s both ease-in;\r\n\tanimation: rotateTopSideFirst .8s both ease-in;\r\n}\r\n.rotateBottomSideFirst {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateBottomSideFirst .8s both ease-in;\r\n\tanimation: rotateBottomSideFirst .8s both ease-in;\r\n}\r\n\r\n/* flip */\r\n\r\n.flipOutRight {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: flipOutRight 0.5s both ease-in;\r\n\tanimation: flipOutRight 0.5s both ease-in;\r\n}\r\n.flipInLeft {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\tbackground: black;\r\n\t-webkit-animation: flipInLeft 0.5s both ease-out;\r\n\tanimation: flipInLeft 0.5s both ease-out;\r\n}\r\n.flipOutLeft {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: flipOutLeft 0.5s both ease-in;\r\n\tanimation: flipOutLeft 0.5s both ease-in;\r\n}\r\n.flipInRight {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: flipInRight 0.5s both ease-out;\r\n\tanimation: flipInRight 0.5s both ease-out;\r\n}\r\n.flipOutTop {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: flipOutTop 1.5s both ease-in;\r\n\tanimation: flipOutTop 1.5s both ease-in;\r\n}\r\n.flipInBottom {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: flipInBottom 1.5s both ease-out;\r\n\tanimation: flipInBottom 1.5s both ease-out;\r\n}\r\n.flipOutBottom {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: flipOutBottom .5s both ease-in;\r\n\tanimation: flipOutBottom .5s both ease-in;\r\n}\r\n.flipInTop {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: flipInTop .5s both ease-out;\r\n\tanimation: flipInTop .5s both ease-out;\r\n}\r\n\r\n/* rotate fall */\r\n\r\n.rotateFall {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n\t-webkit-animation: rotateFall 1s both ease-in;\r\n\tanimation: rotateFall 1s both ease-in;\r\n}\r\n\r\n/* rotate newspaper */\r\n.rotateOutNewspaper {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: rotateOutNewspaper .5s both ease-in;\r\n\tanimation: rotateOutNewspaper .5s both ease-in;\r\n}\r\n.rotateInNewspaper {\r\n\t-webkit-transform-origin: 50% 50%;\r\n\ttransform-origin: 50% 50%;\r\n\t-webkit-animation: rotateInNewspaper .5s both ease-out;\r\n\tanimation: rotateInNewspaper .5s both ease-out;\r\n}\r\n\r\n/* push */\r\n.rotatePushLeft {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotatePushLeft .8s both ease;\r\n\tanimation: rotatePushLeft .8s both ease;\r\n}\r\n.rotatePushRight {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotatePushRight .8s both ease;\r\n\tanimation: rotatePushRight .8s both ease;\r\n}\r\n.rotatePushTop {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotatePushTop .8s both ease;\r\n\tanimation: rotatePushTop .8s both ease;\r\n}\r\n.rotatePushBottom {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotatePushBottom .8s both ease;\r\n\tanimation: rotatePushBottom .8s both ease;\r\n}\r\n\r\n/* pull */\r\n.rotatePullRight {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotatePullRight .5s both ease;\r\n\tanimation: rotatePullRight .5s both ease;\r\n}\r\n.rotatePullLeft {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotatePullLeft .5s both ease;\r\n\tanimation: rotatePullLeft .5s both ease;\r\n}\r\n.rotatePullTop {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotatePullTop .5s both ease;\r\n\tanimation: rotatePullTop .5s both ease;\r\n}\r\n.rotatePullBottom {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotatePullBottom .5s both ease;\r\n\tanimation: rotatePullBottom .5s both ease;\r\n}\r\n\r\n/* fold */\r\n.rotateFoldRight {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateFoldRight .7s both ease;\r\n\tanimation: rotateFoldRight .7s both ease;\r\n}\r\n.rotateFoldLeft {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateFoldLeft .7s both ease;\r\n\tanimation: rotateFoldLeft .7s both ease;\r\n}\r\n.rotateFoldTop {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateFoldTop .7s both ease;\r\n\tanimation: rotateFoldTop .7s both ease;\r\n}\r\n.rotateFoldBottom {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateFoldBottom .7s both ease;\r\n\tanimation: rotateFoldBottom .7s both ease;\r\n}\r\n\r\n/* unfold */\r\n.rotateUnfoldLeft {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateUnfoldLeft .7s both ease;\r\n\tanimation: rotateUnfoldLeft .7s both ease;\r\n}\r\n.rotateUnfoldRight {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateUnfoldRight .7s both ease;\r\n\tanimation: rotateUnfoldRight .7s both ease;\r\n}\r\n.rotateUnfoldTop {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateUnfoldTop .7s both ease;\r\n\tanimation: rotateUnfoldTop .7s both ease;\r\n}\r\n.rotateUnfoldBottom {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateUnfoldBottom .7s both ease;\r\n\tanimation: rotateUnfoldBottom .7s both ease;\r\n}\r\n\r\n/* room walls */\r\n.rotateRoomLeftOut {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateRoomLeftOut .8s both ease;\r\n\tanimation: rotateRoomLeftOut .8s both ease;\r\n}\r\n.rotateRoomLeftIn {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateRoomLeftIn .8s both ease;\r\n\tanimation: rotateRoomLeftIn .8s both ease;\r\n}\r\n.rotateRoomRightOut {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateRoomRightOut .8s both ease;\r\n\tanimation: rotateRoomRightOut .8s both ease;\r\n}\r\n.rotateRoomRightIn {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateRoomRightIn .8s both ease;\r\n\tanimation: rotateRoomRightIn .8s both ease;\r\n}\r\n.rotateRoomTopOut {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateRoomTopOut .8s both ease;\r\n\tanimation: rotateRoomTopOut .8s both ease;\r\n}\r\n.rotateRoomTopIn {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateRoomTopIn .8s both ease;\r\n\tanimation: rotateRoomTopIn .8s both ease;\r\n}\r\n.rotateRoomBottomOut {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateRoomBottomOut .8s both ease;\r\n\tanimation: rotateRoomBottomOut .8s both ease;\r\n}\r\n.rotateRoomBottomIn {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateRoomBottomIn .8s both ease;\r\n\tanimation: rotateRoomBottomIn .8s both ease;\r\n}\r\n\r\n/* cube */\r\n.rotateCubeLeftOut {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateCubeLeftOut .6s both ease-in;\r\n\tanimation: rotateCubeLeftOut .6s both ease-in;\r\n}\r\n.rotateCubeLeftIn {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateCubeLeftIn .6s both ease-in;\r\n\tanimation: rotateCubeLeftIn .6s both ease-in;\r\n}\r\n.rotateCubeRightOut {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateCubeRightOut .6s both ease-in;\r\n\tanimation: rotateCubeRightOut .6s both ease-in;\r\n}\r\n.rotateCubeRightIn {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateCubeRightIn .6s both ease-in;\r\n\tanimation: rotateCubeRightIn .6s both ease-in;\r\n}\r\n.rotateCubeTopOut {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateCubeTopOut .6s both ease-in;\r\n\tanimation: rotateCubeTopOut .6s both ease-in;\r\n}\r\n.rotateCubeTopIn {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateCubeTopIn .6s both ease-in;\r\n\tanimation: rotateCubeTopIn .6s both ease-in;\r\n}\r\n.rotateCubeBottomOut {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateCubeBottomOut .6s both ease-in;\r\n\tanimation: rotateCubeBottomOut .6s both ease-in;\r\n}\r\n.rotateCubeBottomIn {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateCubeBottomIn .6s both ease-in;\r\n\tanimation: rotateCubeBottomIn .6s both ease-in;\r\n}\r\n\r\n/* carousel */\r\n.rotateCarouselLeftOut {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateCarouselLeftOut .8s both ease;\r\n\tanimation: rotateCarouselLeftOut .8s both ease;\r\n}\r\n.rotateCarouselLeftIn {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateCarouselLeftIn .8s both ease;\r\n\tanimation: rotateCarouselLeftIn .8s both ease;\r\n}\r\n.rotateCarouselRightOut {\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n\t-webkit-animation: rotateCarouselRightOut .8s both ease;\r\n\tanimation: rotateCarouselRightOut .8s both ease;\r\n}\r\n.rotateCarouselRightIn {\r\n\t-webkit-transform-origin: 100% 50%;\r\n\ttransform-origin: 100% 50%;\r\n\t-webkit-animation: rotateCarouselRightIn .8s both ease;\r\n\tanimation: rotateCarouselRightIn .8s both ease;\r\n}\r\n.rotateCarouselTopOut {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateCarouselTopOut .8s both ease;\r\n\tanimation: rotateCarouselTopOut .8s both ease;\r\n}\r\n.rotateCarouselTopIn {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateCarouselTopIn .8s both ease;\r\n\tanimation: rotateCarouselTopIn .8s both ease;\r\n}\r\n.rotateCarouselBottomOut {\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n\t-webkit-animation: rotateCarouselBottomOut .8s both ease;\r\n\tanimation: rotateCarouselBottomOut .8s both ease;\r\n}\r\n.rotateCarouselBottomIn {\r\n\t-webkit-transform-origin: 50% 100%;\r\n\ttransform-origin: 50% 100%;\r\n\t-webkit-animation: rotateCarouselBottomIn .8s both ease;\r\n\tanimation: rotateCarouselBottomIn .8s both ease;\r\n}\r\n\r\n/* sides */\r\n.rotateSidesOut {\r\n\t-webkit-transform-origin: -50% 50%;\r\n\ttransform-origin: -50% 50%;\r\n\t-webkit-animation: rotateSidesOut .5s both ease-in;\r\n\tanimation: rotateSidesOut .5s both ease-in;\r\n}\r\n.rotateSidesIn {\r\n\t-webkit-transform-origin: 150% 50%;\r\n\ttransform-origin: 150% 50%;\r\n\t-webkit-animation: rotateSidesIn .5s both ease-out;\r\n\tanimation: rotateSidesIn .5s both ease-out;\r\n}\r\n\r\n/* slide */\r\n.rotateSlideOut {\r\n\t-webkit-animation: rotateSlideOut 1s both ease;\r\n\tanimation: rotateSlideOut 1s both ease;\r\n}\r\n.rotateSlideIn {\r\n\t-webkit-animation: rotateSlideIn 1s both ease;\r\n\tanimation: rotateSlideIn 1s both ease;\r\n}\r\n\r\n/********************************* keyframes **************************************/\r\n\r\n/* rotate sides first and scale */\r\n\r\n@-webkit-keyframes rotateRightSideFirst {\r\n\t0% { }\r\n\t40% { -webkit-transform: rotateY(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }\r\n}\r\n@keyframes rotateRightSideFirst {\r\n\t0% { }\r\n\t40% { -webkit-transform: rotateY(15deg); transform: rotateY(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }\r\n}\r\n\r\n@-webkit-keyframes rotateLeftSideFirst {\r\n\t0% { }\r\n\t40% { -webkit-transform: rotateY(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }\r\n}\r\n@keyframes rotateLeftSideFirst {\r\n\t0% { }\r\n\t40% { -webkit-transform: rotateY(-15deg); transform: rotateY(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }\r\n}\r\n\r\n@-webkit-keyframes rotateTopSideFirst {\r\n\t0% { }\r\n\t40% { -webkit-transform: rotateX(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }\r\n}\r\n@keyframes rotateTopSideFirst {\r\n\t0% { }\r\n\t40% { -webkit-transform: rotateX(15deg); transform: rotateX(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }\r\n}\r\n\r\n@-webkit-keyframes rotateBottomSideFirst {\r\n\t0% { }\r\n\t40% { -webkit-transform: rotateX(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }\r\n}\r\n@keyframes rotateBottomSideFirst {\r\n\t0% { }\r\n\t40% { -webkit-transform: rotateX(-15deg); transform: rotateX(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }\r\n}\r\n\r\n/* flip */\r\n\r\n@-webkit-keyframes flipOutRight {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }\r\n}\r\n@keyframes flipOutRight {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-1000px) rotateY(90deg); transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }\r\n}\r\n\r\n@-webkit-keyframes flipInLeft {\r\n\tfrom { -webkit-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }\r\n}\r\n@keyframes flipInLeft {\r\n\tfrom { -webkit-transform: translateZ(-1000px) rotateY(-90deg); transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }\r\n}\r\n\r\n@-webkit-keyframes flipOutLeft {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }\r\n}\r\n@keyframes flipOutLeft {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-1000px) rotateY(-90deg); transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }\r\n}\r\n\r\n@-webkit-keyframes flipInRight {\r\n\tfrom { -webkit-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }\r\n}\r\n@keyframes flipInRight {\r\n\tfrom { -webkit-transform: translateZ(-1000px) rotateY(90deg); transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }\r\n}\r\n\r\n@-webkit-keyframes flipOutTop {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }\r\n}\r\n@keyframes flipOutTop {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-1000px) rotateX(90deg); transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }\r\n}\r\n\r\n@-webkit-keyframes flipInBottom {\r\n\tfrom { -webkit-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }\r\n}\r\n@keyframes flipInBottom {\r\n\tfrom { -webkit-transform: translateZ(-1000px) rotateX(-90deg); transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }\r\n}\r\n\r\n@-webkit-keyframes flipOutBottom {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }\r\n}\r\n@keyframes flipOutBottom {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-1000px) rotateX(-90deg); transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }\r\n}\r\n\r\n@-webkit-keyframes flipInTop {\r\n\tfrom { -webkit-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }\r\n}\r\n@keyframes flipInTop {\r\n\tfrom { -webkit-transform: translateZ(-1000px) rotateX(90deg); transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }\r\n}\r\n\r\n/* fall */\r\n\r\n@-webkit-keyframes rotateFall {\r\n\t0% { -webkit-transform: rotateZ(0deg); }\r\n\t20% { -webkit-transform: rotateZ(10deg); -webkit-animation-timing-function: ease-out; }\r\n\t40% { -webkit-transform: rotateZ(17deg); }\r\n\t60% { -webkit-transform: rotateZ(16deg); }\r\n\t100% { -webkit-transform: translateY(100%) rotateZ(17deg); }\r\n}\r\n@keyframes rotateFall {\r\n\t0% { -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg); }\r\n\t20% { -webkit-transform: rotateZ(10deg); transform: rotateZ(10deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n\t40% { -webkit-transform: rotateZ(17deg); transform: rotateZ(17deg); }\r\n\t60% { -webkit-transform: rotateZ(16deg); transform: rotateZ(16deg); }\r\n\t100% { -webkit-transform: translateY(100%) rotateZ(17deg); transform: translateY(100%) rotateZ(17deg); }\r\n}\r\n\r\n/* newspaper */\r\n\r\n@-webkit-keyframes rotateOutNewspaper {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }\r\n}\r\n@keyframes rotateOutNewspaper {\r\n\tfrom { }\r\n\tto { -webkit-transform: translateZ(-3000px) rotateZ(360deg); transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }\r\n}\r\n\r\n@-webkit-keyframes rotateInNewspaper {\r\n\tfrom { -webkit-transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }\r\n}\r\n@keyframes rotateInNewspaper {\r\n\tfrom { -webkit-transform: translateZ(-3000px) rotateZ(-360deg); transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }\r\n}\r\n\r\n/* push */\r\n\r\n@-webkit-keyframes rotatePushLeft {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: rotateY(90deg); }\r\n}\r\n@keyframes rotatePushLeft {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: rotateY(90deg); transform: rotateY(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotatePushRight {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: rotateY(-90deg); }\r\n}\r\n@keyframes rotatePushRight {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: rotateY(-90deg); transform: rotateY(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotatePushTop {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: rotateX(-90deg); }\r\n}\r\n@keyframes rotatePushTop {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotatePushBottom {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: rotateX(90deg); }\r\n}\r\n@keyframes rotatePushBottom {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: rotateX(90deg); transform: rotateX(90deg); }\r\n}\r\n\r\n/* pull */\r\n\r\n@-webkit-keyframes rotatePullRight {\r\n\tfrom { opacity: 0; -webkit-transform: rotateY(-90deg); }\r\n}\r\n@keyframes rotatePullRight {\r\n\tfrom { opacity: 0; -webkit-transform: rotateY(-90deg); transform: rotateY(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotatePullLeft {\r\n\tfrom { opacity: 0; -webkit-transform: rotateY(90deg); }\r\n}\r\n@keyframes rotatePullLeft {\r\n\tfrom { opacity: 0; -webkit-transform: rotateY(90deg); transform: rotateY(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotatePullTop {\r\n\tfrom { opacity: 0; -webkit-transform: rotateX(-90deg); }\r\n}\r\n@keyframes rotatePullTop {\r\n\tfrom { opacity: 0; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotatePullBottom {\r\n\tfrom { opacity: 0; -webkit-transform: rotateX(90deg); }\r\n}\r\n@keyframes rotatePullBottom {\r\n\tfrom { opacity: 0; -webkit-transform: rotateX(90deg); transform: rotateX(90deg); }\r\n}\r\n\r\n/* fold */\r\n\r\n@-webkit-keyframes rotateFoldRight {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }\r\n}\r\n@keyframes rotateFoldRight {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateFoldLeft {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }\r\n}\r\n@keyframes rotateFoldLeft {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateFoldTop {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); }\r\n}\r\n@keyframes rotateFoldTop {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateFoldBottom {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); }\r\n}\r\n@keyframes rotateFoldBottom {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }\r\n}\r\n\r\n/* unfold */\r\n\r\n@-webkit-keyframes rotateUnfoldLeft {\r\n\tfrom { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }\r\n}\r\n@keyframes rotateUnfoldLeft {\r\n\tfrom { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateUnfoldRight {\r\n\tfrom { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }\r\n}\r\n@keyframes rotateUnfoldRight {\r\n\tfrom { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateUnfoldTop {\r\n\tfrom { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); }\r\n}\r\n@keyframes rotateUnfoldTop {\r\n\tfrom { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateUnfoldBottom {\r\n\tfrom { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); }\r\n}\r\n@keyframes rotateUnfoldBottom {\r\n\tfrom { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }\r\n}\r\n\r\n/* room walls */\r\n\r\n@-webkit-keyframes rotateRoomLeftOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); }\r\n}\r\n@keyframes rotateRoomLeftOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); transform: translateX(-100%) rotateY(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateRoomLeftIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); }\r\n}\r\n@keyframes rotateRoomLeftIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); transform: translateX(100%) rotateY(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateRoomRightOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); }\r\n}\r\n@keyframes rotateRoomRightOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); transform: translateX(100%) rotateY(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateRoomRightIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); }\r\n}\r\n@keyframes rotateRoomRightIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); transform: translateX(-100%) rotateY(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateRoomTopOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); }\r\n}\r\n@keyframes rotateRoomTopOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); transform: translateY(-100%) rotateX(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateRoomTopIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); }\r\n}\r\n@keyframes rotateRoomTopIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); transform: translateY(100%) rotateX(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateRoomBottomOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); }\r\n}\r\n@keyframes rotateRoomBottomOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); transform: translateY(100%) rotateX(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateRoomBottomIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); }\r\n}\r\n@keyframes rotateRoomBottomIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); transform: translateY(-100%) rotateX(-90deg); }\r\n}\r\n\r\n/* cube */\r\n\r\n@-webkit-keyframes rotateCubeLeftOut {\r\n\t0% { }\r\n\t50% { -webkit-animation-timing-function: ease-out;  -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }\r\n\t100% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); }\r\n}\r\n@keyframes rotateCubeLeftOut {\r\n\t0% { }\r\n\t50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out;  -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);  transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }\r\n\t100% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCubeLeftIn {\r\n\t0% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); }\r\n\t50% { -webkit-animation-timing-function: ease-out;  -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }\r\n}\r\n@keyframes rotateCubeLeftIn {\r\n\t0% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }\r\n\t50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out;  -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg);  transform: translateX(50%) translateZ(-200px) rotateY(45deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCubeRightOut {\r\n\t0% { }\r\n\t50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }\r\n\t100% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); }\r\n}\r\n@keyframes rotateCubeRightOut {\r\n\t0% { }\r\n\t50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); transform: translateX(50%) translateZ(-200px) rotateY(45deg); }\r\n\t100% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCubeRightIn {\r\n\t0% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); }\r\n\t50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }\r\n}\r\n@keyframes rotateCubeRightIn {\r\n\t0% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }\r\n\t50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCubeTopOut {\r\n\t0% { }\r\n\t50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }\r\n\t100% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); }\r\n}\r\n@keyframes rotateCubeTopOut {\r\n\t0% {}\r\n\t50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }\r\n\t100% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCubeTopIn {\r\n\t0% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); }\r\n\t50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }\r\n}\r\n@keyframes rotateCubeTopIn {\r\n\t0% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }\r\n\t50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCubeBottomOut {\r\n\t0% { }\r\n\t50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }\r\n\t100% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); }\r\n}\r\n@keyframes rotateCubeBottomOut {\r\n\t0% { }\r\n\t50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }\r\n\t100% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCubeBottomIn {\r\n\t0% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); }\r\n\t50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }\r\n}\r\n@keyframes rotateCubeBottomIn {\r\n\t0% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }\r\n\t50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }\r\n}\r\n\r\n/* carousel */\r\n\r\n@-webkit-keyframes rotateCarouselLeftOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateX(-150%) scale(.4) rotateY(-65deg); }\r\n}\r\n@keyframes rotateCarouselLeftOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateX(-150%) scale(.4) rotateY(-65deg); transform: translateX(-150%) scale(.4) rotateY(-65deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCarouselLeftIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); }\r\n}\r\n@keyframes rotateCarouselLeftIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); transform: translateX(200%) scale(.4) rotateY(65deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCarouselRightOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); }\r\n}\r\n@keyframes rotateCarouselRightOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); transform: translateX(200%) scale(.4) rotateY(65deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCarouselRightIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateX(-200%) scale(.4) rotateY(-65deg); }\r\n}\r\n@keyframes rotateCarouselRightIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateX(-200%) scale(.4) rotateY(-65deg); transform: translateX(-200%) scale(.4) rotateY(-65deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCarouselTopOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); }\r\n}\r\n@keyframes rotateCarouselTopOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); transform: translateY(-200%) scale(.4) rotateX(65deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCarouselTopIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); }\r\n}\r\n@keyframes rotateCarouselTopIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); transform: translateY(200%) scale(.4) rotateX(-65deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCarouselBottomOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); }\r\n}\r\n@keyframes rotateCarouselBottomOut {\r\n\tfrom { }\r\n\tto { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); transform: translateY(200%) scale(.4) rotateX(-65deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateCarouselBottomIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); }\r\n}\r\n@keyframes rotateCarouselBottomIn {\r\n\tfrom { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); transform: translateY(-200%) scale(.4) rotateX(65deg); }\r\n}\r\n\r\n/* sides */\r\n\r\n@-webkit-keyframes rotateSidesOut {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(90deg); }\r\n}\r\n@keyframes rotateSidesOut {\r\n\tfrom { }\r\n\tto { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(90deg); transform: translateZ(-500px) rotateY(90deg); }\r\n}\r\n\r\n@-webkit-keyframes rotateSidesIn {\r\n\tfrom { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(-90deg); }\r\n}\r\n@keyframes rotateSidesIn {\r\n\tfrom { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(-90deg); transform: translateZ(-500px) rotateY(-90deg); }\r\n}\r\n\r\n/* slide */\r\n\r\n@-webkit-keyframes rotateSlideOut {\r\n\t0% { }\r\n\t25% { opacity: .5; -webkit-transform: translateZ(-500px); }\r\n\t75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }\r\n\t100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }\r\n}\r\n@keyframes rotateSlideOut {\r\n\t0% { }\r\n\t25% { opacity: .5; -webkit-transform: translateZ(-500px); transform: translateZ(-500px); }\r\n\t75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); transform: translateZ(-500px) translateX(-200%); }\r\n\t100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); transform: translateZ(-500px) translateX(-200%); }\r\n}\r\n\r\n@-webkit-keyframes rotateSlideIn {\r\n\t0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); }\r\n\t75% { opacity: .5; -webkit-transform: translateZ(-500px); }\r\n\t100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); }\r\n}\r\n@keyframes rotateSlideIn {\r\n\t0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); transform: translateZ(-500px) translateX(200%); }\r\n\t75% { opacity: .5; -webkit-transform: translateZ(-500px); transform: translateZ(-500px); }\r\n\t100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }\r\n}\r\n\r\n/* animation delay classes */\r\n\r\n.delay100 {\r\n\t-webkit-animation-delay: .1s;\r\n\tanimation-delay: .1s;\r\n}\r\n.delay180 {\r\n\t-webkit-animation-delay: .180s;\r\n\tanimation-delay: .180s;\r\n}\r\n.delay200 {\r\n\t-webkit-animation-delay: .2s;\r\n\tanimation-delay: .2s;\r\n}\r\n.delay300 {\r\n\t-webkit-animation-delay: .3s;\r\n\tanimation-delay: .3s;\r\n}\r\n.delay400 {\r\n\t-webkit-animation-delay: .4s;\r\n\tanimation-delay: .4s;\r\n}\r\n.delay500 {\r\n\t-webkit-animation-delay: .5s;\r\n\tanimation-delay: .5s;\r\n}\r\n.delay700 {\r\n\t-webkit-animation-delay: .7s;\r\n\tanimation-delay: .7s;\r\n}\r\n.delay1000 {\r\n\t-webkit-animation-delay: 1s;\r\n\tanimation-delay: 1s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-wrapper\" style=\"background:white\">\r\n\t<div style=\"z-index:10;height:50px; padding-left:20px; background:#3C4046; color: white; position:fixed; width: 100%; padding-top: 15px;\">\r\n\t\t<span style=\"font-size:20px\">{{ user?.CurrentUserQuiz?.Quiz?.description}}</span>\r\n\t\t<span style=\"float: right;\r\n\t\t\t\t\t\tmargin-right: 10px;\r\n\t\t\t\t\t\tmargin-top: -6px;\">\r\n\t\t\t<button class=\"btn\" style=\"background:#FD6B35;\r\n\t\t\t\t\t\t\t\t\t\twidth: 85px;\r\n\t\t\t\t\t\t\t\t\t\tpadding-left: 0px;\r\n\t\t\t\t\t\t\t\t\t\ttext-align: left;\" \r\n\t\t\t\t[disabled]=\"questionSubmitted\" (click)=\"getNextQuestion()\">\r\n\t\t\t\t\t<span style=\"display: inline-block; width: 22px; padding-left: 5px;\">\r\n\t\t\t\t\t\t<i *ngIf=\"questionSubmitted\" class='fa fa-circle-o-notch fa-spin'></i>\r\n\t\t\t\t\t</span>Submit</button>\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t<div id=\"qaSection\" [@questionAnim]=\"user?.CurrentUserQuestion?.id\" *ngIf=\"user?.CurrentUserQuestion?.id\" class=\"row-section\" \r\n\t\t style=\"background:#ECEDF2; padding-top:50px;perspective: 1200px;\">\r\n\t\t<div class=\"row-section\" id=\"question\" style=\"min-height:200px; padding-left:20px; padding-top:10px; padding-bottom: 10px; padding-right:10px\">\r\n\t\t\t<code style=\"background:transparent; color: black; word-wrap: break-word; white-space: pre-wrap; padding:0px;\">{{user.CurrentUserQuestion.Question.description}}</code>\r\n\t\t\t<div *ngIf=\"user.CurrentUserQuestion.Question.imageUrl\">\r\n\t\t\t\t<img src=\"{{getImage(user.CurrentUserQuestion.Question.imageUrl)}}\" style=\"max-width:100%\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"row-section\" id=\"answer\" style=\"padding-right:10px\">\r\n\t\t\t<ul id=\"optionsDiv\" *ngIf=\"user.CurrentUserQuestion.Question.QuizOptions\" class=\"slides\" style=\"position: absolute; padding-top:10px\">\r\n\t\t\t\t<li *ngFor=\"let option of user.CurrentUserQuestion.Question.QuizOptions\">\t\t\t\t\t\t\r\n\t\t\t\t\t<!--  -->\r\n\t\t\t\t\t<input *ngIf=\"user.CurrentUserQuestion.Question.optionType === 'Checkbox'\" type=\"checkbox\" \r\n\t\t\t\t\t\tname=\"optionSelection\"\r\n\t\t\t\t\t\tvalue=\"{{option.id}}\"\r\n\t\t\t\t\t\t(change)=\"onOptionSelected(user.CurrentUserQuestion, option)\">\r\n\t\t\t\t\t<input *ngIf=\"user.CurrentUserQuestion.Question.optionType === 'Radio'\" type=\"radio\" \r\n\t\t\t\t\t\tname=\"optionSelection\" \r\n\t\t\t\t\t\tvalue=\"{{option.id}}\"\r\n\t\t\t\t\t\t(change)=\"onOptionSelected(user.CurrentUserQuestion, option)\">\r\n\t\t\t\t\t<input *ngIf=\"user.CurrentUserQuestion.Question.optionType === 'Text'\" #optionTextValue type=\"text\" \r\n\t\t\t\t\t\tname=\"optionSelection\" \t\t\t\t\t\t\r\n\t\t\t\t\t\t(change)=\"onOptionSelected(user.CurrentUserQuestion, option, optionTextValue.value)\">\r\n\t\t\t\t\t<label *ngIf=\"user.CurrentUserQuestion.Question.optionType != 'Text'\">{{option.description}}</label>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<div class=\"scaleUp\" id=\"resultDiv\" style=\"position: absolute; width:100%; margin-right:-10px;text-align: center;font-size: 20px;\">\r\n\t\t\t\t<div *ngIf=\"!result\" style=\"min-height:200px;background: rgb(223, 30, 30);color:white;padding-top: 80px;\">Oops! You got it wrong!</div>\r\n\t\t\t\t<div *ngIf=\"result\" style=\"min-height:200px;background: rgb(68, 175, 1);color:white;padding-top: 80px;\">Correct!</div>\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\t\t\t  \r\n\t</div>\r\n\r\n\t<div class=\"scaleUp\" id=\"endQuizDiv\" style=\"display:none; position: absolute; top: 150px; width:100%; margin-right:-10px;text-align: center;font-size: 20px;\">\r\n\t\t<div *ngIf=\"user?.quizStatus === 'COMPLETED_FAIL'\" style=\"min-height:200px;background: rgb(223, 30, 30);color:white;padding-top: 80px;\">{{user?.CurrentUserQuiz?.Quiz?.failedMessage}}</div>\r\n\t\t<div *ngIf=\"user?.quizStatus === 'COMPLETED_SUCCESS'\" style=\"min-height:200px;background: rgb(68, 175, 1);color:white;padding-top: 80px;\">{{user?.CurrentUserQuiz?.Quiz?.successMessage}}</div>\t\t\t\t\r\n\t</div>\r\n\r\n</div>"

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
        this.showingResult = 0;
    }
    UserQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getLocalUserOrRedirect()
            .then(function (user) {
            _this.user = user;
            _this.checkQuizCompleted(_this.user);
        });
    };
    UserQuizComponent.prototype.getImage = function (imageName) {
        return this.quizService.getContextUrl() + "/Images/" + imageName;
    };
    UserQuizComponent.prototype.onOptionSelected = function (userQuestion, option, optionTextValue) {
        if (userQuestion.Question.optionType === 'Text') {
            if (optionTextValue) {
                if (option.description.toLowerCase() === optionTextValue.toLowerCase()) {
                    this.user.CurrentUserQuestion.selectedOptionIds = option.id;
                }
                else {
                    this.user.CurrentUserQuestion.selectedOptionIds = '*text*';
                }
            }
            else {
                this.user.CurrentUserQuestion.selectedOptionIds = null;
            }
        }
        else {
            this.user.CurrentUserQuestion.selectedOptionIds =
                __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.reduce(__WEBPACK_IMPORTED_MODULE_4_jquery__(this.elementRef.nativeElement).find('[name="optionSelection"]:checked'), function (strObj, e) {
                    strObj.val = strObj.val + (strObj.index++ ? "," : "") + __WEBPACK_IMPORTED_MODULE_4_jquery__(e).val();
                    return strObj;
                }, { index: 0, val: "" }).val;
        }
    };
    UserQuizComponent.prototype.showResult = function (result) {
        this.showingResult++;
        this.result = result;
    };
    UserQuizComponent.prototype.animateAndLoadNextQuestion = function (user) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#question").removeClass("flipInLeft");
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#question").addClass("flipOutRight").on("animationend", function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#question").removeClass("flipOutRight");
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#question").addClass("flipInLeft");
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#answer").removeClass("flipInRight");
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#answer").addClass("flipOutLeft").on("animationend", function () {
            _this.user.isLastQuestionForCurrentQuiz = user.isLastQuestionForCurrentQuiz;
            _this.user.CurrentUserQuestion = user.CurrentUserQuestion;
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#answer").addClass("flipInRight");
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#answer").removeClass("flipOutLeft");
        });
    };
    UserQuizComponent.prototype.getNextQuestion = function () {
        var _this = this;
        if (this.user.CurrentUserQuestion.selectedOptionIds && this.user.CurrentUserQuestion.selectedOptionIds.length > 0) {
            this.questionSubmitted = true;
            this.quizService.submitAndGetNextQuestion({
                id: this.user.id,
                CurrentUserQuestion: this.user.CurrentUserQuestion
            })
                .then(function (user) {
                _this.showResult(user.lastQuestionIsCorrect);
                _this.user.quizStatus = user.quizStatus;
                jQuery(_this.elementRef.nativeElement).find('#resultDiv').show(100);
                jQuery(_this.elementRef.nativeElement).find('#optionsDiv').hide(100);
                setTimeout(function () {
                    if (!_this.checkQuizCompleted(user)) {
                        jQuery(_this.elementRef.nativeElement).find('#resultDiv').hide(10);
                        jQuery(_this.elementRef.nativeElement).find('#optionsDiv').show(10);
                        _this.user.isLastQuestionForCurrentQuiz = user.isLastQuestionForCurrentQuiz;
                        _this.user.CurrentUserQuestion = user.CurrentUserQuestion;
                        _this.questionSubmitted = false;
                    }
                }, 1500);
            })
                .catch(function (err) {
                _this.questionSubmitted = false;
            });
        }
        else {
            this.toasterService.pop('error', 'Options', 'Please select an option to proceed');
        }
    };
    UserQuizComponent.prototype.checkQuizCompleted = function (user) {
        var _this = this;
        if (user && (user.CurrentUserQuestion == null || user.CurrentUserQuestion.id == null)) {
            jQuery(this.elementRef.nativeElement).find('#qaSection').css({ opacity: .2 });
            jQuery(this.elementRef.nativeElement).find('#endQuizDiv').show(10);
            jQuery(this.elementRef.nativeElement).find('#resultDiv').hide(10);
            setTimeout(function () {
                _this.router.navigateByUrl('/users/quizhome');
            }, 2000);
            return true;
        }
        return false;
    };
    return UserQuizComponent;
}());
UserQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-quizs',
        template: __webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-quiz-module/components/user-quiz.component.css")],
        animations: [
            // trigger('showResultOption', [
            // 	// state('true', style({ opacity: 0})),
            // 	// state('false', style({ opacity: 1})),
            // 	transition('* <=> *', [animate(".5s ease-in")]),
            // ]),
            // trigger('showResultAnswer', [
            // 	// state('false', style({ opacity: 0})),
            // 	// state('true', style({ opacity: 1})),
            // 	transition('* => *', [animate("1.5s ease-in", 
            // 	style({ display: "block" })
            // 	// keyframes([
            // 	// 	style({ display: "block" }),
            // 	// 	//style({ display: "none" })
            // 	// ])
            // 	)]),
            // ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('questionAnim', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('* => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({
                        "transform": "translateZ(-1000px) rotateY(90deg)",
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])("1.5s ease")
                    // animate("0.5s ease-in", keyframes([
                    // 	style({}),
                    // 	style({
                    // 	"transform": "translateZ(-1000px) rotateY(90deg)",
                    // 	opacity: 0.2
                    // 	})
                    // ]))
                    // animate(350, 
                    // style(
                    // 	{
                    // 		"-webkit-transform-origin": "50% 50%",
                    // 		"transform-origin": "50% 50%",
                    // 		"-webkit-animation": "flipOutRight 0.5s both ease-in",
                    // 		"animation": "flipOutRight 0.5s both ease-in"
                    // 	}
                    // 	//{transform: 'translateZ(-1000px) rotateY(90deg); opacity: 0.2;'}
                    // ))
                ])
                // ,
                // transition('* => *', [
                // group([
                // 	animate('0.2s ease', style({
                // 	transform: 'translate(150px,25px)'
                // 	})),
                // 	animate('0.5s 0.2s ease', style({
                // 	opacity: 0
                // 	}))
                // ])
                // ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_quiz_service__["a" /* UserQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_quiz_service__["a" /* UserQuizService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], UserQuizComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"panel panel-info\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">User Registration</h3>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"user\" class=\"panel-body\">\r\n\t\t\t<h2>Please register to begin</h2>\r\n\r\n\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t<fieldset>\r\n\t\t\t\t\t<legend>Welcome</legend>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" placeholder=\"Name\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.college\" name=\"college\" placeholder=\"College Name\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"registerUser(user)\">Submit</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"singInUser()\">SignIn</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"!user\">\r\n\t\t\tPleas wait while we create the Quiz for you.\r\n\t\t</div>\r\n\t</div>\r\n</div>"

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
    function UserRegistrationComponent(route, router, quizService, toasterService, localStorageService) {
        this.route = route;
        this.router = router;
        this.quizService = quizService;
        this.toasterService = toasterService;
        this.localStorageService = localStorageService;
        this.user = this.localStorageService.getItem('user');
        var userParam = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
        if (this.route.snapshot.queryParams["email"]) {
            userParam.email = this.route.snapshot.queryParams["email"],
                userParam.name = this.route.snapshot.queryParams["fName"] + " " + this.route.snapshot.queryParams["lName"];
        }
        if (this.user && this.user.email === userParam.email) {
            this.router.navigateByUrl('/users/quizhome');
        }
        else if (userParam.email) {
            this.registerUser(userParam);
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
    UserRegistrationComponent.prototype.registerUser = function (user) {
        var _this = this;
        this.quizService.registerUser(user).then(function (userResult) {
            _this.signInSuccess(userResult);
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
    return UserRegistrationComponent;
}());
UserRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-registration',
        template: __webpack_require__("../../../../../src/app/user-quiz-module/components/user-registration/user-registration.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_quiz_service__["a" /* UserQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_quiz_service__["a" /* UserQuizService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _e || Object])
], UserRegistrationComponent);

var _a, _b, _c, _d, _e;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_base_service__ = __webpack_require__("../../../../../src/app/shared/service/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__local_storage_service__ = __webpack_require__("../../../../../src/app/user-quiz-module/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_loader_service__ = __webpack_require__("../../../../../src/app/shared/components/loader.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserQuizService = (function (_super) {
    __extends(UserQuizService, _super);
    function UserQuizService(http, router, toasterService, localStorageService, loaderService) {
        var _this = _super.call(this, http, toasterService, loaderService) || this;
        _this.router = router;
        _this.localStorageService = localStorageService;
        _this.quizUserUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiContextUrl + '/api/quizuser';
        _this.userQuestionUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiContextUrl + '/api/userquestion';
        _this.userQuizUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiContextUrl + '/api/userquiz';
        return _this;
    }
    UserQuizService.prototype.getUserQuizs = function (user) {
        return this.getHttp(this.userQuizUrl + '/' + user.id);
    };
    UserQuizService.prototype.getUser = function (user) {
        return this.getHttp(this.quizUserUrl + '/' + user.id);
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
        return this.postHttp(this.userQuestionUrl, user, null, function () { }, true);
    };
    UserQuizService.prototype.getUserByEmail = function (user) {
        return this.getHttp(this.quizUserUrl + '/getbyemail?emailId=' + user.email);
    };
    UserQuizService.prototype.registerUser = function (user) {
        return this.postHttp(this.quizUserUrl, user);
    };
    UserQuizService.prototype.startQuiz = function (user) {
        return this.postHttp(this.userQuizUrl, user, null, function () { });
    };
    return UserQuizService;
}(__WEBPACK_IMPORTED_MODULE_7__shared_service_base_service__["a" /* BaseService */]));
UserQuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__local_storage_service__["a" /* LocalStorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared_components_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_components_loader_service__["a" /* LoaderService */]) === "function" && _e || Object])
], UserQuizService);

var _a, _b, _c, _d, _e;
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