import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent {

  form: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      nome:[null]
    });
  }
}
