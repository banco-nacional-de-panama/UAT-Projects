import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedLibraryModule } from 'shared-library';

import { LayoutComponent } from './modules/layout/layout.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { GestionoficialComponent } from './components/Gestion Oficial/gestionoficial/gestionoficial.component';
import { SubregistrosComponent } from './components/Events/subregistros/subregistros.component';
import { NewRegisterComponent } from './components/Events/new-register/new-register.component';
import { CreatecustomerComponent } from './components/Events/createcustomer/createcustomer.component';
import { ConfirmationDialogComponent } from './components/Events/confirmation-dialog/confirmation-dialog.component';
import { CommentDialogComponent } from './components/Events/comment-dialog/comment-dialog.component';
import { ClientManagementComponent } from './components/Events/client-management/client-management.component';
import { ClasificationViewComponent } from './components/Gestion Oficial/Views/clasification-view/clasification-view.component';
import { GeneralViewComponent } from './components/Gestion Oficial/Views/general-view/general-view.component';
import { SeguimientoViewComponent } from './components/Gestion Oficial/Views/seguimiento-view/seguimiento-view.component';
import { IndustrialViewComponent } from './components/Gestion Oficial/Views/industrial-view/industrial-view.component';
import { AgroViewComponent } from './components/Gestion Oficial/Views/agro-view/agro-view.component';
import { GanaderoViewComponent } from './components/Gestion Oficial/Views/ganadero-view/ganadero-view.component';
import { ConstruccionViewComponent } from './components/Gestion Oficial/Views/construccion-view/construccion-view.component';
import { ForestalViewComponent } from './components/Gestion Oficial/Views/forestal-view/forestal-view.component';
import { ReporteSeguimientoComponent } from './components/admin/reporte-seguimiento/reporte-seguimiento.component';
import { ReporteClasificacionComponent } from './components/admin/reporte-clasificacion/reporte-clasificacion.component';
import { GestionAnalistaComponent } from './components/admin/gestion-analista/gestion-analista.component';
import { AdminSubRegistComponent } from './components/admin/events/admin-sub-regist/admin-sub-regist.component';
import { HistoricoAnalistaComponent } from './components/admin/historico-analista/historico-analista.component';
import { AdmAgroViewComponent } from './components/admin/views/adm-agro-view/adm-agro-view.component';
import { AdmConstruccionViewComponent } from './components/admin/views/adm-construccion-view/adm-construccion-view.component';
import { AdmForestalViewComponent } from './components/admin/views/adm-forestal-view/adm-forestal-view.component';
import { AdmGanaderoViewComponent } from './components/admin/views/adm-ganadero-view/adm-ganadero-view.component';
import { AdmIndustrialViewComponent } from './components/admin/views/adm-industrial-view/adm-industrial-view.component';
import { AdmSegumientoViewComponent } from './components/admin/views/adm-segumiento-view/adm-segumiento-view.component';
import { PrintAgricolaComponent } from './components/print-view/print-agricola/print-agricola.component';
import { PrintClasificacionComponent } from './components/print-view/print-clasificacion/print-clasificacion.component';
import { PrintConstruccionComponent } from './components/print-view/print-construccion/print-construccion.component';
import { PrintForestalComponent } from './components/print-view/print-forestal/print-forestal.component';
import { PrintGanaderiaComponent } from './components/print-view/print-ganaderia/print-ganaderia.component';
import { PrintGeneralComponent } from './components/print-view/print-general/print-general.component';
import { PrintIndustrialComponent } from './components/print-view/print-industrial/print-industrial.component';
import { PrintSeguimientoComponent } from './components/print-view/print-seguimiento/print-seguimiento.component';
import { AdmClasificationViewComponent } from './components/admin/views/adm-clasification-view/adm-clasification-view.component';
import { AdmGeneralViewComponent } from './components/admin/views/adm-general-view/adm-general-view.component';
import { RiesgoClimaticoComponent } from './components/Events/riesgo-climatico/riesgo-climatico.component';
import { RiskApprobalsComponent } from './components/admin/risk-approbals/risk-approbals.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SignInComponent,
    HomeComponent,
    GestionoficialComponent,
    GestionAnalistaComponent,
    AdminSubRegistComponent,
    SubregistrosComponent,
    NewRegisterComponent,
    CreatecustomerComponent,
    ConfirmationDialogComponent,
    CommentDialogComponent,
    ClientManagementComponent,
    ClasificationViewComponent,
    GeneralViewComponent,
    SeguimientoViewComponent,
    IndustrialViewComponent,
    AgroViewComponent,
    GanaderoViewComponent,
    ConstruccionViewComponent,
    ForestalViewComponent,
    ReporteSeguimientoComponent,
    ReporteClasificacionComponent,
    HistoricoAnalistaComponent,
    AdmIndustrialViewComponent,
    AdmAgroViewComponent,
    AdmGanaderoViewComponent,
    AdmForestalViewComponent,
    AdmConstruccionViewComponent,
    AdmSegumientoViewComponent,
    AdmClasificationViewComponent,
    AdmGeneralViewComponent,
    PrintClasificacionComponent,
    PrintGeneralComponent,
    PrintSeguimientoComponent,
    PrintIndustrialComponent,
    PrintAgricolaComponent,
    PrintGanaderiaComponent,
    PrintForestalComponent,
    PrintConstruccionComponent,
    RiesgoClimaticoComponent,
    RiskApprobalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    SharedLibraryModule,
    FlexLayoutModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
