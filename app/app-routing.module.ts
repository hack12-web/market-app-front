import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CrudCustomersComponent } from './crud-customers/crud-customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReceptionDashboardComponent } from './reception-dashboard/reception-dashboard.component';
import { SettingsCustomerComponent } from './settings-customer/settings-customer.component';
import { AdminActivitiesComponent } from './admin-activities/admin-activities.component'
import { FinanceDashboardComponent } from './finance-dashboard/finance-dashboard.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'reception-dashboard', component: ReceptionDashboardComponent},
  {path: 'crud-customers', component: CrudCustomersComponent},
  {path: 'settings-customers', component: SettingsCustomerComponent},
  { path: 'admin-activities', component: AdminActivitiesComponent},
  { path: 'finance-dashboard', component: FinanceDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
