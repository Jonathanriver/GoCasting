import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  date: string;
  type: 'string';
  constructor(
   
  ) {


  }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

}
