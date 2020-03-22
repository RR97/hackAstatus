import { Component, OnInit } from '@angular/core';
import {ShopCreate} from '../services/shop.create';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-neuer-shop',
  templateUrl: './neuer-shop.component.html',
  styleUrls: ['./neuer-shop.component.css']
})
export class NeuerShopComponent implements OnInit {
  shopForm: FormGroup;

  constructor(private router: Router,
              private shopAction: ShopCreate,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.shopForm = this.formBuilder.group({
      name: [''],
      email: [''],
      number: [''],
      address: [''],
      city: [''],
      region: [''],
      zip: ['']
    });
  }

  onSubmit() {
    this.shopAction.createShop(this.shopForm.value)
      .subscribe(data => {});
    this.router.navigate(['/overviewShoper']);
  }


}
