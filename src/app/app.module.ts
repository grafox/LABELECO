import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { MdlModule } from '@angular-mdl/core';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
