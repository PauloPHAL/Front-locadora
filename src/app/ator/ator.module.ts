import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AtorRoutingModule } from './ator-routing.module';
import { AtorFormComponent } from './ator-form/ator-form.component';

@NgModule({
  declarations: [
  
    AtorFormComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class AtorModule { }
