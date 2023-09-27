import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Ator } from '../model/ator';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private readonly API = 'api/ator';

  constructor( private htttpCliente: HttpClient) { }

  //https://www.youtube.com/watch?v=tP6wtEaCnSI&t=4217s 
  //1:10:20
  findAll(){
    return this.htttpCliente.get<Ator[]>(this.API).pipe(
      first(),
      delay(2000)
    );
  }

  save(record: Ator){
    return this.htttpCliente.post<Ator>(this.API, record).pipe(first());
  }
}
