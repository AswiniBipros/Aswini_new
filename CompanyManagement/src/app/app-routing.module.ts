import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';

const routes: Routes = [
  {
    path: "companyDashboard",
    component: CompanyDashboardComponent,
    loadChildren: () => import("../app/assets/assets.module").then(m => m.AssetsModule)
  },{
    path:'',
    redirectTo: "/companyDashboard",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
