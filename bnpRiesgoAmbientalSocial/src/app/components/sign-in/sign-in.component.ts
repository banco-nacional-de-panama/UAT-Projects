import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  appID: string = 'riesgo-ambiental';
  appName: string = 'Gestion de Riesgo Ambiental';
  appSupportContact = "Eduardo Méndez";
  appAPIURL = environment.apiUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
