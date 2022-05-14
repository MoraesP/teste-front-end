import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { UpdateCardapioService } from 'src/app/services/update-cardapio.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() produto: Produto;

  constructor(private updateCardapioService: UpdateCardapioService) {}

  ngOnInit(): void {}

  deleteProduto() {
    this.updateCardapioService.deleteProduto$.next(this.produto.id);
  }
}
