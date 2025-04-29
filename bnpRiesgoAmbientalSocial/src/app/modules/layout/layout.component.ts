import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared-library';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  appID: string = 'riesgo-ambiental';
  appName: string = 'Gestión de Riesgo Ambiental';
  appFooterEmail: string = 'procesosrpa@banconal.com.pa';
  appWelcomeTitle: string = 'Bienvenido(a) al  Sistema de Gestión de Riesgo Ambiental';
  appWelcomeBody: string = '<p>Gestión de Riesgo Ambiental.</p>'

  constructor(private _auth : AuthService) { }

  userRole!: any;

  ngOnInit(): void {
    this._auth.appID = this.appID;
   this.userRole = this._auth.role;
   localStorage.setItem('username',this._auth.user);
  }

}
