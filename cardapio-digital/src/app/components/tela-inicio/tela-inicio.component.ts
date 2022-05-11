import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cardapio } from 'src/app/models/cardapio';
import { Produto } from 'src/app/models/produto';
import { CardapioService } from 'src/app/services/ cardapio.service';
import { UpdateCardapioService } from 'src/app/services/update-cardapio.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.scss'],
})
export class TelaInicioComponent implements OnInit, OnDestroy {
  cardapio: Cardapio = new Cardapio();
  todosProdutos: Produto[] = [];

  filterProduto = { title: '' };

  filtroSubscription: Subscription;

  constructor(
    private cardapioService: CardapioService,
    private updateCardapioService: UpdateCardapioService
  ) {}

  ngOnInit(): void {
    this.cardapioService.getCardapio().subscribe((res) => {
      this.cardapio.categorias = res;
      this.cardapio.categorias.forEach((categoria) => {
        this.todosProdutos.push(...categoria.products);
      });
    });

    this.subscribeFiltro();
  }

  subscribeFiltro() {
    this.filtroSubscription = this.updateCardapioService.filtro$.subscribe(
      (filtro) => {
        this.filterProduto.title = filtro;
      }
    );
  }

  ngOnDestroy(): void {
    this.filtroSubscription.unsubscribe();
  }
}
