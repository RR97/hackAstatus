import { HttpClient } from '@angular/common/http';
import { Shop } from '../models/shop';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShopCreate {
  constructor(private http: HttpClient) { }

  createShop(shop: Shop) {
    return this.http.post('api/shops/create', shop);
  }
  getShops() {
    return this.http.get('api/shops/all');
  }

}
