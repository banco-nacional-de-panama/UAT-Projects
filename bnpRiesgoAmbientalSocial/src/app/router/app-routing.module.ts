import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'shared-library';
import { GestionAnalistaComponent } from '../components/admin/gestion-analista/gestion-analista.component';
import { HistoricoAnalistaComponent } from '../components/admin/historico-analista/historico-analista.component';
import { ReporteClasificacionComponent } from '../components/admin/reporte-clasificacion/reporte-clasificacion.component';
import { ReporteSeguimientoComponent } from '../components/admin/reporte-seguimiento/reporte-seguimiento.component';
import { AdmAgroViewComponent } from '../components/admin/views/adm-agro-view/adm-agro-view.component';
import { AdmClasificationViewComponent } from '../components/admin/views/adm-clasification-view/adm-clasification-view.component';
import { AdmConstruccionViewComponent } from '../components/admin/views/adm-construccion-view/adm-construccion-view.component';
import { AdmForestalViewComponent } from '../components/admin/views/adm-forestal-view/adm-forestal-view.component';
import { AdmGanaderoViewComponent } from '../components/admin/views/adm-ganadero-view/adm-ganadero-view.component';
import { AdmGeneralViewComponent } from '../components/admin/views/adm-general-view/adm-general-view.component';
import { AdmIndustrialViewComponent } from '../components/admin/views/adm-industrial-view/adm-industrial-view.component';
import { AdmSegumientoViewComponent } from '../components/admin/views/adm-segumiento-view/adm-segumiento-view.component';
import { GestionoficialComponent } from '../components/Gestion Oficial/gestionoficial/gestionoficial.component';
import { AgroViewComponent } from '../components/Gestion Oficial/Views/agro-view/agro-view.component';
import { ClasificationViewComponent } from '../components/Gestion Oficial/Views/clasification-view/clasification-view.component';
import { ConstruccionViewComponent } from '../components/Gestion Oficial/Views/construccion-view/construccion-view.component';
import { ForestalViewComponent } from '../components/Gestion Oficial/Views/forestal-view/forestal-view.component';
import { GanaderoViewComponent } from '../components/Gestion Oficial/Views/ganadero-view/ganadero-view.component';
import { GeneralViewComponent } from '../components/Gestion Oficial/Views/general-view/general-view.component';
import { IndustrialViewComponent } from '../components/Gestion Oficial/Views/industrial-view/industrial-view.component';
import { SeguimientoViewComponent } from '../components/Gestion Oficial/Views/seguimiento-view/seguimiento-view.component';
import { HomeComponent } from '../components/home/home.component';
import { PrintAgricolaComponent } from '../components/print-view/print-agricola/print-agricola.component';
import { PrintClasificacionComponent } from '../components/print-view/print-clasificacion/print-clasificacion.component';
import { PrintConstruccionComponent } from '../components/print-view/print-construccion/print-construccion.component';
import { PrintForestalComponent } from '../components/print-view/print-forestal/print-forestal.component';
import { PrintGanaderiaComponent } from '../components/print-view/print-ganaderia/print-ganaderia.component';
import { PrintGeneralComponent } from '../components/print-view/print-general/print-general.component';
import { PrintIndustrialComponent } from '../components/print-view/print-industrial/print-industrial.component';
import { PrintSeguimientoComponent } from '../components/print-view/print-seguimiento/print-seguimiento.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { LayoutComponent } from '../modules/layout/layout.component';
import { RiskApprobalsComponent } from '../components/admin/risk-approbals/risk-approbals.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { breadcrumb: 'Página de Inicio' },
      },
      {
        path: 'gestionOficial',
        component: GestionoficialComponent,
        data: { breadcrumb: 'Gestión de Oficial' },
      },
      {
        path: 'clasificacion-view',
        component: ClasificationViewComponent,
        data: { breadcrumb: 'Formulario de Clasificación' },
      },
      {
        path: 'ListOfficer',
        component: GestionoficialComponent,
        data: { breadcrumb: 'Formulario de Clasificación' },
      },
      {
        path: 'general-view',
        component: GeneralViewComponent,
        data: { breadcrumb: 'Formulario General' },
      },
      {
        path: 'IND-view',
        component: IndustrialViewComponent,
        data: { breadcrumb: 'Formulario Sector Industrial' },
      },
      {
        path: 'AGR-view',
        component: AgroViewComponent,
        data: { breadcrumb: 'Formulario Sector Agropecuario' },
      },
      {
        path: 'GAN-view',
        component: GanaderoViewComponent,
        data: { breadcrumb: 'Formulario Sector Ganadero' },
      },
      {
        path: 'FOR-view',
        component: ForestalViewComponent,
        data: { breadcrumb: 'Formulario Sector Forestal' },
      },
      {
        path: 'CON-view',
        component: ConstruccionViewComponent,
        data: { breadcrumb: 'Formulario Sector Contrucciones' },
      },
      {
        path: 'SEG-view',
        component: SeguimientoViewComponent,
        data: { breadcrumb: 'Formulario de Seguimiento' },
      },
      {
        path: 'rep-clasificacion',
        component: ReporteClasificacionComponent,
        data: { breadcrumb: 'Reporte de Clasificación' },
      },
      {
        path: 'rep-seguimiento',
        component: ReporteSeguimientoComponent,
        data: { breadcrumb: 'Reporte de Renovaciones' },
      },
      {
        path: 'gestionAnalista',
        component: GestionAnalistaComponent,
        data: { breadcrumb: 'Gestión de Analista' },
      },
      {
        path: 'adm-clasification-view',
        component: AdmClasificationViewComponent,
        data: { breadcrumb: 'Formulario de Clasificación' },
      },
      {
        path: 'adm-general-view',
        component: AdmGeneralViewComponent,
        data: { breadcrumb: 'Formulario General' },
      },
      {
        path: 'adm-IND-view',
        component: AdmIndustrialViewComponent,
        data: { breadcrumb: 'Formulario Sector Industrial' },
      },
      {
        path: 'adm-AGR-view',
        component: AdmAgroViewComponent,
        data: { breadcrumb: 'Formulario Sector Agropecuario' },
      },
      {
        path: 'adm-GAN-view',
        component: AdmGanaderoViewComponent,
        data: { breadcrumb: 'Formulario Sector Ganadero' },
      },
      {
        path: 'adm-FOR-view',
        component: AdmForestalViewComponent,
        data: { breadcrumb: 'Formulario Sector Forestal' },
      },
      {
        path: 'adm-CON-view',
        component: AdmConstruccionViewComponent,
        data: { breadcrumb: 'Formulario Sector Contrucciones' },
      },
      {
        path: 'adm-SEG-view',
        component: AdmSegumientoViewComponent,
        data: { breadcrumb: 'Formulario de Seguimiento' },
      },
      {
        path: 'historico',
        component: HistoricoAnalistaComponent,
        data: { breadcrumb: 'Histórico' },
      },
      {
        path: 'aprobaciones',
        component: RiskApprobalsComponent,
        data: { breadcrumb: 'Aprobaciones Gerenciales' },
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: 'print',
    children: [
      {
        path: 'clasificacion',
        component: PrintClasificacionComponent,
        data: { breadcrumb: 'Impresion Formulario de Clasificación' },
      },
      {
        path: 'general',
        component: PrintGeneralComponent,
        data: { breadcrumb: 'Impresion Formulario General' },
      },
      {
        path: 'seguimiento',
        component: PrintSeguimientoComponent,
        data: { breadcrumb: 'Impresion Formulario de Seguimiento' },
      },
      {
        path: 'IND-print',
        component: PrintIndustrialComponent,
        data: { breadcrumb: 'Impresion Formulario de Industrial' },
      },
      {
        path: 'AGR-print',
        component: PrintAgricolaComponent,
        data: { breadcrumb: 'Impresion Formulario de Agropecuario' },
      },
      {
        path: 'GAN-print',
        component: PrintGanaderiaComponent,
        data: { breadcrumb: 'Impresion Formulario de Ganadero' },
      },
      {
        path: 'FOR-print',
        component: PrintForestalComponent,
        data: { breadcrumb: 'Impresion Formulario de Forestal' },
      },
      {
        path: 'CON-print',
        component: PrintConstruccionComponent,
        data: { breadcrumb: 'Impresion Formulario de Contrucciones' },
      },
    ],
  },
  {
    path: 'index.aspx',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: '**', // wildcard route for a 404 page
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
