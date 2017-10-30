import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ToasterService } from 'angular2-toaster';
import _ from 'lodash';

import { environment } from '../../../environments/environment'
import { BaseService } from '../../shared/service/base.service';
import { LoaderService } from '../../shared/components/loader.service';

@Injectable()
export class UsersService extends BaseService {
	private usersUrl = environment.apiContextUrl +  '/api/adminuser';


    constructor(http: Http, toasterService: ToasterService, loaderService: LoaderService) {
		super(http, toasterService, loaderService);
    }
    
    public getUsers() {
        return this.getHttp(this.usersUrl);
    }

    public deleteUser(delDataId: String): Promise<String> {
		return this.deleteHttp<String>(this.usersUrl + '/' + delDataId);
	}
}