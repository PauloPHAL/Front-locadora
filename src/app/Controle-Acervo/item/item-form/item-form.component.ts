import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { Titulo } from "../../titulo/model/titulo";
import { TituloService } from "../../titulo/services/titulo.service";
import { Item } from "../model/item";
import { ItemService } from "../services/item.service";


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit{
  form: FormGroup;

  titulos: Titulo[] = [];

  constructor(private formBuilder: FormBuilder,
    private servicoTitulo: TituloService,
    private servicoItem: ItemService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route2: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      _id: [null],
      numSerie: [null],
      dataAquisicao: [null],
      tipoItem: [null],
      titulo: [null]
    });

    // carregar dados dos titulos
    this.servicoTitulo.list().subscribe(titulosBD => {
      this.titulos = titulosBD;
    });
  }

  ngOnInit(): void{
    this.route2.params.subscribe(
      (params: any) =>{
        const id = params['id'];
        const item$ = this.servicoItem.loadById(id);
        item$.subscribe(item => {
          this.updateForm(item);
        });
      }
    );
  }  

  updateForm(item: Item ){
    this.form.patchValue({
      _id: item._id,
      numSerie: item.numSerie,
      dataAquisicao: item.dataAquisicao,
      tipoItem: item.tipoItem,
    });
  }

  salvar() {
    const formData = this.form.value;

    this.servicoItem.save(formData).subscribe(
      () => {
        this.form.reset();
        this.mostrarMensagemDeSucesso('Item salvo com sucesso!');
      }, () => {
        this.mostrarMensagemDeErro('Ocorreu um erro ao salvar o item.');
      }
    );
    console.log(formData);
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
