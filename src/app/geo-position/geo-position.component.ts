import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShopCreate} from '../services/shop.create';

@Component({
  selector: 'app-geo-position',
  templateUrl: './geo-position.component.html',
  styleUrls: ['./geo-position.component.css']
})
export class GeoPositionComponent implements OnInit {
  items: any;

  constructor(private router: Router, private shopAction: ShopCreate) { }

  ngOnInit() {
    this.items = this.shopAction.getShops();
  }

  selectShop = (shopName: string) => {
    localStorage.setItem('shop', shopName);
    this.router.navigate(['/overviewBuyer']);
  }

  public trackItem(index: number, item: any) {
    return item._id;
  }
}
