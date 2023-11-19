import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, catchError, of } from "rxjs";
import { ConfirmationDialogComponent } from "src/app/shared/components/confirmation-dialog/confirmation-dialog.component";
import { ErroDialogComponent } from "src/app/shared/components/erro-dialog/erro-dialog.component";
import { Titulo } from "../model/titulo";
import { TituloService } from "../services/titulo.service";


@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {

  listaTitulo$: Observable<Titulo[]>;
  displayedColumns = ['nome', 'diretor','actions'];

  constructor(
    private tituloService: TituloService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.listaTitulo$ = this.tituloService.list().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar Titulos:');
        return of([])
      }),
    );
  }

  onErro(msg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: msg
    });
  }


  onEdit(id: string) {
    this.router.navigate(['editarTitulo',id], { relativeTo: this.route });
  }

  onDelete(titulo: Titulo) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse titulo?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.tituloService.remove(titulo._id).subscribe(
          () => {
            this.refresh(); 
            this.snackBar.open('Titulo removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onErro('Erro ao tentar remover titulo.') 
        );
      }
    });
  }

  refresh() {
    this.listaTitulo$ = this.tituloService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Titulos.');
          return of([])
        })
      );
  }

  onAdd() {
    this.router.navigate(['newTituloForm'], { relativeTo: this.route });
    //console.log("oi");
  }


}
