import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DiretorService } from '../services/diretor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Diretor } from '../model/diretor';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent implements OnInit{
  form: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private servicoDiretor: DiretorService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route2: ActivatedRoute){
    this.form = this.formBuilder.group({
      _id: [null],
      nome:[null],
    });
  }

  ngOnInit(): void{
    this.route2.params.subscribe(
      (params: any) =>{
        const id = params['id'];
        //console.log(id);
        const diretor$ = this.servicoDiretor.loadById(id);
        diretor$.subscribe(diretor => {
          this.updateForm(diretor);
        });
      }
    );

    
  }  

  updateForm(diretor: Diretor ){
    this.form.patchValue({
      _id: diretor._id,
      nome: diretor.nome
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
    this.router.navigate(['principal/adm']);
  }

}
