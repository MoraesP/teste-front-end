import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cardapio } from 'src/app/models/cardapio';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';
import { CardapioService } from 'src/app/services/ cardapio.service';
import { UpdateCardapioService } from 'src/app/services/update-cardapio.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.scss'],
})
export class TelaInicioComponent implements OnInit, OnDestroy {
  todasCategorias: Categoria[] = [];

  filterProduto = { title: '' };
  filterCategoria = { category_title: '' };

  subscriptions: Subscription[] = [];

  constructor(
    private cardapioService: CardapioService,
    private updateCardapioService: UpdateCardapioService
  ) {}

  ngOnInit(): void {
    this.subscribeCategorias();
    this.subscribeFiltroProduto();
    this.subscribeFiltroCategoria();
  }

  subscribeFiltroProduto() {
    const subscription = this.updateCardapioService.filtroProduto$.subscribe(
      (filtro) => {
        this.filterProduto.title = filtro;
      }
    );
    this.subscriptions.push(subscription);
  }

  subscribeFiltroCategoria() {
    const subscription = this.updateCardapioService.filtroCategoria$.subscribe(
      (categoria) => {
        this.filterCategoria.category_title = categoria;
      }
    );
    this.subscriptions.push(subscription);
  }

  subscribeCategorias() {
    const subscription = this.updateCardapioService.categorias$.subscribe(
      (categorias) => {
        this.todasCategorias = categorias;
      }
    );
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach((subs) => {
        subs.unsubscribe();
      });
    }
  }
}
