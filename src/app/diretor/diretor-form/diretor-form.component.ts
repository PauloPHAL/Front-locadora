import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DiretorService } from '../services/diretor.service';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent {
  form: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private servicoDiretor: DiretorService,
    private _snackBar: MatSnackBar){
    this.form = this.formBuilder.group({
      nome:[null],
    });
  }

  salvar(){
    this.servicoDiretor.save(this.form.value).subscribe(result => console.log(result), erro => this.erro());
  }

  cancelar(){

  }

  private erro(){
    this._snackBar.open("erro!",'',{duration:(5000)});
  }

}
