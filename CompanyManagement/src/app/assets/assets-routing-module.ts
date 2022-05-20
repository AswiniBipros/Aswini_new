import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsAddComponent } from './assets-add/assets-add.component';
import { AssetsDashboardComponent } from './assets-dashboard/assets-dashboard.component';
import { AssetsViewComponent } from './assets-view/assets-view.component';
import { AssetsComponent } from './assets.component';

const routes: Routes = [
  { path: "assetsDashboard", component: AssetsDashboardComponent },
  { path: "assetsAdd", component: AssetsAddComponent },
  { path: "assetsView", component: AssetsViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
