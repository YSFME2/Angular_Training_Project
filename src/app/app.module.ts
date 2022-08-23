import { DBService } from './db.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { YsfApiService } from './services/ysf-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DBService,YsfApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
