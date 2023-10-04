import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    ErroDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErroDialogComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
