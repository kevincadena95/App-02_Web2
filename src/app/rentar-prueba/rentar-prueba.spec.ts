import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentarPrueba } from './rentar-prueba';

describe('RentarPrueba', () => {
  let component: RentarPrueba;
  let fixture: ComponentFixture<RentarPrueba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentarPrueba]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentarPrueba);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
