import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentarPelisVip } from './rentar-pelis-vip';

describe('RentarPelisVip', () => {
  let component: RentarPelisVip;
  let fixture: ComponentFixture<RentarPelisVip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentarPelisVip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentarPelisVip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
