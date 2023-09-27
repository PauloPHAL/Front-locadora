import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtorFormComponent } from '../ator/ator-form/ator-form.component';
import { AtorComponent } from '../ator/ator/ator.component';
import { ClasseComponent } from '../classe/classe/classe.component';
import DiretorComponent from '../diretor/diretor/diretor.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm/adm.component';



@NgModule({
  declarations: [
    AdmComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent,
    AtorFormComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    AppMaterialModule
    
  ]
})
export class AdmModule { }
