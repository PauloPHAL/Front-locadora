import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AtorFormComponent } from '../ator/ator-form/ator-form.component';
import { AtorComponent } from '../ator/ator/ator.component';
import { ClasseFormComponent } from '../classe/classe-form/classe-form.component';
import { ClasseComponent } from '../classe/classe/classe.component';
import { DiretorFormComponent } from '../diretor/diretor-form/diretor-form.component';
import DiretorComponent from '../diretor/diretor/diretor.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm/adm.component';


@NgModule({
  declarations: [
    AdmComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent,
    AtorFormComponent,
    ClasseFormComponent,
    DiretorFormComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdmModule { }
