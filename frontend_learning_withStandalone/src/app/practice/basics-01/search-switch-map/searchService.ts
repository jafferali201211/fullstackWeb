import { Injectable,inject } from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable({providedIn:'root'})

export class SearchService{
    http =inject(HttpClient)
    searchUserName(term:string){
        return this.http.get(`https://jsonplaceholder.typicode.com/users?id=${term}`)
    }
}