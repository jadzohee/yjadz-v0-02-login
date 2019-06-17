import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { SharedDataService } from './../../services/shared-data.service';

@Component({
  selector: 'solution-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  mode = new FormControl('over');

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(private readonly _sharedDataService: SharedDataService) { }

  onThemeChange(event){
    this._sharedDataService.OnThemeSwitch.next(event.checked);
  }
}