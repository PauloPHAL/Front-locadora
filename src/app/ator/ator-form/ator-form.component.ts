import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AtorService } from '../services/ator.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private servicoAtor: AtorService,
    private _snackBar: MatSnackBar){
    this.form = this.formBuilder.group({
      nome:[null],
    });
  }

  salvar(){
    this.servicoAtor.save(this.form.value).subscribe(result => console.log(result), erro => this.erro());
  }

  cancelar(){

  }

  private erro(){
    this._snackBar.open("erro!",'',{duration:(5000)});
  }
  // <!-- <mat-label>Nome Ator:</mat-label>
  // <mat-select formControlName="nome">
  //     <mat-option value="null"></mat-option>
  //     <mat-option value="Front-end">Front-End</mat-option>
  //     <mat-option value="Back-end">Back-End</mat-option>
  // </mat-select> -->



}
