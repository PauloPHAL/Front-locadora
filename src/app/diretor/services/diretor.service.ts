import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, delay } from 'rxjs';
import { Diretor } from '../model/diretor';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {
  private readonly API = '/api/diretor';

  constructor( private htttpCliente: HttpClient) { }

  findAll(){
    return this.htttpCliente.get<Diretor[]>(this.API).pipe(
      first(),
      delay(5000)
    );
  }

  save(record: Diretor){
    return this.htttpCliente.post<Diretor>(this.API, record).pipe(first());
  }
}
