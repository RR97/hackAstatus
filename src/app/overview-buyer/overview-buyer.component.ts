import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview-buyer',
  templateUrl: './overview-buyer.component.html',
  styleUrls: ['./overview-buyer.component.css']
})
export class OverviewBuyerComponent implements OnInit {
  shopName: string;
  view: string;
  items: any;

  constructor() { }

  ngOnInit() {
    this.view = '';
    this.items = [{title: 'Eier'}, {title: 'Brot'}, {title: 'Zucker'}];
    this.shopName = localStorage.getItem('shop');
  }

  setView = (v: string) => this.view = v;
}
