import { Component } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
  selectedContent: string = ''; // Variável para rastrear o conteúdo selecionado

  showContent(content: string) {
    this.selectedContent = content; // Defina o conteúdo selecionado com base no botão clicado
  }

  getContent(){
    return this.selectedContent;
  }
}
