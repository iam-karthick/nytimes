import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'my-search',
  templateUrl: `./search.component.html`
})
export class SearchComponent  {
    search:string;
    newsuser:any;
    copyright:string;
    docs:any;
    multimedia:any;
    url:string;
    constructor( private  newsserve :NewsService ) {
  
    }
     newsUser(){
        console.log(this.search)
        this.newsserve.newsUsers(this.search).subscribe(res => {
          this.docs = res.response.docs;
          this.copyright = res.copyright;
          console.log(this.docs);          
      });
    }   
 }
