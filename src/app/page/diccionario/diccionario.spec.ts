import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diccionario } from './diccionario';

describe('Diccionario', () => {
  let component: Diccionario;
  let fixture: ComponentFixture<Diccionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diccionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diccionario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
