import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerShopComponent } from './neuer-shop.component';

describe('NeuerShopComponent', () => {
  let component: NeuerShopComponent;
  let fixture: ComponentFixture<NeuerShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuerShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
