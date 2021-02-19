import { Component } from '@angular/core';
import { IAnwsers } from 'module-with-export-as';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public answers: IAnwsers) {}
}
