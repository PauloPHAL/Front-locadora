import { Injectable } from '@angular/core';
import { Locacao } from '../model/locadora';
import { HttpClient } from '@angular/common/http';
import { first, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocadoraService {
  private readonly API = 'api/locar';

  constructor( private htttpCliente: HttpClient) { }


  list() {
    return this.htttpCliente.get<Locacao[]>(this.API)
      .pipe(
        first(),
        delay(1000),
      );
  }


  save(record: Partial<Locacao>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }


  private create(record: Partial<Locacao>) {
    return this.htttpCliente.post<Locacao>(this.API, record).pipe(first());
  }

  private update(record: Partial<Locacao>) {
    return this.htttpCliente.put<Locacao>(`${this.API}/${record._id}`, record).pipe(first());
  }
}
