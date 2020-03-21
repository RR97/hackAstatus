import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProduktComponent } from './shop-produkt.component';

describe('ShopProduktComponent', () => {
  let component: ShopProduktComponent;
  let fixture: ComponentFixture<ShopProduktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProduktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
