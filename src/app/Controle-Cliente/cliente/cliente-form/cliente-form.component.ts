import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Socio } from '../model/socio';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  form: FormGroup
  selectedContent: string | null = null;

  socios: Socio[] = [];
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
    
  }

  showContent(content: string) {
    this.selectedContent = content; 
  }

  getContent(){
    return this.selectedContent;
  }

  ngOnInit(): void{
    this.route2.params.subscribe(
      (params: any) =>{
        const id = params['id'];
        const cliente$ = this.servicoCliente.loadById(id);
        cliente$.subscribe(cliente => {
          this.updateForm(cliente);
        });
      }
    );
    
  }  

  updateForm(cliente: Cliente ){
    // this.form.patchValue({
    //   _id: classe._id,
    //   nome: classe.nome,
    //   valor: classe.valor,
    //   dataDevolucao: classe.dataDevolucao
    // });
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
