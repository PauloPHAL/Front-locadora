import { Component } from '@angular/core';
import { Locacao } from '../model/locadora';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from '../../cliente/model/cliente';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LocadoraService } from '../service/locadora.service';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';

@Component({
  selector: 'app-locadora',
  templateUrl: './locadora.component.html',
  styleUrls: ['./locadora.component.css']
})
export class LocadoraComponent {


  listaLocacao$: Observable<Locacao[]>;
  displayedColumns = ['cliente','item','actions'];

  constructor(
    private locacaoService: LocadoraService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ){
    this.listaLocacao$ = this.locacaoService.list().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar locacoes:');
        return of([])
      }),
    );
  }

  onEdit(id: string) {
    this.router.navigate(['editarLocacao', id], { relativeTo: this.route });
  }

  onDelete(locacao: Locacao) {

    // const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    //   data: 'Tem certeza que deseja remover esse cliente?',
    // });

    // dialogRef.afterClosed().subscribe((result: boolean) => {
    //   if (result) {
    //     this.clienteService.remove(cliente._id).subscribe(
    //       () => {
    //         this.refresh();
    //         this.snackBar.open('Cliente removido com sucesso!', 'X', {
    //           duration: 5000,
    //           verticalPosition: 'top',
    //           horizontalPosition: 'center'
    //         });
    //       },
    //       (erro) => this.onErro(erro.error)
    //     );
    //   }
    // });
    console.log(locacao);
  }

  refresh() {
    this.listaLocacao$ = this.locacaoService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Locacoes.');
          return of([])
        })
      );
  }

  onErro(msg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: msg
    });
  }

  onAdd() {
    this.router.navigate(['newLocarForm'], { relativeTo: this.route });
  }



}
