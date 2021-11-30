import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../app/interfaces/task';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  private apiUrl = 'http://192.168.100.183/Services/public/restmodelo';
  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) { }

  ListaModels():Observable<any> {

    // create headers data
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      'Accept': 'application/json',
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",
    };

    const path = `${this.apiUrl}`;
    return this.http.get<Task[]>(path,{headers: headers});

  }
}
