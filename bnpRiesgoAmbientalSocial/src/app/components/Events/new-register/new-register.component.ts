import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreatecustomerComponent } from '../createcustomer/createcustomer.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css'],
})
export class NewRegisterComponent implements OnInit {
  uniqueKeyVaule!: any;
  formClasification!: any;
  formGeneral!: any;
  formFollow!: any;
  formSectorial!: any;
  registedClients!: any;
  customerNumber!: any;
  sectorSelected!: any;
  exclusionComment!: any;
  listaExclusion = false;
  showRenewal = false;
  clicked = false;
  postSendCounter!: number

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private uApi: ApiService,
    public dialogRef: MatDialogRef<NewRegisterComponent>
  ) {}

  ngOnInit(): void {
    this.postSendCounter = 0;
    this.sectorSelected = 'IND';
    this.getUniqueKeyValue();
    this.uApi.callGetExecute('8','').subscribe((res) => {
      this.registedClients = res;
    });
  }

  getUniqueKeyValue() {
    this.uApi.callGetExecute('1','').subscribe((res) => {
      this.uniqueKeyVaule = 'RISK-' + res[0].new_unique_key;
      this.formClasification = 'CLA-' + res[0].new_unique_key;
      this.formGeneral = 'GEN-' + res[0].new_unique_key;
      this.formFollow = 'SEG-' + res[0].new_unique_key;
      this.formSectorial = 'IND-' + res[0].new_unique_key;
      localStorage.setItem('uniqueKeyValue', res[0].new_unique_key);
    });
  }

  getSelectedCustomer(data: any) {
    if (data != null) {
      this.customerNumber = data;
    }
  }

  setCurrentSectorialForm(opction: string) {
    let unique_number = localStorage.getItem('uniqueKeyValue');
    this.formSectorial = opction + '-' + unique_number;
    this.sectorSelected = opction;
  }

  postNewRegister() {
    this.clicked = true;
    if(this.postSendCounter > 1){
      this._snackBar.open('Ya se envio a creacion de este cliente, cierre el formulario y vuelva a ingresar!', 'Cerrar', {
        duration: 3 * 1000,
      });
    }
    else {
      if(this.showRenewal == false){
        if (this.customerNumber != null) {
          let dataArray = {
            opcion: '2',
            SQLStr:
              this.customerNumber +
              ',' +
              localStorage.getItem('uniqueKeyValue') +
              ',' +
              this.sectorSelected +
              ',' +
              this.listaExclusion +
              ',' +
              this.exclusionComment +
              ',' +
              localStorage.getItem('username'),
          };
          this.uApi.callPostExecute(dataArray).subscribe((res) => {
            this.postSendCounter = 1;
            this.dialogRef.close({ event: 'Done' });
          });
        } else {
          this._snackBar.open('Debe seleccionar un cliente registrado!', 'Cerrar', {
            duration: 3 * 1000,
          });
        }
      } else if (this.showRenewal == true){
        if (this.customerNumber != null) {
          let dataArray = {
            opcion: '19',
            SQLStr:
              this.customerNumber +
              ',' +
              localStorage.getItem('uniqueKeyValue') +
              ',' +
              localStorage.getItem('username'),
          };
          
          this.uApi.callPostExecute(dataArray).subscribe((res) => {
            this.dialogRef.close({ event: 'Done' });
          });
        } else {
          this._snackBar.open('Debe seleccionar un cliente registrado!', 'Cerrar', {
            duration: 3 * 1000,
          });
        }
      }
    }


  }

  openNewCustomer() {
    let dialogRef = this.dialog.open(CreatecustomerComponent);

    dialogRef.afterClosed().subscribe((results) => {
      this.ngOnInit();
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  getShowRenewal(opction: string){
    if(opction == '0'){
      this.showRenewal = false
    }else if(opction == '1'){
      this.showRenewal = true;
    }
  }
}
