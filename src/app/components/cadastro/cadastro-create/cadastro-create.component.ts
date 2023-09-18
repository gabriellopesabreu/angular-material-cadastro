import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css'],
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = {
    name: '',
    registro: '',
    nameFarm: '',
    city: '',
    state: '',
    aTotal: '',
    aAgri: '',
    aVeg: '',
    cultures: '',
  };

  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  createCadastro(): void {
    this.cadastroService.create(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage('Operacao Executada');
      this.router.navigate(['/cadastros']);
      console.log(this.cadastro);
    });
  }

  cancel(): void {
    this.router.navigate(['/cadastros']);
  }

  // isValidAreaTotal(): boolean {
  //   if (this.cadastro.aTotal === null || this.cadastro.aVeg === null || this.cadastro.aAgri === null) {
  //     return false;
  //   }
  //   return this.cadastro.aTotal >= (this.cadastro.aVeg + this.cadastro.aAgri);
  // }

  // validarAreaTotal() {
  //   if (this.cadastro.aTotal === null || this.cadastro.aVeg === null || this.cadastro.aAgri === null) {
  //     return; //
  //   }
  //   if (this.cadastro.aTotal < this.cadastro.aVeg + this.cadastro.aAgri) {

  //   }
  // }

}

