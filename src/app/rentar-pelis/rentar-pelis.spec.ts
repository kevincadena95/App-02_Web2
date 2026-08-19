import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentarPelis } from './rentar-pelis';

describe('RentarPelis', () => {
  let component: RentarPelis;
  let fixture: ComponentFixture<RentarPelis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentarPelis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentarPelis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
