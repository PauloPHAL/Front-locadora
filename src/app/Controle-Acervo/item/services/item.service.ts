import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { first, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly API = '/api/item';

  constructor( private htttpCliente: HttpClient) { }


  list(){
    return this.htttpCliente.get<Item[]>(this.API).pipe(
      first(),
      delay(1000)
    );
  }

  loadById(id: string) {
    return this.htttpCliente.get<Item>(`${this.API}/${id}`);
  }

  save(record: Partial<Item>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }


  private create(record: Partial<Item>) {
    return this.htttpCliente.post<Item>(this.API, record).pipe(first());
  }

  private update(record: Partial<Item>) {
    return this.htttpCliente.put<Item>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.htttpCliente.delete(`${this.API}/${id}`).pipe(first());
  }
}
