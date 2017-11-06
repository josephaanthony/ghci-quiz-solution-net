import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';

import { environment } from '../../../environments/environment'
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

    public getContextUrl() {
        return environment.apiContextUrl;   
	}



    private executHttp<T>(fn: Observable<Response>, doFn?: any, doWait?: any) {
        if(!doWait) {
            this.dispayLoaderFn();
        }

        if(!doFn) {
            doFn = this.quizSuccessHandler;
        }

        return fn
                .map(response => response.json() as T)
                .do(doFn)
                .finally( () => {
                    if(!doWait) {
                        this.hideLoaderFn();
                    }
                })
				.toPromise()
				//.then(response => response.json() as T)
				.catch(this.quizErrorHandler);;        
    }

    protected getHttp<T>(url, options?) {
        return this.executHttp<T>(this.http.get(url, options), () => {});
    }

    protected postHttp<T>(url, body, options?, doFn?, doWait?: any) {
        return this.executHttp<T>(this.http.post(url, body, options), doFn, doWait);
    }
    
    protected putHttp<T>(url, body, options?) {
        return this.executHttp<T>(this.http.put(url, body, options));
    }

    protected deleteHttp<T>(url, options?) {
        return this.executHttp<T>(this.http.delete(url, options));
    }
}