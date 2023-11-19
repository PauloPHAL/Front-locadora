import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Socio } from '../model/socio';
import { Depedente } from '../model/depedente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  form: FormGroup
  selectedContent: string | null = null;

  socios: Socio[] = [];
  dependentes: Depedente[] = [];
  constructor(private formBuilder: FormBuilder, 
    private servicoCliente: ClienteService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route2: ActivatedRoute
    ){
    this.form = this.formBuilder.group({
      _id: [null],
      nome:[null],
      numInscricao:[null],
      dtNascimento:[null],
      sexo:[null],
      isAtivo:[null],
      cpf:[null],
      endereco:[null],
      telefone:[null],
      tipoCliente:[null],
      socio:[null],
      depedentes:[null]
    });

    this.servicoCliente.listSocios().subscribe(sociosBD => {
      this.socios = sociosBD;
    });
    
    this.servicoCliente.listDependentes().subscribe(dependentesDB => {
      this.dependentes = dependentesDB;
    });
  }

  showContent(content: string) {
    this.selectedContent = content; 
  }

  getContent(){
    return this.selectedContent;
  }

  ngOnInit(): void {
    this.route2.params.subscribe((params: any) => {
      const id = params['id'];
      let socio: Socio | null = null;
      let dependente: Depedente | null = null;
      this.servicoCliente.loadById(id).subscribe(cliente => {
        if (cliente.tipoCliente === 'Socio') {
          socio = cliente as Socio;
          if (socio !== null) {
            this.updateFormForSocio(socio);
          }
        } else if (cliente.tipoCliente === 'Dependente') {
          dependente = cliente as Depedente;
          if (dependente !== null) {
            this.updateFormForDependente(dependente);
          }
        }
      });
    });
  }

  updateFormForSocio(cliente: Socio ){
    this.form.patchValue({
      _id: cliente._id,
      nome:cliente.nome,
      numInscricao:cliente.numInscricao,
      dtNascimento:cliente.dtNascimento,
      sexo:cliente.sexo,
      isAtivo:cliente.isAtivo,
      tipoCliente:cliente.tipoCliente,
      cpf:cliente.cpf,
      endereco:cliente.endereco,
      telefone:cliente.telefone,
      depedentes:cliente.depedentes
    });
    //console.log(cliente);
  }

  updateFormForDependente(cliente: Depedente){
    this.form.patchValue({
      _id: cliente._id,
      nome:cliente.nome,
      numInscricao:cliente.numInscricao,
      dtNascimento:cliente.dtNascimento,
      sexo:cliente.sexo,
      isAtivo:cliente.isAtivo,
      tipoCliente:cliente.tipoCliente,
      socio:cliente.socio
    });
    //console.log(cliente);
  }

  salvar() {
    const formData = this.form.value;
  
    this.servicoCliente.save(formData).subscribe(
      () => {
        this.form.reset();
        this.mostrarMensagemDeSucesso('Cliente salvo com sucesso!');
      },
      () => {
        this.mostrarMensagemDeErro('Ocorreu um erro ao salvar o cliente.');
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

  cancelar(){
    this.router.navigate(['principal/adm']);
  }
}
