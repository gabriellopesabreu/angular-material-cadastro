import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {
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
      const id = this.route.snapshot.paramMap.get('id');
      this.cadastroService.readById(id!).subscribe((cadastro) => {
        this.cadastro = cadastro;
      });
    }
  
    deleteCadastro(): void {
      this.cadastroService.delete(`${this.cadastro.id}`).subscribe(() => {
        this.cadastroService.showMessage("Cadastro excluido com sucesso!");
        this.router.navigate(["/cadastros"]);
      });
    }
  
    cancel(): void {
      this.router.navigate(["/cadastros"]);
    }
  }
