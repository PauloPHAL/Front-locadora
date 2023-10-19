import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, catchError, of } from "rxjs";
import { ConfirmationDialogComponent } from "src/app/shared/components/confirmation-dialog/confirmation-dialog.component";
import { ErroDialogComponent } from "src/app/shared/components/erro-dialog/erro-dialog.component";
import { Ator } from "../model/ator";
import { AtorService } from "../services/ator.service";

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})
export class AtorComponent implements OnInit {

  listaAtor$: Observable<Ator[]>;
  displayedColumns = ['_id', 'nome', 'actions'];

  editMode = false;
  editedAtor: Ator | null = null;

  //atorService: AtorService;

  constructor(
    private atorService: AtorService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    //this.atorService = new AtorService();
    this.listaAtor$ = this.atorService.list().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar Atores:');
        return of([])
      }),
    );
  }

  ngOnInit(): void { }

  onEdit(id: string) {
    this.router.navigate(['editarAtor', id], { relativeTo: this.route });
  }

  onDelete(ator: Ator) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse ator?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.atorService.remove(ator._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Ator removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          (erro) => this.onErro(erro.error)
        );
      }
    });

  }

  refresh() {
    this.listaAtor$ = this.atorService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Atores.');
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
    this.router.navigate(['newAtorForm'], { relativeTo: this.route });
    //console.log("oi");
  }

  onCancel() {
    this.editMode = false;
    this.editedAtor = null;
  }
}
