import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-add',
  templateUrl: './assets-add.component.html',
  styleUrls: ['./assets-add.component.css']
})
export class AssetsAddComponent implements OnInit {

  name :string = "Aswini";
  constructor() { }

  ngOnInit(): void {
  }

}
