import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellDetailsComponent } from './admin-sell-details.component';

describe('AdminSellDetailsComponent', () => {
  let component: AdminSellDetailsComponent;
  let fixture: ComponentFixture<AdminSellDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSellDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
