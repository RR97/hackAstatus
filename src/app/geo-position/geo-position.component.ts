import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-geo-position',
  templateUrl: './geo-position.component.html',
  styleUrls: ['./geo-position.component.css']
})
export class GeoPositionComponent implements OnInit {
  items: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [];
  }

  selectShop = (shopName: string) => {
    localStorage.setItem('shop', shopName);
    this.router.navigate(['/overviewBuyer']);
  }

}
