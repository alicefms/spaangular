import { Component, OnInit } from '@angular/core';
import { ListafuncionariosComponent } from '../listafuncionarios/listafuncionarios.component';


@Component({

  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  exibir: Boolean = false;

  exibirtabela(){
  this.exibir = true;}

  escondertabela() {
    this.exibir = false;
  }


  ngOnInit() : void { }

}

