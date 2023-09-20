import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm/adm.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AtorComponent } from '../ator/ator/ator.component';



@NgModule({
  declarations: [
    AdmComponent,
    AtorComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    AppMaterialModule
    
  ]
})
export class AdmModule { }
