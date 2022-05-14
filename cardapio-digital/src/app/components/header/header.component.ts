import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
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
export class HeaderComponent implements OnInit, OnDestroy {
  comida = '';

  cardapio: Cardapio = new Cardapio();

  todosProdutos: Produto[] = [];
  todasCategorias: Categoria[] = [];

  modalRef: BsModalRef;

  subDelete: Subscription;

  constructor(
    private cardapioService: CardapioService,
    private updateCardapioService: UpdateCardapioService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.cardapioService.getCardapio().subscribe((res) => {
      this.cardapio.categorias = res;

      this.cardapio.categorias.forEach((categoria) => {
        this.todosProdutos.push(...categoria.products);
      });
      this.todasCategorias = this.cardapio.categorias;

      this.updateCardapioService.categorias$.next(this.todasCategorias);
    });
    this.subscribeDelete();
  }

  ngOnDestroy(): void {
    if (this.subDelete) {
      this.subDelete.unsubscribe();
    }
  }

  subscribeDelete() {
    this.subDelete = this.updateCardapioService.deleteProduto$.subscribe(
      (id) => {
        this.todasCategorias.forEach((categoria) => {
          const idx = categoria.products.findIndex(
            (produto) => produto.id === id
          );
          if (idx > -1) {
            categoria.products.splice(idx, 1);
          }
        });
      }
    );
  }

  buscar() {
    this.updateCardapioService.filtroProduto$.next(this.comida);
  }

  selecionarCategoria(valor: string) {
    this.updateCardapioService.filtroCategoria$.next(valor);
  }

  openModal(template: TemplateRef<any>) {
    const config = {
      ignoreBackdropClick: true,
    };
    this.modalRef = this.modalService.show(template, config);
  }

  closeModal() {
    this.modalRef.hide();
  }

  salvar(result) {
    result.produto.id = this.todosProdutos.length;
    this.todasCategorias
      .find((categoria) => categoria.category_title === result.categoria)
      .products.push(result.produto);
    this.updateCardapioService.categorias$.next(this.todasCategorias);
    this.modalRef.hide();
  }
}
