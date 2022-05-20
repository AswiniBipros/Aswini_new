import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-dashboard',
  templateUrl: './assets-dashboard.component.html',
  styleUrls: ['./assets-dashboard.component.css']
})
export class AssetsDashboardComponent implements OnInit {

  pageIndex:string="assetsView";

  constructor() { }

  ngOnInit(): void {
  }

}
