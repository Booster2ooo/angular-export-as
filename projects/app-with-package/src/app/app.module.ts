import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithExportAsModule } from 'module-with-export-as';

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
