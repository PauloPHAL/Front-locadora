import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API = 'api/cliente';

  constructor( private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(this.API)
      .pipe(
        first(),
        delay(1000),
      );
  }
}
