import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-shoper',
  templateUrl: './overview-shoper.component.html',
  styleUrls: ['./overview-shoper.component.css']
})
export class OverviewShoperComponent implements OnInit {
  view: string;
  items: any;

  constructor() { }

  ngOnInit() {
    this.view = '';
    this.items = [{title: 'Eier'}, {title: 'Brot'}, {title: 'Zucker'}];
  }

  setView = (v: string) => this.view = v;

}
