import { Component, OnInit } from '@angular/core';
import { Ator } from '../model/ator';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})
export class AtorComponent implements OnInit{

  listaAtor: Ator[] = [
    {_id:'1', nome:'paulo'}
  ];
  displayedColumns = ['_id','nome'];

  constructor(){
    //this.listaAtor = [];
  }

  ngOnInit(): void {
      
  }

  editarAtor(ator: Ator): void {
    
  }

  // Operação de exclusão (Excluir um ator)
  excluirAtor(id: number): void {
    
  }

}
