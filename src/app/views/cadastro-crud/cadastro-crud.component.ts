import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-crud',
  templateUrl: './cadastro-crud.component.html',
  styleUrls: ['./cadastro-crud.component.css']
})
export class CadastroCrudComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateToCadastroCreate(): void {
    this.router.navigate(['/cadastros/create'])
  }

}
