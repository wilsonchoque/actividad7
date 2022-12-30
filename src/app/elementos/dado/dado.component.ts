import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  numero: number = 0;
  numRandom!: number;
 
  alazar(){
    this.numRandom = Math.floor((Math.random()*(6-1+1))+1);
      if(this.numero == this.numRandom ){              
        this.alazar();
      }else{
        this.numero =  this.numRandom;
    }    
  }
}
