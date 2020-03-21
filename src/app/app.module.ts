import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ShopProduktComponent } from './shop-produkt/shop-produkt.component';
import { RouterModule, Routes } from '@angular/router';
import { NeuerShopComponent } from './neuer-shop/neuer-shop.component';
import { OverviewShoperComponent } from './overview-shoper/overview-shoper.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: 'newShop', component: NeuerShopComponent },
  { path: 'overviewShoper', component: OverviewShoperComponent },
  { path: 'newProduct', component: ShopProduktComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ShopProduktComponent,
    NeuerShopComponent,
    OverviewShoperComponent,
    OrdersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
