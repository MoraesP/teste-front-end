import { Component, OnInit } from '@angular/core';
import { UpdateCardapioService } from 'src/app/services/update-cardapio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  comida = '';

  constructor(private updateCardapioService: UpdateCardapioService) {}

  ngOnInit(): void {}

  buscar() {
    this.updateCardapioService.filtro$.next(this.comida);
  }
}
