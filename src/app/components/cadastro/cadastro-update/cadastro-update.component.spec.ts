import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUpdateComponent } from './cadastro-update.component';

describe('CadastroUpdateComponent', () => {
  let component: CadastroUpdateComponent;
  let fixture: ComponentFixture<CadastroUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroUpdateComponent]
    });
    fixture = TestBed.createComponent(CadastroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
