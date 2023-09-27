import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent {

  formAtor: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.formAtor = this.formBuilder.group({
      nome:[null],
    });
  }

  salvar(){
    console.log(this.formAtor.value);
  }

  cancelar(){

  }

  // <!-- <mat-label>Nome Ator:</mat-label>
  // <mat-select formControlName="nome">
  //     <mat-option value="null"></mat-option>
  //     <mat-option value="Front-end">Front-End</mat-option>
  //     <mat-option value="Back-end">Back-End</mat-option>
  // </mat-select> -->



}
