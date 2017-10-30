import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';

import { HttpUtil } from '../../shared/util/http.util';
import { LoaderService } from '../../shared/components/loader.service';

export class BaseService {
    protected quizErrorHandler = HttpUtil.handleErrorWithMessage(this.toasterService);
	protected quizSuccessHandler = HttpUtil.handleSuccessWithMessag(this.toasterService);

	protected dispayLoaderFn;
    protected hideLoaderFn;
    
    constructor(protected http: Http, protected toasterService: ToasterService, protected loaderService: LoaderService) {        
        this.dispayLoaderFn = () => { 
			this.loaderService.display(true);
		}
		this.hideLoaderFn = () => {
			this.loaderService.display(false);
		} 
    }

    private executHttp<T>(fn: Observable<Response>, doFn?: any) {
        this.dispayLoaderFn();

        if(!doFn) {
            doFn = this.quizSuccessHandler;
        }

        return fn
                .do(doFn)
                .finally(this.hideLoaderFn)
				.toPromise()
				.then(response => response.json() as T)
				.catch(this.quizErrorHandler);;        
    }

    protected getHttp<T>(url, options?) {
        return this.executHttp<T>(this.http.get(url, options), () => {});
    }

    protected postHttp<T>(url, body, options?) {
        return this.executHttp<T>(this.http.post(url, body, options));
    }
    
    protected putHttp<T>(url, body, options?) {
        return this.executHttp<T>(this.http.put(url, body, options));
    }

    protected deleteHttp<T>(url, options?) {
        return this.executHttp<T>(this.http.delete(url, options));
    }
}