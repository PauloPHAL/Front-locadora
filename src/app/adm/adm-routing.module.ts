import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './adm/adm.component';
import { AtorFormComponent } from '../ator/ator-form/ator-form.component';

const routes: Routes = [
  { path: '', component: AdmComponent},
  {path:'newAtorForm', component: AtorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
