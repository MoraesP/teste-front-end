import { Categoria } from './categoria';
import { Produto } from './produto';

export class Cardapio {
  categorias: Categoria[];

  constructor() {
    this.categorias = [];
  }
}
