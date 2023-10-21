import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../model/item';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  listaItem$: Observable<Item[]>;
  displayedColumns = ['_id', 'numSerie', 'dtAq','tipoItem','titulo','actions'];

  constructor(
    private itemService: ItemService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.listaItem$ = this.itemService.list().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar Itens:');
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
    this.router.navigate(['editarItem',id], { relativeTo: this.route });
  }

  onDelete(item: Item) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse item?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.itemService.remove(item._id).subscribe(
          () => {
            this.refresh(); 
            this.snackBar.open('Item removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onErro('Erro ao tentar remover item.') 
        );
      }
    });
    //console.log(item);
  }

  refresh() {
    this.listaItem$ = this.itemService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Itens.');
          return of([])
        })
      );
  }

  onAdd() {
    this.router.navigate(['newItemForm'], { relativeTo: this.route });
  }
}
