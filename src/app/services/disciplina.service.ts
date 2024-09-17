import { Disciplina } from './../models/disciplina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  URL: string = "http://localhost:8080/disciplina";

  constructor(private HttpCliente: HttpClient) {}

  buscarDisciplina(): Observable<Disciplina[]>{
    return this.HttpCliente.get<Disciplina[]>(this.URL)
  }

  deletarDisciplina(): Observable<Disciplina[]>{
    return this.HttpCliente.delete<Disciplina[]>(this.URL)
  }

  inserirDisciplina(disciplina: Disciplina): Observable<Disciplina>{
    return this.HttpCliente.post<Disciplina>(this.URL, disciplina)
  }

  atualizarDisciplina(disciplina: Disciplina): Observable<Disciplina>{
    return this.HttpCliente.put<Disciplina>(this.URL, disciplina)
  }

}
