import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtorFormComponent } from '../ator/ator-form/ator-form.component';
import { AdmComponent } from './adm/adm.component';
import { ClasseFormComponent } from '../classe/classe-form/classe-form.component';
import { DiretorFormComponent } from '../diretor/diretor-form/diretor-form.component';
import { TituloFormComponent } from '../titulo/titulo-form/titulo-form.component';
import { ItemFormComponent } from '../item/item-form/item-form.component';

const routes: Routes = [
  { path: '', component: AdmComponent },
  { path: 'newAtorForm', component: AtorFormComponent },
  { path: 'newClasseForm', component: ClasseFormComponent },
  { path: 'newDiretorForm', component: DiretorFormComponent },
  { path: 'newTituloForm', component: TituloFormComponent },
  { path: 'newItemForm', component: ItemFormComponent },

  //---------------------------------------------------------------------
  { path: 'editarAtor/:id', component: AtorFormComponent },
  { path: 'editarClasse/:id', component: ClasseFormComponent },
  { path: 'editarDiretor/:id', component: DiretorFormComponent },
  { path: 'editarTitulo/:id', component: TituloFormComponent },
  { path: 'editarItem/:id', component: ItemFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
