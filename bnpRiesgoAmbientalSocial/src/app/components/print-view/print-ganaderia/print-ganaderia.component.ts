import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-print-ganaderia',
  templateUrl: './print-ganaderia.component.html',
  styleUrls: ['./print-ganaderia.component.css'],
})
export class PrintGanaderiaComponent implements OnInit {
  formularioFormGroup!: FormGroup;
  formCode!: any;
  arrayData!: any;
  userMod!: any;
  dateMod!:any;
  constructor(
    public uApi: ApiService,
    public _formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.formCode = localStorage.getItem('form_code');
    this.uApi.callGetExecute('17', this.formCode || '').subscribe((res) => {
      
      this.arrayData = res[0];
      this.getAporbador();
    });
  }

  validateDataFromDB(data: any) {
    if (data == null || data == undefined) {
      return '';
    } else if (data == true) {
      return 'Si';
    } else if (data == false) {
      return 'No';
    } else {
      return data;
    }
  }

  printDocument() {
    window.print();
  }

  getAporbador() {
    let uniqueKey = localStorage.getItem('uniqueKeyValue');
    this.uApi.callGetExecute('21', uniqueKey || '').subscribe((res) => {
      let user_mod = res;
      this.userMod = user_mod[0].modification_user;
      this.dateMod = user_mod[0].modification_date;
    });
  }

  returnMainPage() {
    this.router.navigate(['/auth/home']);
  }
}
