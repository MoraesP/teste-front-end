import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cardapio } from 'src/app/models/cardapio';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';
import { CardapioService } from 'src/app/services/ cardapio.service';
import { UpdateCardapioService } from 'src/app/services/update-cardapio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  comida = '';

  cardapio: Cardapio = new Cardapio();

  todosProdutos: Produto[] = [];
  todasCategorias: Categoria[] = [];

  constructor(
    private cardapioService: CardapioService,
    private updateCardapioService: UpdateCardapioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cardapioService.getCardapio().subscribe((res) => {
      this.cardapio.categorias = res;

      this.cardapio.categorias.forEach((categoria) => {
        this.todosProdutos.push(...categoria.products);
      });
      this.todasCategorias = this.cardapio.categorias;

      this.updateCardapioService.produtos$.next(this.todosProdutos);
      this.updateCardapioService.categorias$.next(this.todasCategorias);
    });
  }

  buscar() {
    this.updateCardapioService.filtroProduto$.next(this.comida);
  }

  selecionarCategoria(valor: string) {
    this.updateCardapioService.filtroCategoria$.next(valor);
  }

  navegar(rota) {
    this.router.navigateByUrl(rota);
  }
}
