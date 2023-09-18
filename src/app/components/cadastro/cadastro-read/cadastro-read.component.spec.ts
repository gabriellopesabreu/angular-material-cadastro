import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReadComponent } from './cadastro-read.component';

describe('CadastroReadComponent', () => {
  let component: CadastroReadComponent;
  let fixture: ComponentFixture<CadastroReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroReadComponent]
    });
    fixture = TestBed.createComponent(CadastroReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
