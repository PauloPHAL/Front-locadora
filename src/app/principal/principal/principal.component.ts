import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ){

  }


  user = {
    email: '',
    password: ''
  };

  onErro(msg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: msg
    });
  }

  onSubmit() {}
  logar(){
    if (this.user.email === 'admin' && this.user.password === 'admin') {
      this.router.navigate(['adm'], { relativeTo: this.route });
    } else {
      this.onErro('E-mail ou senha incorretos');
    }
  }
}
