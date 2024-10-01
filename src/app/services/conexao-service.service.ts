import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexaoServiceService {

  URL: string = "http://localhost:8080/disciplina";


  constructor(private HttpClient: HttpClient) { }

  getConexoes (): Observable<number>{
    return this.HttpClient.get<number>('$(this.apiUrl)');
  }


}
