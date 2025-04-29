import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clasification } from 'src/app/components/Class/clasification';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { RiesgoClimaticoComponent } from 'src/app/components/Events/riesgo-climatico/riesgo-climatico.component';

@Component({
  selector: 'app-seguimiento-view',
  templateUrl: './seguimiento-view.component.html',
  styleUrls: ['./seguimiento-view.component.css'],
  providers: [Clasification],
})
export class SeguimientoViewComponent implements OnInit {
  formularioFormGroup!: FormGroup;
  arrayData!: any;
  formCode!: any;

  sectors!: any;
  subsectors!: any;

  editMode = false;
  isEdit = true;
  isSave = false;
  isCerrar = true;
  isCancel = false;
  otrosEsp = false;
  isDesicion = false;
  showRiskOption = false
  lvl4Risk = false;
  riesgoClimatico!: string

  nivelRiesgoDB!: any;

  constructor(
    public uApi: ApiService,
    public _formBuilder: FormBuilder,
    private _dialog: MatDialog,
    public router: Router,
    private _snackBar: MatSnackBar,
    private _clasificacion: Clasification
  ) {}

  ngOnInit(): void {
    this.formCode = localStorage.getItem('form_code');
    this.uApi.callGetExecute('23', this.formCode || '').subscribe((res) => {
      this.arrayData = res[0];
      this.getIniFormGroup();
      this.getRegistStatus();
      this.getAllSectors();
      this.turnEdition('1');
    });
  }

  getIniFormGroup() {
    this.formularioFormGroup = this._formBuilder.group({
      segData01: [this.arrayData.niver_riesgo_AS],
      segData02: [this.arrayData.tota_expo_grupo],
      segData03: [this.arrayData.rating_AS],
      segData04: [this.arrayData.sector],
      segData05: [this.arrayData.subsector],
      segData06: [this.arrayData.actividad_cliente_manual],
      segData07: [this.arrayData.niver_riesgo_manual_AS],
      segData08: [this.arrayData.checklist_campo_1],
      segData09: [this.arrayData.checklist_campo_2],
      segData10: [this.arrayData.checklist_campo_3],
      segData11: [this.arrayData.checklist_campo_4],
      segData12: [this.arrayData.checklist_campo_5],
      segData13: [this.arrayData.checklist_campo_6],
      segData14: [this.arrayData.checklist_campo_7],
      segData15: [this.arrayData.checklist_campo_8],
      segData16: [this.arrayData.checklist_campo_9],
      segData17: [this.arrayData.ventas_anuales],
      segData18: [this.arrayData.total_expo_banco],
      segData19: [this.arrayData.complimento_cov_01],
      segData20: [this.arrayData.complimento_cov_02],
      segData21: [this.arrayData.complimento_cov_03],
      segData22: [this.arrayData.complimento_cov_04],
      segData23: [this.arrayData.complimento_cov_05],
      segData24: [this.arrayData.complimento_cov_06],
      segData25: [this.arrayData.complimento_cov_07],
      segData26: [this.arrayData.complimento_cov_08],
      segData27: [this.arrayData.complimento_cov_09],
      segData28: [this.arrayData.complimento_cov_10],
      segData29: [null, [Validators.required]],
      segData30: [null, Validators.required],
      segData31: [this.arrayData.nivel_riesgo_climatico],
      segData32: [this.arrayData.checklist_campo_10]
    });
  }

  postFormData() {
    let datos = '';
    this.formularioFormGroup.controls['segData04'].setValue(null);
    this.formularioFormGroup.controls['segData05'].setValue(null);
    Object.keys(this.formularioFormGroup.controls).forEach((key) => {
      datos = datos + this.formularioFormGroup.controls[key].value + ',';
    });
    let dataArray = {
      opcion: '14',
      SQLStr:
        localStorage.getItem('uniqueKeyValue') +
        ',' +
        datos +
        ',' +
        localStorage.getItem('username'),
    };

    this.uApi.callPostExecute(dataArray).subscribe((res) => {
      this._snackBar.open('Datos del formulario actualizados!', 'Cerrar', {
        duration: 3 * 1000,
      });
      this.router.navigate(['/auth/ListOfficer']);
    });
  }

  getAllSectors() {
    this.uApi.callGetExecute('3', '').subscribe((res) => {
      this.sectors = res;
    });
  }

