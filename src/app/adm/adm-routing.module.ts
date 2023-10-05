import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtorFormComponent } from '../ator/ator-form/ator-form.component';
import { AdmComponent } from './adm/adm.component';
import { ClasseFormComponent } from '../classe/classe-form/classe-form.component';
import { DiretorFormComponent } from '../diretor/diretor-form/diretor-form.component';

const routes: Routes = [
  { path: '', component: AdmComponent },
  { path: 'newAtorForm', component: AtorFormComponent },
  { path: 'newClasseForm', component: ClasseFormComponent },
  { path: 'newDiretorForm', component: DiretorFormComponent },


  //---------------------------------------------------------------------
  { path: 'editarAtor/:id', component: AtorFormComponent },
  { path: 'editarClasse/:id', component: ClasseFormComponent },
  { path: 'editarDiretor/:id', component: DiretorFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
