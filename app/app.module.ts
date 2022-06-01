import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

//Material
import { MaterialModule } from './material/material.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReceptionLoginComponent } from './reception-login/reception-login.component';
import { FinanceLoginComponent } from './finance-login/finance-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReceptionDashboardComponent } from './reception-dashboard/reception-dashboard.component';
import { CrudCustomersComponent } from './crud-customers/crud-customers.component';
import { SettingsCustomerComponent } from './settings-customer/settings-customer.component';
import { AdminActivitiesComponent } from './admin-activities/admin-activities.component';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { PayementsComponent } from './payements/payements.component';
import { FinanceDashboardComponent } from './finance-dashboard/finance-dashboard.component';
import { SettingsAdminComponent } from './settings-admin/settings-admin.component';
import { HttpClientModule } from '@angular/common/http';

//Shared service
import { SharedServiceService } from './shared-service.service';
import { FilterPipe } from './pipe/filter.pipe';
import { UpdatePaymentDialogComponent } from './update-payment-dialog/update-payment-dialog.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminLoginComponent,
    ReceptionLoginComponent,
    FinanceLoginComponent,
    AdminDashboardComponent,
    ReceptionDashboardComponent,
    CrudCustomersComponent,
    SettingsCustomerComponent,
    AdminActivitiesComponent,
    EmployeeManageComponent,
    PayementsComponent,
    FinanceDashboardComponent,
    SettingsAdminComponent,
    FilterPipe, 
    UpdatePaymentDialogComponent, LoadingSpinnerComponent
  ],
  entryComponents:[UpdatePaymentDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
