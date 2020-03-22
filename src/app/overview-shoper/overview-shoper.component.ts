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
    this.items = [
      {title: 'Eier', img: './assets/eier.jfif'},
      {title: 'Brot', img: './assets/brot.jpg'},
      {title: 'Zucker', img: './assets/zucker.jpg'}];
  }

  setView = (v: string) => this.view = v;

}
