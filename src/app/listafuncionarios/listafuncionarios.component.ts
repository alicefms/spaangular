import { Component, OnInit } from '@angular/core';
import { pessoa } from '../home/model/pessoa';


@Component({
  selector: 'spa-listafuncionarios',
  templateUrl: './listafuncionarios.component.html',
  styleUrls: ['./listafuncionarios.component.css']
})
export class ListafuncionariosComponent implements OnInit {

  constructor() { }

  ListaFuncionarios: pessoa[] = [
    {nome: 'Alice Moraes', 
      email: 'alice@spa.com',
      contato2: '@alicem',
      celular: 98989898,
      urlFoto: 'https://images.generated.photos/6lB3u1JZe65hzgOR0Kl6TJRflPWBZm42srZ5M7YViwI/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMTQ1ODMuanBn.jpg'},
  
      {nome: 'Amalia medeiros', 
      email: 'amalia@spa.com',
      contato2: '@amaliam',
      celular: 97569858,
      urlFoto: 'https://images.generated.photos/9iZKQGGkaxYODdeSZO3UMC_14zAKajQdx7xCjTlwd-g/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NTkwNzcuanBn.jpg'},
  
      {nome: 'Gildo Neto', 
      email: 'gildo@spa.com',
      contato2: '@gdneto',
      celular: 98989666,
      urlFoto: 'https://media-exp1.licdn.com/dms/image/C4E03AQH0uWfvB2oGFw/profile-displayphoto-shrink_200_200/0/1525429958937?e=1620864000&v=beta&t=75C7zzERH7OinDYjmKNuZqAe8slb12nWm28n3mt4en8'}
  
  ]

  ngOnInit(): void {
  }
  
}
