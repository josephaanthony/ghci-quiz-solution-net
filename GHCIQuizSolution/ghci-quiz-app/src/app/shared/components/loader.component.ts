import {Component} from '@angular/core';
import { LoaderService} from './loader.service';
@Component({
  selector: 'spinner-component',
//   'template': '<span *ngIf="showLoader" class="loading"></span>',
  'template': '<div *ngIf="showLoader" class=" loader"><div class="cp-spinner cp-skeleton"></div></div>',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  public showLoader: boolean;

  public constructor(spinner: LoaderService) {
    spinner.status.subscribe((status: boolean) => {
      this.showLoader = status;
    });
  }
}