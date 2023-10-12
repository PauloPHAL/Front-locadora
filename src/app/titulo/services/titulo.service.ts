import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Titulo } from '../model/titulo';
import { first, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  private readonly API = '/api/titulo';

  constructor( private htttpCliente: HttpClient) { }


  list(){
    return this.htttpCliente.get<Titulo[]>(this.API).pipe(
      first(),
      delay(1000)
    );
  }

  loadById(id: string) {
    return this.htttpCliente.get<Titulo>(`${this.API}/${id}`);
  }

  save(record: Partial<Titulo>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }


  private create(record: Partial<Titulo>) {
    //console.log(record);
    return this.htttpCliente.post<Titulo>(this.API, record).pipe(first());
  }

  private update(record: Partial<Titulo>) {
    return this.htttpCliente.put<Titulo>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.htttpCliente.delete(`${this.API}/${id}`).pipe(first());
  }
}
