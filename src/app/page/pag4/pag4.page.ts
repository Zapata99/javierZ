import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag4',
  templateUrl: './pag4.page.html',
  styleUrls: ['./pag4.page.scss'],
})
export class Pag4Page implements OnInit {

  pagina = [
    {
      icono: 'alarm-outline',
      nombre: 'Procesos y Servicios',
    },
    {
      icono: 'bicycle-outline',
      nombre: 'Desarrollo de Interfaces',
    },
    {
      icono: 'battery-charging-outline',
      nombre: 'Sistemas de Gestión Empresarial',
    },
    {
      icono:'call-outline',
      nombre: 'Acceso a Datos',
    },
    {
      icono: 'business-outline',
      nombre: 'Programación multimedia',
    },
    {
      icono: 'happy-outline',
      nombre: 'Empresas',
    }




  ]

  constructor() { }

  ngOnInit() {
  }

}
