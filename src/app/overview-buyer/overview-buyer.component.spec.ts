import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBuyerComponent } from './overview-buyer.component';

describe('OverviewBuyerComponent', () => {
  let component: OverviewBuyerComponent;
  let fixture: ComponentFixture<OverviewBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
