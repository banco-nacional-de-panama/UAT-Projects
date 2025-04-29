import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskApprobalsComponent } from './risk-approbals.component';

describe('RiskApprobalsComponent', () => {
  let component: RiskApprobalsComponent;
  let fixture: ComponentFixture<RiskApprobalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskApprobalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskApprobalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
