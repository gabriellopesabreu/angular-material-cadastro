import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCrudComponent } from './cadastro-crud.component';

describe('CadastroCrudComponent', () => {
  let component: CadastroCrudComponent;
  let fixture: ComponentFixture<CadastroCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCrudComponent]
    });
    fixture = TestBed.createComponent(CadastroCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
