import { Component, Inject, OnInit, Optional, Renderer2 } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommentDialogComponent } from 'src/app/components/Events/comment-dialog/comment-dialog.component';
import { ApiService } from 'src/app/service/api.service';

export interface requestData {
  currentUniqueKey: string;
  mode: string;
}

@Component({
  selector: 'app-admin-sub-regist',
  templateUrl: './admin-sub-regist.component.html',
  styleUrls: ['./admin-sub-regist.component.css'],
})
export class AdminSubRegistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  arrayData!: any;
  faseAprovacion = false;
  faseInclusion = false;
  faseGerente = false;
  datatable = false;
  habilitarRegistro = false;
  isDecision = true;
  constructor(
    public dialogRef: MatDialogRef<AdminSubRegistComponent>,
    public renderer: Renderer2,
    public router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public uApi: ApiService,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: requestData
  ) {}

  highLvlRisk = false;

  ngOnInit(): void {
    this.dtOptions = {};
    this.callSubTickets();
  }

  callSubTickets() {
    this.uApi.callGetExecute('6', this.data.currentUniqueKey).subscribe({
      next: (res) => {
        this.arrayData = res;
        this.datatable = true;
      },
      error: (err) => {},
      complete: () => {
        this.getTableMode();
        this.getKeyRiskLevel();
      },
    });
  }

  getKeyRiskLevel() {
    this.uApi.callGetExecute('38', this.data.currentUniqueKey).subscribe({
      next: (res) => {
        if (res[0].NIVEL == 'alto') {
          this.highLvlRisk = true;
        } else {
          this.highLvlRisk = false;
        }
      },
      error: (err) => {},
      complete: () => {
        this.getTableMode();
      },
    });
  }

  sendKeyToApproval() {
    let dialogRef = this.dialog.open(CommentDialogComponent);

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        let msg = res.event;
        let dataArray = {
          opcion: '21',
          SQLStr: this.data.currentUniqueKey + ',' + msg,
        };
        this.uApi.callPostExecute(dataArray).subscribe({
          next: (res) => {
            this._snackBar.open('Registro enviado a evaluación!', 'Cerrar', {
              duration: 3 * 1000,
            });
          },
          error: (err) => {
            this._snackBar.open(err, 'Cerrar', {
              duration: 3 * 1000,
            });
          },
        });
      },
      complete: () => {
        this.closeDialog('approval');
      },
    });
  }

  doSomethingWithBotton(option: any, code: any, data: any) {
    localStorage.setItem('form_code', code || '');
    if (data == 'CLA') {
      this.router.navigate(['/auth//adm-clasification-view']);
      this.closeDialog(data);
    } else if (data == 'GEN') {
      this.router.navigate(['/auth/adm-general-view']);
      this.closeDialog(data);
    } else if (data == 'SEG') {
      this.router.navigate(['/auth/adm-SEG-view']);
      this.closeDialog(data);
    } else {
      this.showForm(data);
    }
  }

  showForm(form: any) {
    let dir = '/auth/adm-' + form + '-view';
    this.router.navigate([dir]);
    this.closeDialog(form);
  }

  getTableMode() {
    if (this.data.mode == '1') {
      this.faseAprovacion = true;
      this.faseInclusion = false;
      this.faseGerente = false;
    } else if (this.data.mode == '2') {
      this.faseAprovacion = false;
      this.faseInclusion = true;
      this.faseGerente = false;
    } else if (this.data.mode == '3') {
      this.faseAprovacion = false;
      this.faseInclusion = false;
      this.faseGerente = true;
    } else {
      this.faseAprovacion = false;
      this.faseInclusion = false;
      this.faseGerente = false;
    }
  }

  openNewComment(opcion: any) {
    let dialogRef = this.dialog.open(CommentDialogComponent);

    dialogRef.afterClosed().subscribe((results) => {
      let msg = results.event;
      this.callPostDecition(opcion, msg);
      this.ngOnInit();
    });
  }

  getRegistStatus() {
    this.uApi
      .callGetExecute('11', this.data.currentUniqueKey)
      .subscribe((res) => {
        let status = res[0].status;
        if (status == 'EN REVISION') {
          this.isDecision = true;
        } else {
          this.isDecision = false;
        }

        if (status == 'EXCLUSIÓN') {
          this.habilitarRegistro = true;
        } else {
          this.habilitarRegistro = false;
        }
      });
  }

  doAction(decision: string) {
    this.dialogRef.close({ event: decision });
  }

  closeDialog(event: string) {
      this.dialogRef.close({ event: event });
  }

  callPostDecition(opcion: any, message: any) {
    if (opcion == '1') {
      let dataArray = {
        opcion: '13',
        SQLStr:
          localStorage.getItem('uniqueKeyValue') +
          ',' +
          'CORRECCIÓN' +
          ',' +
          localStorage.getItem('username') +
          ',' +
          message,
      };
      this.uApi.callPostExecute(dataArray).subscribe((res) => {
        this._snackBar.open('Estatus del registro actualizado!', 'Cerrar', {
          duration: 3 * 1000,
        });
      });
    } else if (opcion == '2') {
      let dataArray = {
        opcion: '13',
        SQLStr:
          localStorage.getItem('uniqueKeyValue') +
          ',' +
          'EVALUADO' +
          ',' +
          localStorage.getItem('username') +
          ',' +
          message,
      };
      this.uApi.callPostExecute(dataArray).subscribe((res) => {
        this._snackBar.open('Estatus del registro actualizado!', 'Cerrar', {
          duration: 3 * 1000,
        });
      });
    } else if (opcion == '3') {
      let dataArray = {
        opcion: '13',
        SQLStr:
          localStorage.getItem('uniqueKeyValue') +
          ',' +
          'NO APLICA' +
          ',' +
          localStorage.getItem('username') +
          ',' +
          message,
      };
      this.uApi.callPostExecute(dataArray).subscribe((res) => {
        this._snackBar.open('Estatus del registro actualizado!', 'Cerrar', {
          duration: 3 * 1000,
        });
      });
    } else if (opcion == '4') {
      let dataArray = {
        opcion: '13',
        SQLStr:
          localStorage.getItem('uniqueKeyValue') +
          ',' +
          'INICIADO' +
          ',' +
          localStorage.getItem('username') +
          ',' +
          message,
      };
      this.uApi.callPostExecute(dataArray).subscribe((res) => {
        this._snackBar.open('Estatus del registro actualizado!', 'Cerrar', {
          duration: 3 * 1000,
        });
      });
    } else if (opcion == '5') {
      let dataArray = {
        opcion: '13',
        SQLStr:
          localStorage.getItem('uniqueKeyValue') +
          ',' +
          'EN REVISIÓN' +
          ',' +
          localStorage.getItem('username') +
          ',' +
          message,
      };
      this.uApi.callPostExecute(dataArray).subscribe((res) => {
        this._snackBar.open('Estatus del registro actualizado!', 'Cerrar', {
          duration: 3 * 1000,
        });
      });
    }
    this.router.navigate(['/auth/historico']);
    this.closeDialog(opcion);
  }
}
