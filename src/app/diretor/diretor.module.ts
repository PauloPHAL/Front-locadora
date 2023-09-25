import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretorRoutingModule } from './diretor-routing.module';
import DiretorComponent from './diretor/diretor.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { DiretorFormComponent } from './diretor-form/diretor-form.component';


@NgModule({
  declarations: [
    DiretorFormComponent
  ],
  imports: [
    CommonModule,
    DiretorRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class DiretorModule { }
