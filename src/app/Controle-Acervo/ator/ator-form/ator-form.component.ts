import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AtorService } from '../services/ator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Ator } from '../model/ator';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent implements OnInit{

  form: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private servicoAtor: AtorService,
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
        const ator$ = this.servicoAtor.loadById(id);
        ator$.subscribe(ator => {
          this.updateForm(ator);
        });
      }
    );

    
  }  

  updateForm(ator: Ator ){
    this.form.patchValue({
      _id: ator._id,
      nome: ator.nome
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
