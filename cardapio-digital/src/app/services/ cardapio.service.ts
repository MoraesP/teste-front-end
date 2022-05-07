import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from '../models/cardapio';
import { Categoria } from '../models/categoria';

@Injectable()
export class CardapioService {
  constructor(private http: HttpClient) {}

  getCardapio() {
    const url = 'https://front-end-test-app.s3.amazonaws.com/menu.json';

    return this.http.get<Categoria[]>(url);
  }
}
