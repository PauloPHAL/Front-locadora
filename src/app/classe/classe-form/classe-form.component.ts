import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClasseService } from '../services/classe.service';
import {   Router } from '@angular/router';

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.css']
})
export class ClasseFormComponent {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private servicoClasse: ClasseService,
    private _snackBar: MatSnackBar,
    private router: Router,
    
    ){
    this.form = this.formBuilder.group({
      nome:[null],
      valor:[null],
      dataDevolucao:[null]
    });
  }

  salvar() {
    const formData = this.form.value;
  
    if (!formData.nome) {
      this.mostrarMensagemDeErro('O nome é obrigatório.');
      return;
    }
  
    if (!formData.valor) {
      this.mostrarMensagemDeErro('O valor é obrigatório.');
      return;
    }
  
    if (formData.dataDevolucao && !this.isValidDate(formData.dataDevolucao)) {
      this.mostrarMensagemDeErro('Data de devolução inválida.');
      return;
    }
  
    if (formData.dataDevolucao) {
      formData.dataDevolucao = new Date(formData.dataDevolucao);
    }
  
    this.servicoClasse.save(formData).subscribe(
      () => {
        this.form.reset();
        this.mostrarMensagemDeSucesso('Classe salva com sucesso!');
      },
      () => {
        this.mostrarMensagemDeErro('Ocorreu um erro ao salvar a classe.');
      }
    );
  }
  
  isValidDate(date: string): boolean {
    const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
    return datePattern.test(date);
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
