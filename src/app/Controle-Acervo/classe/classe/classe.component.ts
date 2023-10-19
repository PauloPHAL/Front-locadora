import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';

import { Classe } from '../model/classe';
import { ClasseService } from '../services/classe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  listaClasse$: Observable<Classe[]>;
  displayedColumns = ['_id', 'nome', 'valor', 'data', 'actions'];

  editMode = false;
  constructor(
    private classeService: ClasseService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.listaClasse$ = this.classeService.list().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar Classes:');
        return of([])
      }),
    );
  }

  ngOnInit(): void { }

  onErro(msg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: msg
    });
  }

  onAdd() {
    this.router.navigate(['newClasseForm'], { relativeTo: this.route });
    //console.log("oi");
  }



  onEdit(id: string) {
    this.router.navigate(['editarClasse',id], { relativeTo: this.route });
  }

  onDelete(classe: Classe) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover essa classe?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.classeService.remove(classe._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Classe removida com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          (erros) => this.onErro(erros.error)
        );
      }
    });
  }

  refresh() {
    this.listaClasse$ = this.classeService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Classes.');
          return of([])
        })
      );
  }


}
