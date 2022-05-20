import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRoutingModule } from './assets-routing-module';
import { AssetsViewComponent } from './assets-view/assets-view.component';
import { AssetsDashboardComponent } from './assets-dashboard/assets-dashboard.component';
import { AssetsAddComponent } from './assets-add/assets-add.component';
import { AssetsComponent } from './assets.component';


@NgModule({
  declarations: [
    AssetsViewComponent,
    AssetsAddComponent,
    AssetsDashboardComponent,
    AssetsComponent,
    
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule
  ],
  providers: [],
  bootstrap: [AssetsComponent],
  exports: [AssetsViewComponent,AssetsDashboardComponent,AssetsAddComponent]
})
export class AssetsModule { 
name:string = "aa";

}
