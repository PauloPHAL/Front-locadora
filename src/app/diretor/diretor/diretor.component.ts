import { Component, OnInit } from '@angular/core';
import { DiretorService } from '../services/diretor.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';
import { Diretor } from '../model/diretor';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export default class DiretorComponent implements OnInit{
  listaDiretor$: Observable<Diretor[]>;
  displayedColumns = ['_id','nome','actions'];

  constructor(
    private diretorService: DiretorService,
    private dialog: MatDialog
    ){
    //this.atorService = new AtorService();
    this.listaDiretor$ = this.diretorService.findAll().pipe(
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
