import { Injectable, NgModule } from '@angular/core';
import { Anwsers } from './data';

@Injectable()
export class IAnwsers {
	ultimate: number;
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
	  {
		  provide: IAnwsers,
		  useValue: Anwsers
	  }
  ]
})
export class ModuleWithExportAsModule { }
