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

  list(){
    return this.htttpCliente.get<Diretor[]>(this.API).pipe(
      first(),
      delay(5000)
    );
  }

  loadById(id: string) {
    return this.htttpCliente.get<Diretor>(`${this.API}/${id}`);
  }

  save(record: Partial<Diretor>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }


  private create(record: Partial<Diretor>) {
    return this.htttpCliente.post<Diretor>(this.API, record).pipe(first());
  }

  private update(record: Partial<Diretor>) {
    return this.htttpCliente.put<Diretor>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.htttpCliente.delete(`${this.API}/${id}`).pipe(first());
  }
}
