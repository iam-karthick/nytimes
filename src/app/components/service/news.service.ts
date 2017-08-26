import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
  export class NewsService{
    constructor (private http:Http) {
     }

    newsUsers(username:string){
            console.log('http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=48fdbd901f85445d813b70f8130ce5f7' );
         return this.http.get('http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=48fdbd901f85445d813b70f8130ce5f7' ).map(res => res.json());
      }
}