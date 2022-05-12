import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Categoria } from '../models/categoria';
import { Produto } from '../models/produto';

@Injectable()
export class UpdateCardapioService {
  categorias$ = new Subject<Categoria[]>();

  filtroProduto$ = new Subject<string>();

  filtroCategoria$ = new Subject<string>();
}
