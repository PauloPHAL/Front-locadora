import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.css']
})
export class ClasseFormComponent {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private servicoClasse: ClasseService,
    private _snackBar: MatSnackBar){
    this.form = this.formBuilder.group({
      nome:[null],
      valor:[null],
      dataDevolucao:[null]
    });
  }

  salvar(){
    this.servicoClasse.save(this.form.value).subscribe(result => console.log(result), erro => this.erro());
  }

  cancelar(){

  }

  private erro(){
    this._snackBar.open("erro!",'',{duration:(5000)});
  }

}
