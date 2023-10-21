import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { Ator } from "../../ator/model/ator";
import { AtorService } from "../../ator/services/ator.service";
import { Classe } from "../../classe/model/classe";
import { ClasseService } from "../../classe/services/classe.service";
import { Diretor } from "../../diretor/model/diretor";
import { DiretorService } from "../../diretor/services/diretor.service";
import { Item } from "../../item/model/item";
import { ItemService } from "../../item/services/item.service";
import { Titulo } from "../model/titulo";
import { TituloService } from "../services/titulo.service";


@Component({
  selector: 'app-titulo-form',
  templateUrl: './titulo-form.component.html',
  styleUrls: ['./titulo-form.component.css']
})
export class TituloFormComponent implements OnInit{
  form: FormGroup;


  classes: Classe[] = [];
  atores: Ator[] = [];
  diretores: Diretor[] = [];
  itens: Item[] = [];
  constructor(private formBuilder: FormBuilder,
    private servicoClasse: ClasseService,
    private servicoAtor: AtorService,
    private servicoDiretor: DiretorService,
    private servicoTitulo: TituloService,
    private servicoItem: ItemService,
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

    // Carregar dados das classes
    this.servicoClasse.list().subscribe(classesBD => {
      this.classes = classesBD;
    });

    // Carregar dados dos diretores
    this.servicoDiretor.list().subscribe(diretoresBD => {
      this.diretores = diretoresBD;
    });

    // Carregar dados dos atores
    this.servicoAtor.list().subscribe(atoresBD => {
      this.atores = atoresBD;
    });

    // carregar dados dos itens
    this.servicoItem.list().subscribe(itensBD => {
      this.itens = itensBD;
    });
  }


  ngOnInit(): void{
    this.route2.params.subscribe(
      (params: any) =>{
        const id = params['id'];
        const titulo$ = this.servicoTitulo.loadById(id);
        titulo$.subscribe(titulo => {
          this.updateForm(titulo);
        });
      }
    );
  }  

  updateForm(titulo: Titulo ){
    this.form.patchValue({
      _id: titulo._id,
      nome: titulo.nome,
      ano: titulo.ano,
      sinopse: titulo.sinopse,
      categoria: titulo.categoria,
      // atores: titulo.atores,
      // classe: titulo.classe,
      // diretor: titulo.diretor,
      // itens: titulo.itens
    });
  }


  salvar() {
    const formData = this.form.value;

    if (!formData.nome || !formData.ano || !formData.sinopse || !formData.categoria || !formData.classe || !formData.diretor) {
      this.mostrarMensagemDeErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    if (!formData.atores || formData.atores.length === 0) {
      this.mostrarMensagemDeErro('Selecione pelo menos um ator.');
      return;
    }

    this.servicoTitulo.save(formData).subscribe(
      () => {
        this.form.reset();
        this.mostrarMensagemDeSucesso('Titulo salvo com sucesso!');
      }, () => {
        this.mostrarMensagemDeErro('Ocorreu um erro ao salvar o titulo.');
      }
    );
  }

  mostrarMensagemDeSucesso(mensagem: string) {
    this._snackBar.open(mensagem, 'Fechar', {
      duration: 2000,
    });
  }

  mostrarMensagemDeErro(mensagem: string) {
    this._snackBar.open(mensagem, 'Fechar', {
      duration: 2000,
    });
  }

  cancelar() {
    this.router.navigate(['principal/adm']);
  }
}
