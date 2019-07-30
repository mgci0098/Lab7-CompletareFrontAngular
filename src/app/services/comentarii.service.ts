import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComentariiService {
    public filme: any;

    constructor(private http: HttpClient) {
    }

    getAllComentarii() : Observable<any> {
        return this.http.get<any>(`https://localhost:44301/api/comentarii`);
    }

    getAllComentariiFiltered(filter): Observable<any>{
        const url = `${`https://localhost:44301/api/comentarii?filterString=`}${filter}`;
        return this.http.get<any>(url, filter);
    } 
    
    getNextPageComentarii(index): Observable<any>{
        const url = `${`https://localhost:44301/api/comentarii?page=`}${index}`;
        return this.http.get<any>(url, index);
    }

}