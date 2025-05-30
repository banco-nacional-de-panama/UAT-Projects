import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-print-general',
  templateUrl: './print-general.component.html',
  styleUrls: ['./print-general.component.css'],
})
export class PrintGeneralComponent implements OnInit {
  formularioFormGroup!: FormGroup;
  formCode!: any;
  arrayData!: any;
  userMod!: any;
  constructor(
    public uApi: ApiService,
    public _formBuilder: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.formCode = localStorage.getItem('form_code');
    this.uApi.callGetExecute('10', this.formCode || '').subscribe((res) => {
      this.arrayData = res[0];
      this.getAporbador();
      this.cargarCampos();
    });
  }

  cargarCampos() {
    this.formularioFormGroup = this._formBuilder.group({
      customerNumberCtrl: [this.arrayData.numero_cliente],

      montoFinaciarCtrl: [this.arrayData.monto_financiar],

      tipoActividadCtrl: [this.arrayData.tipo_actividad],

      areaActividadCtrl: [this.arrayData.area_actividad],

      tipoAreaAdyacenteCtrl: [this.arrayData.tipo_area_adyacente],

      nivelRiesgoCtrl: [this.arrayData.resultado_nivel_riesgo_social],

      ratingCtrl: [this.arrayData.resultados_riesgo_social],

      licenciaAmbientalCtrl: [this.arrayData.licencia_ambiental],

      otrasLicenciasCtrl: [this.arrayData.otras_licencias_permisos],

      habNat01Ctrl: [this.getValueDB(1, this.arrayData.habitad_natural_1)],
      habNat01expCtrl: [this.arrayData.habitad_natural_1_exp],

      habNat02Ctrl: [this.getValueDB(1, this.arrayData.habitad_natural_2)],
      habNat02expCtrl: [this.arrayData.habitad_natural_2_exp],

      habNat03Ctrl: [this.getValueDB(1, this.arrayData.habitad_natural_3)],
      habNat03expCtrl: [this.arrayData.habitad_natural_3_exp],

      habNat04Ctrl: [this.getValueDB(1, this.arrayData.habitad_natural_4)],
      habNat04expCtrl: [this.arrayData.habitad_natural_4_exp],

      habNat05Ctrl: [this.getValueDB(1, this.arrayData.habitad_natural_5)],
      habNat05expCtrl: [this.arrayData.habitad_natural_5_exp],

      insDes01Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_1)],
      insDes01expCtrl: [this.arrayData.insumo_derecho_1_exp],

      insDes02Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_2)],
      insDes02expCtrl: [this.arrayData.insumo_derecho_2_exp],

      insDes03Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_3)],
      insDes03expCtrl: [this.arrayData.insumo_derecho_3_exp],

      insDes04Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_4)],
      insDes04expCtrl: [this.arrayData.insumo_derecho_4_exp],

      insDes05Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_5)],
      insDes05expCtrl: [this.arrayData.insumo_derecho_5_exp],

      insDes06Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_6)],
      insDes06expCtrl: [this.arrayData.insumo_derecho_6_exp],

      insDes07Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_7)],
      insDes07expCtrl: [this.arrayData.insumo_derecho_7_exp],

      insDes08Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_8)],
      insDes08expCtrl: [this.arrayData.insumo_derecho_8_exp],

      insDes09Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_9)],
      insDes09expCtrl: [this.arrayData.insumo_derecho_9_exp],

      insDes10Ctrl: [this.getValueDB(1, this.arrayData.insumo_derecho_10)],
      insDes10expCtrl: [this.arrayData.insumo_derecho_10_exp],

      salSeg01Ctrl: [this.getValueDB(1, this.arrayData.salud_seguridad_1)],
      salSeg01expCtrl: [this.arrayData.salud_seguridad_1_exp],

      salSeg02Ctrl: [this.getValueDB(1, this.arrayData.salud_seguridad_2)],
      salSeg02expCtrl: [this.arrayData.salud_seguridad_2_exp],

      salSeg03Ctrl: [this.getValueDB(1, this.arrayData.salud_seguridad_3)],
      salSeg03expCtrl: [this.arrayData.salud_seguridad_3_exp],

      comuni01Ctrl: [this.getValueDB(1, this.arrayData.comunidad_1)],
      comuni01expCtrl: [this.arrayData.comunidad_1_exp],

      comuni02Ctrl: [this.getValueDB(1, this.arrayData.comunidad_2)],
      comuni02expCtrl: [this.arrayData.comunidad_2_exp],

      comuni03Ctrl: [this.getValueDB(1, this.arrayData.comunidad_3)],
      comuni03expCtrl: [this.arrayData.comunidad_3_exp],

      rhCountAdmCtrl: [this.arrayData.n_empleados_admin],

      rhCountOperaCtrl: [this.arrayData.n_empleados_operativos],

      rhCountTempCtrl: [this.arrayData.n_empleados_temporales],

      rhConutTotalCtrl: [this.arrayData.n_empleados_total],

      rhHorio01DesCtrl: [this.arrayData.horario_operacion_1_de],
      rhHorio01HasCtrl: [this.arrayData.horario_operacion_1_hasta],

      rhHorio02DesCtrl: [this.arrayData.horario_operacion_2_de],
      rhHorio02HasCtrl: [this.arrayData.horario_operacion_2_hasta],

      rhHorio03DesCtrl: [this.arrayData.horario_operacion_3_de],
      rhHorio03HasCtrl: [this.arrayData.horario_operacion_3_hasta],

      rhDato01Ctrl: [this.getValueDB(1, this.arrayData.recurso_humano_1)],
      rhDato02Ctrl: [this.getValueDB(1, this.arrayData.recurso_humano_2)],

      rhDato03Ctrl: [this.getValueDB(1, this.arrayData.recurso_humano_3)],
      rhDato03expCtrl: [this.arrayData.recurso_humano_3_exp],

      rhDato04Ctrl: [this.getValueDB(1, this.arrayData.recurso_humano_4)],
      rhDato04expCtrl: [this.arrayData.recurso_humano_4_exp],

      rhDato05Ctrl: [this.getValueDB(1, this.arrayData.recurso_humano_5)],
      rhDato05expCtrl: [this.arrayData.recurso_humano_5_exp],

      rhDato06Ctrl: [this.getValueDB(1, this.arrayData.recurso_humano_6)],
      rhDato06expCtrl: [this.arrayData.recurso_humano_6_exo],

      medControl01Ctr: [this.getValueDB(2, this.arrayData.medidas_control_1)],
      medControl01expCtr: [this.arrayData.medidas_control_1_exp],

      medControl02Ctr: [this.getValueDB(2, this.arrayData.medidas_control_2)],
      medControl02expCtr: [this.arrayData.medidas_control_2_exp],

      medControl03Ctr: [this.getValueDB(2, this.arrayData.medidas_control_3)],
      medControl03expCtr: [this.arrayData.medidas_control_3_exp],

      medControl04Ctr: [this.getValueDB(2, this.arrayData.medidas_control_4)],
      medControl04expCtr: [this.arrayData.medidas_control_4_exp],

      medControl05Ctr: [this.getValueDB(2, this.arrayData.medidas_control_5)],
      medControl05expCtr: [this.arrayData.medidas_control_5_exp],

      medControl06Ctr: [this.getValueDB(2, this.arrayData.medidas_control_6)],
      medControl06expCtr: [this.arrayData.medidas_control_6_exp],

      medControl07Ctr: [this.getValueDB(2, this.arrayData.medidas_control_7)],
      medControl07expCtr: [this.arrayData.medidas_control_7_exp],

      medControl08Ctr: [this.getValueDB(2, this.arrayData.medidas_control_8)],
      medControl08expCtr: [this.arrayData.medidas_control_8_exp],

      medControl09Ctr: [this.getValueDB(2, this.arrayData.medidas_control_9)],
      medControl09expCtr: [this.arrayData.medidas_control_9_exp],

      medControl10Ctr: [this.getValueDB(2, this.arrayData.medidas_control_10)],
      medControl10expCtr: [this.arrayData.medidas_control_10_exp],

      maAmbiSocial01Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_1),
      ],
      maAmbiSocial01expCtr: [this.arrayData.manejo_ambiental_social_1_exp],

      maAmbiSocial02Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_2),
      ],
      maAmbiSocial02expCtr: [this.arrayData.manejo_ambiental_social_2_exp],

      maAmbiSocial03Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_3),
      ],
      maAmbiSocial03expCtr: [this.arrayData.manejo_ambiental_social_3_exp],

      maAmbiSocial04Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_4),
      ],
      maAmbiSocial04expCtr: [this.arrayData.manejo_ambiental_social_4_exp],

      maAmbiSocial05Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_5),
      ],
      maAmbiSocial05expCtr: [this.arrayData.manejo_ambiental_social_5_exp],

      maAmbiSocial06Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_6),
      ],
      maAmbiSocial06expCtr: [this.arrayData.manejo_ambiental_social_6_exp],

      maAmbiSocial07Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_7),
      ],
      maAmbiSocial07expCtr: [this.arrayData.manejo_ambiental_social_7_exp],

      maAmbiSocial08Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_8),
      ],
      maAmbiSocial08expCtr: [this.arrayData.manejo_ambiental_social_8_exp],

      maAmbiSocial09Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_9),
      ],
      maAmbiSocial09expCtr: [this.arrayData.manejo_ambiental_social_9_exp],

      maAmbiSocial10Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_10),
      ],
      maAmbiSocial10expCtr: [this.arrayData.manejo_ambiental_social_10_exp],

      maAmbiSocial11Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_11),
      ],
      maAmbiSocial11expCtr: [this.arrayData.manejo_ambiental_social_11_exp],

      maAmbiSocial12Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_12),
      ],
      maAmbiSocial12expCtr: [this.arrayData.manejo_ambiental_social_12_exp],

      maAmbiSocial13Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_13),
      ],
      maAmbiSocial13expCtr: [this.arrayData.manejo_ambiental_social_13_exp],

      maAmbiSocial14Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_14),
      ],
      maAmbiSocial14expCtr: [this.arrayData.manejo_ambiental_social_14_exp],

      maAmbiSocial15Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_15),
      ],
      maAmbiSocial15expCtr: [this.arrayData.manejo_ambiental_social_15_exp],

      maAmbiSocial16Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_16),
      ],
      maAmbiSocial16expCtr: [this.arrayData.manejo_ambiental_social_16_exp],

      maAmbiSocial17Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_17),
      ],
      maAmbiSocial17expCtr: [this.arrayData.manejo_ambiental_social_17_exp],

      maAmbiSocial18Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_18),
      ],
      maAmbiSocial18expCtr: [this.arrayData.manejo_ambiental_social_18_exp],

      maAmbiSocial19Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_19),
      ],
      maAmbiSocial19expCtr: [this.arrayData.manejo_ambiental_social_19_exp],

      maAmbiSocial20Ctr: [
        this.getValueDB(1, this.arrayData.manejo_ambiental_social_20),
      ],
      maAmbiSocial20expCtr: [this.arrayData.manejo_ambiental_social_20_exp],

      conclusionCtr: [this.arrayData.conclusion],

      recomendacionCtr: [this.arrayData.recomendacion],

      usuarioAprobadorCtrl: [this.userMod],

      nombreClienteCtrl: [this.arrayData.nombre_cliente],
    });

    Object.keys(this.formularioFormGroup.controls).forEach((key) => {
      this.formularioFormGroup.controls[key].disable();
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

  getValueDB(opcion: any, data: any) {
    if (opcion == 1) {
      if (data == true) {
        return 'Si';
      } else {
        return 'No';
      }
    } else if (opcion == 2) {
      if (data == true) {
        return 'Existe';
      } else {
        return 'No Existe';
      }
    } else {
      return data;
    }
  }

  getAporbador() {
    let uniqueKey = localStorage.getItem('uniqueKeyValue');
    this.uApi.callGetExecute('21', uniqueKey || '').subscribe((res) => {
      let user_mod = res;
      this.userMod = user_mod[0].modification_user;
      this.cargarCampos();
    });
  }

  printDocument() {
    window.print();
  }

  returnMainPage() {
    this.router.navigate(['/home']);
  }
}
