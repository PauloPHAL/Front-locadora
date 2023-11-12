import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AdmComponent } from '../adm/adm/adm.component';
import { AtorFormComponent } from '../Controle-Acervo/ator/ator-form/ator-form.component';
import { ClasseFormComponent } from '../Controle-Acervo/classe/classe-form/classe-form.component';
import { DiretorFormComponent } from '../Controle-Acervo/diretor/diretor-form/diretor-form.component';
import { ItemFormComponent } from '../Controle-Acervo/item/item-form/item-form.component';
import { TituloFormComponent } from '../Controle-Acervo/titulo/titulo-form/titulo-form.component';
import { ClienteFormComponent } from '../Controle-Cliente/cliente/cliente-form/cliente-form.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'adm/newAtorForm', component: AtorFormComponent },
  { path: 'adm/newClasseForm', component: ClasseFormComponent },
  { path: 'adm/newDiretorForm', component: DiretorFormComponent },
  { path: 'adm/newTituloForm', component: TituloFormComponent },
  { path: 'adm/newItemForm', component: ItemFormComponent },
  { path: 'adm/newClienteForm', component: ClienteFormComponent },

  //---------------------------------------------------------------------
  { path: 'adm/editarAtor/:id', component: AtorFormComponent },
  { path: 'adm/editarClasse/:id', component: ClasseFormComponent },
  { path: 'adm/editarDiretor/:id', component: DiretorFormComponent },
  { path: 'adm/editarTitulo/:id', component: TituloFormComponent },
  { path: 'adm/editarItem/:id', component: ItemFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
