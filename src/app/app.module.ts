import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NewsService } from './components/service/news.service';
import { AppComponent }  from './app.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent, SearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ NewsService ]
})
export class AppModule { }
