import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretorRoutingModule } from './diretor-routing.module';
import DiretorComponent from './diretor/diretor.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DiretorRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class DiretorModule { }
