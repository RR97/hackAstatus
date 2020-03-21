import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewShoperComponent } from './overview-shoper.component';

describe('OverviewShoperComponent', () => {
  let component: OverviewShoperComponent;
  let fixture: ComponentFixture<OverviewShoperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewShoperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewShoperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
