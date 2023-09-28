import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AtorService } from '../services/ator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private servicoAtor: AtorService,
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

    this.servicoAtor.save(formData).subscribe(
      () => {
        // Limpar o formulário ou realizar outras ações após salvar com sucesso
        this.form.reset();
        this.mostrarMensagemDeSucesso('Ator salvo com sucesso!');
      },() => {

        this.mostrarMensagemDeErro('Ocorreu um erro ao salvar o ator.');
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
