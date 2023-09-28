import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DiretorService } from '../services/diretor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent {
  form: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private servicoDiretor: DiretorService,
    private _snackBar: MatSnackBar,private router: Router){
    this.form = this.formBuilder.group({
      nome:[null],
    });
  }

  salvar() {
    // Verifique se o nome não é nulo antes de salvar
    const formData = this.form.value;
    if (!formData.nome) {
      this.mostrarMensagemDeErro('O nome é obrigatório.');
      return;
    }

    this.servicoDiretor.save(formData).subscribe(
      () => {
        // Limpar o formulário ou realizar outras ações após salvar com sucesso
        this.form.reset();
        this.mostrarMensagemDeSucesso('Diretor salvo com sucesso!');
      },() => {

        this.mostrarMensagemDeErro('Ocorreu um erro ao salvar o diretor.');
      }
    );
  }

  mostrarMensagemDeSucesso(mensagem: string) {
    this._snackBar.open(mensagem, 'Fechar', {
      duration: 2000, // Exibe a mensagem por 2 segundos
    });
  }

  mostrarMensagemDeErro(mensagem: string) {
    this._snackBar.open(mensagem, 'Fechar', {
      duration: 2000,
    });
  }

  cancelar(){
    this.router.navigate(['/adm']);
  }

}
