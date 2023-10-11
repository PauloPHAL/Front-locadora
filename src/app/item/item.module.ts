import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item/item.component';
import { ItemFormComponent } from './item-form/item-form.component';


@NgModule({
  declarations: [
    ItemComponent,
    ItemFormComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
