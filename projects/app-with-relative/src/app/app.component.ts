import { Component } from '@angular/core';
import { IAnwsers } from 'projects/module-with-export-as/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public answers: IAnwsers) {}
}
