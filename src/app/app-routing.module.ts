import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CadastroCrudComponent } from './views/cadastro-crud/cadastro-crud.component';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "cadastros",
    component: CadastroCrudComponent,
  },
  {
    path: "cadastros/create",
    component:  CadastroCreateComponent
  },
  {
    path: "cadastros/update/:id",
    component:  CadastroUpdateComponent
  },
  {
    path: "cadastros/delete/:id",
    component:  CadastroDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
