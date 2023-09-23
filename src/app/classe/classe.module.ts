import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseComponent } from './classe/classe.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ClasseModule { }
