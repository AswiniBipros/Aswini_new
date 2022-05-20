import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AssetsModule } from './assets/assets.module';
import { BranchesModule } from './branches/branches.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductsModule } from './products/products.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
