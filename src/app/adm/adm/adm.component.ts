import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {

  constructor(
    private router: Router
  ){

  }
 
  selectedContent: string = ''; 
  showContent(content: string) {
    this.selectedContent = content; 
  }

  getContent(){
    return this.selectedContent;
  }

  cancelar() {
    this.router.navigate(['/principal']);
  }
}
