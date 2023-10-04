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


  list(){
    return this.htttpCliente.get<Classe[]>(this.API).pipe(
      first(),
      delay(5000)
    );
  }

  loadById(id: string) {
    return this.htttpCliente.get<Classe>(`${this.API}/${id}`);
  }

  save(record: Partial<Classe>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }


  private create(record: Partial<Classe>) {
    return this.htttpCliente.post<Classe>(this.API, record).pipe(first());
  }

  private update(record: Partial<Classe>) {
    return this.htttpCliente.put<Classe>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.htttpCliente.delete(`${this.API}/${id}`).pipe(first());
  }



}
