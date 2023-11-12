import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  listaCliente$: Observable<Cliente[]>;
  displayedColumns = ['_id', 'tipo','nome', 'actions'];



  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ){
      this.listaCliente$ = this.clienteService.list().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar clientes:');
        return of([])
      }),
    );
  }
  ngOnInit(): void { }

  onEdit(id: string) {
    this.router.navigate(['', id], { relativeTo: this.route });
  }

  onDelete(cliente: Cliente) {

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
    console.log(cliente);
  }

  refresh() {
    // this.listaCliente$ = this.clienteService.list()
    //   .pipe(
    //     catchError(error => {
    //       this.onErro('Erro ao carregar Clientes.');
    //       return of([])
    //     })
    //   );
  }

  onErro(msg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: msg
    });
  }

  onAdd() {
    this.router.navigate(['newClienteForm'], { relativeTo: this.route });
    //console.log("oi");
  }


}
