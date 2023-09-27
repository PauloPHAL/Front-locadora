import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Classe } from '../model/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private readonly API = '/api/classe';

  constructor( private htttpCliente: HttpClient) { }

  findAll(){
    return this.htttpCliente.get<Classe[]>(this.API).pipe(
      first(),
      delay(5000)
    );
  }

  save(record: Classe){
    //console.log(record);
    return this.htttpCliente.post<Classe>(this.API, record).pipe(first());
  }
}
