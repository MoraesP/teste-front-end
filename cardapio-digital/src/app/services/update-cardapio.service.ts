import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable()
export class UpdateCardapioService {
  produtos$ = new Subject<Produto[]>();

  filtro$ = new Subject<string>();
}
