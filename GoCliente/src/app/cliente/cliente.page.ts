import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  Modelos(){
    this.router.navigate(['/modelos']);
  }

  Alertas(){
    this.router.navigate(['/alertas']);
  }

  Unete(){
    this.router.navigate(['/eventos']);
  }

  Eventos(){
    this.router.navigate(['/eventos']);
  }

  Ajustes(){
    this.router.navigate(['/eventos']);
  }
}
