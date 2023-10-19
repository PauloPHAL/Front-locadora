import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorFormComponent } from './ator-form/ator-form.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtorRoutingModule { }
