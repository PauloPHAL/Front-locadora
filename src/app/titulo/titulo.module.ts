import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TituloRoutingModule } from './titulo-routing.module';
import { TituloComponent } from './titulo/titulo.component';
import { TituloFormComponent } from './titulo-form/titulo-form.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TituloRoutingModule
  ]
})
export class TituloModule { }
