import { HttpClient } from '@angular/common/http';
import { Shop } from '../models/Shop';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShopActions {
  constructor(private http: HttpClient) { }

  createShop(shop: Shop) {
    return this.http.post('api/shops/create', shop);
  }

}
