import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/models/cardapio';
import { Produto } from 'src/app/models/produto';
import { CardapioService } from 'src/app/services/ cardapio.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.scss']
})
export class TelaInicioComponent implements OnInit {

  cardapio: Cardapio = new Cardapio();
  todosProdutos: Produto[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapioService.getCardapio().subscribe(res => {
     this.cardapio.categorias = res;
     this.cardapio.categorias.forEach(categoria => {
       this.todosProdutos.push(...categoria.products);
     })
    });
  }

}
