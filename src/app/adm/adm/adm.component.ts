import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {

 
  selectedContent: string = ''; 
  showContent(content: string) {
    this.selectedContent = content; 
  }

  getContent(){
    return this.selectedContent;
  }
}
