import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { TelaInicioComponent } from './components/tela-inicio/tela-inicio.component';

const routes: Routes = [
  {
    path: '',
    component: TelaInicioComponent,
    data: { title: 'Página inicial' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
