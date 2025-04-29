import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { ConfirmationComponent } from 'shared-library';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-riesgo-climatico',
  templateUrl: './riesgo-climatico.component.html',
  styleUrls: ['./riesgo-climatico.component.css'],
})
export class RiesgoClimaticoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RiesgoClimaticoComponent>,
    private _uApi: ApiService,
    private _sb: MatSnackBar,
    private _dialog: MatDialog,
    private _fb: FormBuilder
  ) {}

  provinciaData!: any;
  distritoData!: any;
  corregiminetoData!: any;

  riesgoClimaticoForm = this._fb.group({
    provincia: new FormControl({ value: '', disabled: false }, [
      Validators.required,
    ]),
    distrito: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
    corregimiento: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
    nivelRisgoClimatico: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    this.getProvincia();
  }

  getProvincia() {
    this._uApi.callGetExecute('31', '').subscribe({
      next: (res) => (this.provinciaData = res),
      error: (err) => this._sb.open(err, 'OK', { duration: 3000 }),
    });
  }

  getDistrito(provincia: string) {
    this._uApi.callGetExecute('32', provincia).subscribe({
      next: (res) => (this.distritoData = res),
      error: (err) => this._sb.open(err, 'OK', { duration: 3000 }),
      complete: () => {
        this.riesgoClimaticoForm.controls['distrito'].enable(),
          this.riesgoClimaticoForm.controls['corregimiento'].setValue('');
          this.riesgoClimaticoForm.controls['corregimiento'].disable();
      },
    });
  }

  getCorregimiento(provincia: string, distrito: string) {
    let data = provincia + ',' + distrito;
    
    this._uApi.callGetExecute('33', data).subscribe({
      next: (res) => (this.corregiminetoData = res),
      error: (err) => this._sb.open(err, 'OK', { duration: 3000 }),
      complete: () =>
        this.riesgoClimaticoForm.controls['corregimiento'].enable(),
    });
  }

  getRisgoClimaticoNivel(
    provincia: string,
    distrito: string,
    corregimiento: string
  ) {
    let data = provincia + ',' + distrito + ',' + corregimiento;
    
    this._uApi.callGetExecute('34', data).subscribe({
      next: (res) =>
        this.riesgoClimaticoForm.controls['nivelRisgoClimatico'].setValue(
          res[0].nivel
        ),
      error: (err) => this._sb.open(err, 'OK', { duration: 3000 }),
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }

  sendNivelRiesgoClimatico(nivelRiesgoClimatico: string){
    this.confirm('confirmar el nivel de riesgo seleccionado', () => {
      this._sb.open('Un momento por favor...', 'OK');
      this._sb.open('Nivel de Riesgo Climatico escogido!', 'OK', { duration: 3000 });
      this.dialogRef.close(nivelRiesgoClimatico);
    });
    
  }

  confirm(action: string, callback: any) {
    let _dialogRef = this._dialog.open(ConfirmationComponent, {
      data: {
        action: action,
      },
    });

    _dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        callback();
      }
    });
  }
}
