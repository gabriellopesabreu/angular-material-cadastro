import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css'],
})
export class CadastroUpdateComponent implements OnInit {
  cadastro: Cadastro = {
    name: '',
    registro: '',
    nameFarm: '',
    city: '',
    state: '',
    aTotal: null,
    aAgri: null,
    aVeg: null,
    cultures: ''
  }
  
  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cadastroService.readById(id!).subscribe(cadastro => {
      this.cadastro = cadastro
    })
  }

  updateCadastro(): void {
    this.cadastroService.update(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage('Operacao Executada')
      this.router.navigate(['/cadastros'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cadastros']);
  }
}
