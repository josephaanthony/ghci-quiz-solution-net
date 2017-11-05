import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    // array in local storage for registered users
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
 
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {
            console.log("FAKE BACKEND");
 
            // authenticate
            if (connection.request.url.match(/api\/quizuser/) && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {"email":"josephaanthony@gmail.com","id":"2c09640c-8447-4be5-a692-9139441715d2","name":"Joseph Anthony","isLastQuestionForCurrentQuiz":null,"isLastQuiz":null,"currentUserQuestionId":"8bd3f208-db7a-4a84-ab32-2d861c91fc8e","CurrentUserQuestion":{"id":"8bd3f208-db7a-4a84-ab32-2d861c91fc8e","index":1,"isCorrect":null,"Question":{"description":"Question No 1 for Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095d518","optionType":"Radio","QuizOptions":[{"description":"Option 1 for Question 1 Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095a523","isCorrect":true,"index":0},{"description":"Option 2 for Question 1 Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095a524","isCorrect":false,"index":0},{"description":"Option 3 for Question 1 Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095a525","isCorrect":false,"index":0},{"description":"Option 4 for Question 1 Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095a526","isCorrect":false,"index":0}]},"questionId":"6a122b17-a3a5-403a-8a9c-79b84095d518","selectedOptionIds":null},"currentUserQuizId":"e36ec36d-2345-4782-ac2c-2556724af839","CurrentUserQuiz":{"id":"e36ec36d-2345-4782-ac2c-2556724af839","quizId":"5a122b17-a3a5-403a-8a9c-79b84095d516","timeTakenInterval":null,"status":"IN_PROGRESS","Quiz":{"description":"Quiz No 2 Updated","id":"5a122b17-a3a5-403a-8a9c-79b84095d516","level":2,"passpoint":22}}}
                    })));
                    
                    
 
                return;
            }

            // authenticate
            if (connection.request.url.match(/api\/quizuser/) && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {"email":"josephaanthony@gmail.com","id":"2c09640c-8447-4be5-a692-9139441715d2","name":"Joseph Anthony","isLastQuestionForCurrentQuiz":null,"isLastQuiz":null,"currentUserQuestionId":"8bd3f208-db7a-4a84-ab32-2d861c91fc8e","CurrentUserQuestion":{"id":"8bd3f208-db7a-4a84-ab32-2d861c91fc8e","index":1,"isCorrect":null,"Question":{"description":"Question No 1 for Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095d518","optionType":"Radio","QuizOptions":[{"description":"Option 1 for Question 1 Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095a523","isCorrect":true,"index":0},{"description":"Option 2 for Question 1 Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095a524","isCorrect":false,"index":0},{"description":"Option 3 for Question 1 Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095a525","isCorrect":false,"index":0},{"description":"Option 4 for Question 1 Quiz 2","id":"6a122b17-a3a5-403a-8a9c-79b84095a526","isCorrect":false,"index":0}]},"questionId":"6a122b17-a3a5-403a-8a9c-79b84095d518","selectedOptionIds":null},"currentUserQuizId":"e36ec36d-2345-4782-ac2c-2556724af839","CurrentUserQuiz":{"id":"e36ec36d-2345-4782-ac2c-2556724af839","quizId":"5a122b17-a3a5-403a-8a9c-79b84095d516","timeTakenInterval":null,"status":"IN_PROGRESS","Quiz":{"description":"Quiz No 2 Updated","id":"5a122b17-a3a5-403a-8a9c-79b84095d516","level":2,"passpoint":22}}}
                    })));
                    
                    
 
                return;
            }

           
            if (connection.request.url.match(/api\/userquiz/) && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body:[{"description":"Quiz No 1 Updated","id":"5a122b17-a3a5-403a-8a9c-79b84095d515","level":1,"passpoint":2,"UserQuizs":[{"id":"143b3a29-0621-4519-85d0-3c4999dd209a","quizId":"5a122b17-a3a5-403a-8a9c-79b84095d515","status":"COMPLETED_SUCCESS","timeTakenInterval":null,"attempt":4},{"id":"21bcee58-71f9-4921-a997-3ca9943dc4ca","quizId":"5a122b17-a3a5-403a-8a9c-79b84095d515","status":"COMPLETED_FAIL","timeTakenInterval":null,"attempt":1},{"id":"68795506-2a71-442b-84bd-d35d9bd3e5d3","quizId":"5a122b17-a3a5-403a-8a9c-79b84095d515","status":"COMPLETED_FAIL","timeTakenInterval":null,"attempt":3},{"id":"6cb51279-48f8-42cd-a5a7-8bbad9e5ed24","quizId":"5a122b17-a3a5-403a-8a9c-79b84095d515","status":"COMPLETED_FAIL","timeTakenInterval":null,"attempt":0},{"id":"c20ca70a-24ba-4665-bd4c-1fc8e5286a5c","quizId":"5a122b17-a3a5-403a-8a9c-79b84095d515","status":"COMPLETED_FAIL","timeTakenInterval":null,"attempt":2}]},{"description":"Quiz No 2 Updated","id":"5a122b17-a3a5-403a-8a9c-79b84095d516","level":2,"passpoint":22,"UserQuizs":[{"id":"e36ec36d-2345-4782-ac2c-2556724af839","quizId":"5a122b17-a3a5-403a-8a9c-79b84095d516","status":"IN_PROGRESS","timeTakenInterval":null,"attempt":0}]},{"description":"Quiz No 3","id":"5a122b17-a3a5-403a-8a9c-79b84095d517","level":3,"passpoint":null,"UserQuizs":[null]},{"description":"Quiz No 4 Updated","id":"50b9e675-4a0a-4847-b657-b1407686ce0a","level":4,"passpoint":null,"UserQuizs":[null]}]
                    })));
                    
                    
 
                return;
            }


            if (connection.request.url.match(/api\/userquiz/) && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body:{"id":"2c09640c-8447-4be5-a692-9139441715d2","name":null,"email":null,"currentUserQuizId":null,"currentUserQuestionId":null,"isLastQuiz":null,"isLastQuestionForCurrentQuiz":null,"CurrentUserQuestion":null,"CurrentUserQuiz":{"id":null,"quizId":"5a122b17-a3a5-403a-8a9c-79b84095d516","timeTakenInterval":null,"status":null,"userId":null,"attempt":null,"Quiz":null,"QuizUsers":[],"UserQuestions":[],"QuizUser":null},"UserQuizs":[]}
                    })));
                    
                    
 
                return;
            }


            if (connection.request.url.match(/api\/userquestion/) && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body:{"id":"2c09640c-8447-4be5-a692-9139441715d2","isLastQuestionForCurrentQuiz":null,"CurrentUserQuestion":{"id":"2d25d568-dff5-43f2-93cf-1f2352005852","index":1,"isCorrect":null,"Question":{"description":"Question No 1 for Quiz 2 What is my name What is your name","id":"6a122b17-a3a5-403a-8a9c-79b84095d518","optionType":"Radio","isImage":true,"imageUrl":"./assets/images/Analytical.jpg","QuizOptions":[{"description":"Option 1 for Question 1 Quiz 2  What is my name What is your name","id":"6a122b17-a3a5-403a-8a9c-79b84095a523","isCorrect":true,"index":0},{"description":"Option 2 for Question 1 Quiz 2  What is my name What is your name","id":"6a122b17-a3a5-403a-8a9c-79b84095a524","isCorrect":false,"index":0},{"description":"Option 3 for Question 1 Quiz 2  What is my name What is your name","id":"6a122b17-a3a5-403a-8a9c-79b84095a525","isCorrect":false,"index":0},{"description":"Option 4 for Question 1 Quiz 2  What is my name What is your name","id":"6a122b17-a3a5-403a-8a9c-79b84095a526","isCorrect":false,"index":0}]},"questionId":"6a122b17-a3a5-403a-8a9c-79b84095d518","selectedOptionIds":null}}
                    })));
                    
                    
 
                return;
            }
 
           
 
            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });
 
        }, 500);
 
    });
 
    return new Http(backend, options);
};
 
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};