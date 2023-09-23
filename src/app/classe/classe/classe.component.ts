import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';

import { Classe } from '../model/classe';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  listaClasse$: Observable<Classe[]>;
  displayedColumns = ['_id','nome','valor','data','actions'];


  constructor(
    private classeService: ClasseService,
    private dialog: MatDialog
    ){
    this.listaClasse$ = this.classeService.findAll().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar Atores:');
        return of([])
      }),
    );
  }

  ngOnInit(): void {}

  onErro(msg: string){
    this.dialog.open(ErroDialogComponent, {
      data: msg
    });
  }
}
