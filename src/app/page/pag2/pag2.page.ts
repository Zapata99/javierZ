import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {

  nombre: '';
  apellidos: '';
  localidad: '';
  estudios: '';
  email: '';
  contrasena: '';

  constructor() { }

  ngOnInit() {
  }

}
