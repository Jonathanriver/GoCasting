import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelosService } from '../modelos.service';
import { Task } from './../interfaces/task';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { data } from 'jquery';

import * as $ from "jquery";

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.page.html',
  styleUrls: ['./modelos.page.scss'],
})
export class ModelosPage implements OnInit {
  tasks: Task[] = [];
  Modelos: any;

  constructor(
    private router: Router,
    public Provedor: ModelosService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public http: HttpClient
  ) { }




  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();

    this.http.get('https://kemba.com.co/apirest_wpasigma/index.php/Usuarios/BucarUser/2').map(res => res).subscribe(val => {
      let valor = val['response'];

      console.log(valor);
     });
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      duration: 2000
    });
    await loading.present();
    return loading;
  }


  Detalle() {
    this.router.navigate(['/detalle-modelo']);
  }

}
