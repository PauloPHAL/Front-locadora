import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Ator } from '../model/ator';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private readonly API = 'api/ator';

  constructor( private httpClient: HttpClient) { }

  //https://www.youtube.com/watch?v=tP6wtEaCnSI&t=4217s 
  //1:10:20
  list() {
    return this.httpClient.get<Ator[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        // tap(atores => console.log(atores))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Ator>(`${this.API}/${id}`);
  }

  save(record: Partial<Ator>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Ator>) {
    return this.httpClient.post<Ator>(this.API, record).pipe(first());
  }

  private update(record: Partial<Ator>) {
    return this.httpClient.put<Ator>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
