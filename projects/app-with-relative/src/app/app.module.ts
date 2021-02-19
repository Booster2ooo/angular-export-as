import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithExportAsModule } from 'projects/module-with-export-as/src/lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	ModuleWithExportAsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
