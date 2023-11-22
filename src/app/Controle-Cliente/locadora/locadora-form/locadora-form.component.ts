import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocadoraService } from '../service/locadora.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../cliente/model/cliente';
import { Item } from 'src/app/Controle-Acervo/item/model/item';
import { ClienteService } from '../../cliente/services/cliente.service';
import { ItemService } from 'src/app/Controle-Acervo/item/services/item.service';

@Component({
  selector: 'app-locadora-form',
  templateUrl: './locadora-form.component.html',
  styleUrls: ['./locadora-form.component.css']
})
export class LocadoraFormComponent {
 
  form: FormGroup

  clientes: Cliente[] = [];
  itens: Item[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private locacaoService: LocadoraService,
    private servicoItem: ItemService,
    private servicoCliente: ClienteService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route2: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      _id: [null],
      valorMulta:[null],
      dataLocacao:[null],
      dataDevolucao:[null],
      cliente:[null],
      item:[null],
      type:[null]
    });

    this.servicoCliente.list().subscribe(clienteBD => {
      this.clientes = clienteBD;
    });

    this.servicoItem.list().subscribe(itensBD => {
      this.itens = itensBD;
    });


  }



  salvar() {
    const formData = this.form.value;
    this.form.value.type = formData.cliente.tipoCliente;
    this.locacaoService.save(formData).subscribe(
      () => {
        this.form.reset();
        this.mostrarMensagemDeSucesso('Filme locado com sucesso!');
      },
      () => {
        this.mostrarMensagemDeErro('Ocorreu um erro ao locar o filme.');
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

  cancelar(){
    this.router.navigate(['principal/adm']);
  }

}
