import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film } from '../components/models/film';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmService {
    //private filmeSubject: BehaviorSubject<any>;
    public filme: any;

    private filmUrl = 'https://localhost:44301/api/filme?page=';


    constructor(private http: HttpClient) {
        //this.filmeSubject = new BehaviorSubject<any>(null);
    }

    getAllFilme() : Observable<any> {
        return this.http.get<any>(`https://localhost:44301/api/filme`);
    }


    // getAllFilme() : Observable<any> {
    //     return this.http.get<any>(`https://localhost:44301/api/filme`)
    //     .pipe(map(response => {
    //         this.filme = response;
    //         this.filmeSubject.next(this.filme);
    //         return response;
    //     }));
    // }
}