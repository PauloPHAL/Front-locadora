import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorRoutingModule } from './ator-routing.module';
import { AtorComponent } from './ator/ator.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

@NgModule({
  declarations: [
    AtorComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    AppMaterialModule
  ]
})
export class AtorModule { }
