import { Component, OnInit } from '@angular/core';
import { DiretorService } from '../services/diretor.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';
import { Diretor } from '../model/diretor';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ator } from 'src/app/ator/model/ator';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export default class DiretorComponent implements OnInit{
  listaDiretor$: Observable<Diretor[]>;
  displayedColumns = ['_id','nome','actions'];

  editMode = false;

  constructor(
    private diretorService: DiretorService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ){
    //this.atorService = new AtorService();
    this.listaDiretor$ = this.diretorService.list().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar Diretores:');
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

  onAdd(){
    this.router.navigate(['newDiretorForm'],{relativeTo: this.route});
    //console.log("oi");
  }





  onEdit(diretor: Diretor) {
    this.editMode = true;
    console.log(diretor);
  }

  onDelete(diretor: Diretor) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse diretor?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.diretorService.remove(diretor._id).subscribe(
          () => {
            this.refresh(); 
            this.snackBar.open('Diretor removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onErro('Erro ao tentar remover diretor.') 
        );
      }
    });
  }

  refresh() {
    this.listaDiretor$ = this.diretorService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Diretores.');
          return of([])
        })
      );
  }

}
