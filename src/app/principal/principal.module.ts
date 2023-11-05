import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AdmComponent } from '../adm/adm/adm.component';
import { AtorFormComponent } from '../Controle-Acervo/ator/ator-form/ator-form.component';
import { AtorComponent } from '../Controle-Acervo/ator/ator/ator.component';
import { ClasseFormComponent } from '../Controle-Acervo/classe/classe-form/classe-form.component';
import { ClasseComponent } from '../Controle-Acervo/classe/classe/classe.component';
import { DiretorFormComponent } from '../Controle-Acervo/diretor/diretor-form/diretor-form.component';
import DiretorComponent from '../Controle-Acervo/diretor/diretor/diretor.component';
import { ItemFormComponent } from '../Controle-Acervo/item/item-form/item-form.component';
import { ItemComponent } from '../Controle-Acervo/item/item/item.component';
import { TituloFormComponent } from '../Controle-Acervo/titulo/titulo-form/titulo-form.component';
import { TituloComponent } from '../Controle-Acervo/titulo/titulo/titulo.component';
import { ClienteComponent } from '../Controle-Cliente/cliente/cliente/cliente.component';
import { ClienteFormComponent } from '../Controle-Cliente/cliente/cliente-form/cliente-form.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    AdmComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent,
    ItemComponent,
    TituloComponent,
    ClienteComponent,
    //------------------------------------------
    AtorFormComponent,
    ClasseFormComponent,
    DiretorFormComponent,
    ItemFormComponent,
    TituloFormComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class PrincipalModule { }
