import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ShopProduktComponent } from './shop-produkt/shop-produkt.component';
import { RouterModule, Routes } from '@angular/router';
import { NeuerShopComponent } from './neuer-shop/neuer-shop.component';
import { OverviewShoperComponent } from './overview-shoper/overview-shoper.component';
import { GeoPositionComponent } from './geo-position/geo-position.component';
import { OverviewBuyerComponent } from './overview-buyer/overview-buyer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'newShop', component: NeuerShopComponent },
  { path: 'overviewShoper', component: OverviewShoperComponent },
  { path: 'overviewBuyer', component: OverviewBuyerComponent },
  { path: 'newProduct', component: ShopProduktComponent },
  { path: 'home', component: AppComponent },
  { path: 'chooseShop', component: GeoPositionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ShopProduktComponent,
    NeuerShopComponent,
    OverviewShoperComponent,
    GeoPositionComponent,
    OverviewBuyerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
