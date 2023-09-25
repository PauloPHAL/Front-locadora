import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';

import { Ator } from '../model/ator';
import { AtorService } from '../services/ator.service';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})
export class AtorComponent implements OnInit{

  listaAtor$: Observable<Ator[]>;
  displayedColumns = ['_id','nome','actions'];

  //atorService: AtorService;

  constructor(
    private atorService: AtorService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ){
    //this.atorService = new AtorService();
    this.listaAtor$ = this.atorService.findAll().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar Atores:');
        return of([])
      }),
    );
  }

  ngOnInit(): void {}

  editarAtor(ator: Ator): void {
    
  }

  excluirAtor(id: number): void {
    
  }

  onErro(msg: string){
    this.dialog.open(ErroDialogComponent, {
      data: msg
    });
  }
  
  onAdd(){
    this.router.navigate(['newAtorForm'],{relativeTo: this.route});
    //console.log("oi");
  }
}
