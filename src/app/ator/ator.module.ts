import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AtorRoutingModule } from './ator-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class AtorModule { }
