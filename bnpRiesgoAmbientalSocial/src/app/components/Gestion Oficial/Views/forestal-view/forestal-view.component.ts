import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-forestal-view',
  templateUrl: './forestal-view.component.html',
  styleUrls: ['./forestal-view.component.css'],
})
export class ForestalViewComponent implements OnInit {
  formularioFormGroup!: FormGroup;
  arrayData!: any;
  formCode!: any;
  editMode = false;
  isEdit = true;
  isSave = false;
  isCerrar = true;
  isCancel = false;
  isDesicion = false;
  constructor(
    public uApi: ApiService,
    private _formBuilder: FormBuilder,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.formCode = localStorage.getItem('form_code');
    this.uApi.callGetExecute('18', this.formCode || '').subscribe((res) => {
      this.arrayData = res[0];
      this.getIniFormGroup();
      this.getRegistStatus();
    });
  }

  getIniFormGroup() {
    this.formularioFormGroup = this._formBuilder.group({
      customer01Ctrl: [
        this.arrayData.zona_habitacional,
        [Validators.maxLength(100)],
      ],
      customer02Ctrl: [
        this.arrayData.area_protegida,
        [Validators.maxLength(100)],
      ],
      customer03Ctrl: [this.arrayData.asent_camp, [Validators.maxLength(100)]],
      customer04Ctrl: [this.arrayData.asent_origi, [Validators.maxLength(100)]],
      customer05Ctrl: [
        this.arrayData.dimension_total_propidad,
        [Validators.maxLength(100)],
      ],
      customer06Ctrl: [
        this.arrayData.dimension_ocupada,
        [Validators.maxLength(100)],
      ],
      customer07Ctrl: [
        this.arrayData.numero_arboles,
        [Validators.maxLength(100)],
      ],
      customer08Ctrl: [
        this.arrayData.especies_forestales,
        [Validators.maxLength(100)],
      ],
      customer09Ctrl: [
        this.arrayData.nombre_especies,
        [Validators.maxLength(100)],
      ],
      customer10Ctrl: [
        this.arrayData.superficie_propia,
        [Validators.maxLength(100)],
      ],
      customer11Ctrl: [
        this.arrayData.superficie_arrendada,
        [Validators.maxLength(100)],
      ],
      customer12Ctrl: [
        this.arrayData.area_total_forestal,
        [Validators.maxLength(100)],
      ],
      customer13Ctrl: [
        this.arrayData.fecha_area_forestal,
        [Validators.maxLength(100)],
      ],
      legisPerm01Ctrl: [
        this.arrayData.legis_perm_01,
        [Validators.maxLength(100)],
      ],
      legisPerm01expCtrl: [
        this.arrayData.legis_perm_exp_01,
        [Validators.maxLength(100)],
      ],

      legisPerm02Ctrl: [
        this.arrayData.legis_perm_02,
        [Validators.maxLength(100)],
      ],
      legisPerm02expCtrl: [
        this.arrayData.legis_perm_exp_02,
        [Validators.maxLength(100)],
      ],
      infra01Ctrl: [this.arrayData.infra_01, [Validators.maxLength(100)]],
      infra01expCtrl: [
        this.arrayData.infra_exp_01,
        [Validators.maxLength(100)],
      ],

      infra02Ctrl: [this.arrayData.infra_02, [Validators.maxLength(100)]],
      infra02expCtrl: [
        this.arrayData.infra_exp_02,
        [Validators.maxLength(100)],
      ],

      infra03Ctrl: [this.arrayData.infra_03, [Validators.maxLength(100)]],
      infra03expCtrl: [
        this.arrayData.infra_exp_03,
        [Validators.maxLength(100)],
      ],

      infra04Ctrl: [this.arrayData.infra_04, [Validators.maxLength(100)]],
      infra04expCtrl: [
        this.arrayData.infra_exp_04,
        [Validators.maxLength(100)],
      ],

      infra05Ctrl: [this.arrayData.infra_05, [Validators.maxLength(100)]],
      infra05expCtrl: [
        this.arrayData.infra_exp_05,
        [Validators.maxLength(100)],
      ],

      infra06Ctrl: [this.arrayData.infra_06, [Validators.maxLength(100)]],
      infra06expCtrl: [
        this.arrayData.infra_exp_06,
        [Validators.maxLength(100)],
      ],
      infra07Ctrl: [this.arrayData.infra_07, [Validators.maxLength(100)]],
      infra07expCtrl: [
        this.arrayData.infra_exp_07,
        [Validators.maxLength(100)],
      ],
      infra08Ctrl: [this.arrayData.infra_08, [Validators.maxLength(100)]],
      infra08expCtrl: [
        this.arrayData.infra_exp_08,
        [Validators.maxLength(100)],
      ],
      infra09Ctrl: [this.arrayData.infra_09, [Validators.maxLength(100)]],
      infra10Ctrl: [this.arrayData.infra_10, [Validators.maxLength(100)]],
      infra11Ctrl: [this.arrayData.infra_11, [Validators.maxLength(100)]],

      suelo01Ctrl: [this.arrayData.suelo_01, [Validators.maxLength(100)]],
      suelo01expCtrl: [
        this.arrayData.suelo_exp_01,
        [Validators.maxLength(100)],
      ],

      suelo02Ctrl: [this.arrayData.suelo_02, [Validators.maxLength(100)]],
      suelo02expCtrl: [
        this.arrayData.suelo_exp_02,
        [Validators.maxLength(100)],
      ],

      agua01Ctrl: [this.arrayData.agua_01, [Validators.maxLength(100)]],
      agua01expCtrl: [this.arrayData.agua_exp_01, [Validators.maxLength(100)]],

      agua02Ctrl: [this.arrayData.agua_02, [Validators.maxLength(100)]],
      agua02expCtrl: [this.arrayData.agua_exp_02, [Validators.maxLength(100)]],

      agua03Ctrl: [this.arrayData.agua_03, [Validators.maxLength(100)]],
      agua03expCtrl: [this.arrayData.agua_exp_03, [Validators.maxLength(100)]],
      agua04Ctrl: [this.arrayData.agua_04, [Validators.maxLength(100)]],
      agua05Ctrl: [this.arrayData.agua_05, [Validators.maxLength(100)]],
      agua06Ctrl: [this.arrayData.agua_06, [Validators.maxLength(100)]],
      agua07Ctrl: [this.arrayData.agua_07, [Validators.maxLength(100)]],

      ssc01Ctrl: [this.arrayData.ssc_01, [Validators.maxLength(100)]],
      ssc01expCtrl: [this.arrayData.ssc_exp_01, [Validators.maxLength(100)]],

      ssc02Ctrl: [this.arrayData.ssc_02, [Validators.maxLength(100)]],
      ssc02expCtrl: [this.arrayData.ssc_exp_02, [Validators.maxLength(100)]],

      ssc03Ctrl: [this.arrayData.ssc_03, [Validators.maxLength(100)]],
      ssc03expCtrl: [this.arrayData.ssc_exp_03, [Validators.maxLength(100)]],

      ppgc01Ctrl: [this.arrayData.ppgc_01, [Validators.maxLength(100)]],
      ppgc01expCtrl: [this.arrayData.ppgc_exp_01, [Validators.maxLength(100)]],

      ppgc02Ctrl: [this.arrayData.ppgc_02, [Validators.maxLength(100)]],
      ppgc02expCtrl: [this.arrayData.pggc_exp_02, [Validators.maxLength(100)]],

      pggc03Ctrl: [this.arrayData.pggc_03, [Validators.maxLength(100)]],
      pggc03expCtrl: [this.arrayData.pggc_exp_03, [Validators.maxLength(100)]],

      pggc04Ctrl: [this.arrayData.pggc_04, [Validators.maxLength(100)]],
      pggc04expCtrl: [this.arrayData.pggc_exp_04, [Validators.maxLength(100)]],

      pggc05Ctrl: [this.arrayData.pggc_05, [Validators.maxLength(100)]],
      pggc05expCtrl: [this.arrayData.pggc_exp_05, [Validators.maxLength(100)]],

      pggc06Ctrl: [this.arrayData.pggc_06, [Validators.maxLength(100)]],
      pggc06expCtrl: [this.arrayData.pggc_exp_06, [Validators.maxLength(100)]],

      pggc07Ctrl: [this.arrayData.pggc_07, [Validators.maxLength(100)]],
      pggc07expCtrl: [this.arrayData.pggc_exp_07, [Validators.maxLength(100)]],

      pggc08Ctrl: [this.arrayData.pggc_08, [Validators.maxLength(100)]],
      pggc08expCtrl: [this.arrayData.pggc_exp_08, [Validators.maxLength(100)]],

      pggc09Ctrl: [this.arrayData.pggc_09, [Validators.maxLength(100)]],
      pggc09expCtrl: [this.arrayData.pggc_exp_09, [Validators.maxLength(100)]],

      pggc10Ctrl: [this.arrayData.pggc_10, [Validators.maxLength(100)]],
      pggc10expCtrl: [this.arrayData.pggc_exp_10, [Validators.maxLength(100)]],

      pggc11Ctrl: [this.arrayData.pggc_11, [Validators.maxLength(100)]],
      pggc11expCtrl: [this.arrayData.pggc_exp_11, [Validators.maxLength(100)]],

      pggc12Ctrl: [this.arrayData.pggc_12, [Validators.maxLength(100)]],
      pggc12expCtrl: [this.arrayData.pggc_exp_12, [Validators.maxLength(100)]],

      conclusion: [this.arrayData.conclusion, [Validators.maxLength(256)]],
      recomendacion: [
        this.arrayData.recomendacion,
        [Validators.maxLength(256)],
      ],
    });
    this.turnEdition('1');
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

      Object.keys(this.formularioFormGroup.controls).forEach((key) => {
        this.formularioFormGroup.controls[key].enable();
      });
    }
  }

  closeForm() {
    this.router.navigate(['/auth/ListOfficer']);
  }

  postFormData() {
    let datos = '';
    Object.keys(this.formularioFormGroup.controls).forEach((key) => {
      datos = datos + this.formularioFormGroup.controls[key].value + ',';
    });
    let dataArray = {
      opcion: '11',
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

  onlyDate(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 32 && (charCode < 47 || charCode > 57)) {
      return false;
    }
    return true;
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
}
