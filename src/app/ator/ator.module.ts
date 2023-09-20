import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorRoutingModule } from './ator-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    AppMaterialModule
  ]
})
export class AtorModule { }
