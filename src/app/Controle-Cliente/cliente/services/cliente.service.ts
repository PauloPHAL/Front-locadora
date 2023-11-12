import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { delay, first } from 'rxjs';
import { Socio } from '../model/socio';
import { Depedente } from '../model/depedente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API = 'api/cliente';

  constructor( private htttpCliente: HttpClient) { }

  list() {
    return this.htttpCliente.get<Cliente[]>(this.API)
      .pipe(
        first(),
        delay(1000),
      );
  }

  listSocios() {
    const url = `${this.API}/socio`;
    return this.htttpCliente.get<Socio[]>(url)
      .pipe(
        first(),
        delay(1000),
      );
  }

  listDependentes() {
    const url = `${this.API}/dependente`;
    return this.htttpCliente.get<Depedente[]>(url)
      .pipe(
        first(),
        delay(1000),
      );
  }
  
  loadById(id: string) {
    return this.htttpCliente.get<Cliente>(`${this.API}/${id}`);
  }


  save(record: Partial<Cliente>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }


  private create(record: Partial<Cliente>) {
    return this.htttpCliente.post<Cliente>(this.API, record).pipe(first());
  }

  private update(record: Partial<Cliente>) {
    return this.htttpCliente.put<Cliente>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.htttpCliente.delete(`${this.API}/${id}`).pipe(first());
  }
}
