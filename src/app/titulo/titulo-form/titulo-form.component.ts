import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AtorService } from 'src/app/ator/services/ator.service';
import { ClasseService } from 'src/app/classe/services/classe.service';
import { DiretorService } from 'src/app/diretor/services/diretor.service';
import { TituloService } from '../services/titulo.service';
import { Classe } from 'src/app/classe/model/classe';
import { Ator } from 'src/app/ator/model/ator';
import { Diretor } from 'src/app/diretor/model/diretor';

@Component({
  selector: 'app-titulo-form',
  templateUrl: './titulo-form.component.html',
  styleUrls: ['./titulo-form.component.css']
})
export class TituloFormComponent {
  form: FormGroup


  classes: Classe[] = [];
  atores: Ator[] = [];
  diretores: Diretor[] = [];
  constructor(private formBuilder: FormBuilder,
    private servicoClasse: ClasseService,
    private servicoAtor: AtorService,
    private servicoDiretor: DiretorService,
    private servicoTitulo: TituloService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route2: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      _id: [null],
      nome: [null],
      ano: [null],
      sinopse: [null],
      categoria: [null],
      atores: [null],
      classe: [null],
      diretor: [null],
      itens: [null]
    });

    this.servicoClasse.list().subscribe(classesBD => {
      this.classes= classesBD;
      //console.log(this.classes);
    });
  
    // Carregar dados dos diretores
    this.servicoDiretor.list().subscribe(diretoresBD => {
      this.diretores = diretoresBD;
      //console.log(this.diretores);
    });
  
    // Carregar dados dos atores
    this.servicoAtor.list().subscribe(atoresBD => {
      this.atores = atoresBD;
      //console.log(this.atores);
    });
  }


  salvar(){
    const formData = this.form.value;

    console.log(formData);
    this.servicoTitulo.save(formData).subscribe(
      () => {
        // Limpar o formulário ou realizar outras ações após salvar com sucesso
        this.form.reset();
        this.mostrarMensagemDeSucesso('Titulo salvo com sucesso!');
      },() => {
        this.mostrarMensagemDeErro('Ocorreu um erro ao salvar o titulo.');
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
