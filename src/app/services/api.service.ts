import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Search } from '../models/search.model';
import { Result } from '../models/result.model';
import { Observable, of } from 'rxjs';
import { tap } from "rxjs/operators";


const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type":"application/json"
    })
}

@Injectable({
    providedIn:'root'
})

export class APIService {
    

    public serverUrl = 'http://localhost:3000/search';

    constructor(private http: HttpClient) { }

    getResults(searchInfo:Search) : any {
        let searchUrl = `${this.serverUrl}?price=${searchInfo.price}&location=${searchInfo.location}`;

        return this.http.get<Result>(searchUrl, httpOptions).pipe(
            tap(data => {
                console.log(data);
                return data;
            })
        )
    }
}