  getSubSectors(event: any) {
    this._clasificacion.sector = event.value;
    if (this._clasificacion.sector == '999') {
      this.formularioFormGroup.controls['segData30'].setValue('');
      this.formularioFormGroup.controls['segData30'].disable();
      this.formularioFormGroup.controls['segData06'].enable();
      this.formularioFormGroup.controls['segData07'].enable();
    } else {
      this.uApi
      .callGetExecute('24', this._clasificacion.sector)
      .subscribe((res) => {
        this.nivelRiesgoDB = res[0].nivel_riesgo;
        this.formularioFormGroup.controls['segData01'].setValue(this.nivelRiesgoDB);
        if (this.nivelRiesgoDB == 'BAJO') {
          this.formularioFormGroup.controls['segData03'].setValue('NIVEL 1'); 
        } else if (this.nivelRiesgoDB == 'MEDIO') {
          this.formularioFormGroup.controls['segData03'].setValue('NIVEL 2'); 
        } else if (this.nivelRiesgoDB == 'ALTO') {
          this.formularioFormGroup.controls['segData03'].setValue('NIVEL 3');
        }
        this.formularioFormGroup.controls['segData01'].disable();
        this.formularioFormGroup.controls['segData03'].disable();
      });
      this.formularioFormGroup.controls['segData06'].setValue('No aplica');
      this.formularioFormGroup.controls['segData06'].disable();
      this.formularioFormGroup.controls['segData07'].setValue('No aplica');
      this.formularioFormGroup.controls['segData07'].disable();
      this.formularioFormGroup.controls['segData30'].enable();
      this.callSubSectors(this._clasificacion.sector);
    }
  }

  callSubSectors(data: any) {
    this.uApi.callGetExecute('4', data).subscribe((res) => {
      this.subsectors = res;
    });
  }

  getSubSector(event: any) {
    this._clasificacion.subsector = event.value;
    this.uApi
    .callGetExecute('37', this._clasificacion.subsector)
    .subscribe((res) => {
      if (res[0].high_risk == true) {
        this.lvl4Risk = true;
        if(this.formularioFormGroup.controls['segData31'].value == 'Alto'){
          this.formularioFormGroup.controls['segData31'].setValue('MUY ALTO');
        }              
      } else  {
        this.formularioFormGroup.controls['segData31'].setValue(this.riesgoClimatico);
      }
    });
  }

  checkListItemSelected(opcion: number, event: any) {
      if (event.checked == true) {
        this.formularioFormGroup.controls['segData01'].setValue('ALTO');
        this.formularioFormGroup.controls['segData03'].setValue('NIVEL 3');
      } else if (event.checked == false) {
        this.formularioFormGroup.controls['segData01'].setValue(this.nivelRiesgoDB );
        if (this.nivelRiesgoDB == 'BAJO') {
          this.formularioFormGroup.controls['segData03'].setValue('NIVEL 1'); 
        } else if (this.nivelRiesgoDB == 'MEDIO') {
          this.formularioFormGroup.controls['segData03'].setValue('NIVEL 2'); 
        } else if (this.nivelRiesgoDB == 'ALTO') {
          this.formularioFormGroup.controls['segData03'].setValue('NIVEL 3');
        }
      }
  }

  turnEdition(option: any) {
    if (option == '1') {
      this.isEdit = true;
      this.isCerrar = true;
      this.isCancel = false;
      this.isSave = false;
      this.editMode = false;

      Object.keys(this.formularioFormGroup.controls).forEach((key) => {
        this.formularioFormGroup.controls[key].disable();
      });
    } else if (option == '2') {
      this.isEdit = false;
      this.isCerrar = false;
      this.isCancel = true;
      this.isSave = true;
      this.editMode = true;
      this.showRiskOption = true

      Object.keys(this.formularioFormGroup.controls).forEach((key) => {
        this.formularioFormGroup.controls[key].enable();
      });
      this.formularioFormGroup.controls['segData01'].disable();
      this.formularioFormGroup.controls['segData03'].disable();
      this.formularioFormGroup.controls['segData06'].disable();
      this.formularioFormGroup.controls['segData07'].disable();
      this.formularioFormGroup.controls['segData31'].disable();
    }
  }

  closeForm() {
    this.router.navigate(['/auth/ListOfficer']);
  }

  getRegistStatus() {
    this.uApi.callGetExecute('16', this.formCode || '').subscribe((res) => {
      let status = res[0];
      if (status.state == 'INICIADO' || status.state == 'CORRECCIÓN') {
        this.isDesicion = true;
      } else {
        this.isDesicion = false;
      }
    });
  }

  numberOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 46 || charCode > 57)) {
      return false;
    }
    return true;
  }

  commentsOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode == 44) {
      return false;
    }
    return true;
  }

  openSetClimaticRisk(){
    let dialogRef = this._dialog.open(RiesgoClimaticoComponent, { width: '720px'});

    dialogRef.afterClosed().subscribe((result: string) =>{
      if (result == undefined || result == 'null') {
        this._snackBar.open('Debe completar el riesgo climatico para continuar!...', 'OK', {
          duration: 3000,
        });
      } else {
        this.riesgoClimatico = result;
        if (result == 'Alto' && this.lvl4Risk == true) {
          this.formularioFormGroup.controls['segData31'].setValue('MUY ALTO')
        } else {
          this.formularioFormGroup.controls['segData31'].setValue(result);
        }
      }
    })
  }
}
