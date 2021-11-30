import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/cliente', icon: 'desktop' },
    { title: 'Nuestras Modelos', url: '/modelos', icon: 'people-circle' },
    { title: 'Alertas', url: '/alertas', icon: 'notifications' },
    { title: 'Mis Eventos', url: '/eventos', icon: 'calendar' },
    { title: 'Mis favoritos', url: '/favoritos', icon: 'star' },
    { title: 'Mis Reservas', url: '/reservas', icon: 'list-circle' },
    { title: 'Invitar Usuarios', url: '/invitar-user', icon: 'share-social' },
    { title: 'Preguntas Frecuentes', url: '/preguntas-frecuentes', icon: 'help' },
    { title: 'Acuerdos y licencias', url: '/acuerdos', icon: 'document-text' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
