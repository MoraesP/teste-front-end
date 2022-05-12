import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.scss'],
})
export class NovoProdutoComponent implements OnInit {
  novoProdutoForm: FormGroup;
  categoriaSelecionada = '';

  @Input() categorias: Categoria[] = [];
  @Output() saveEmit = new EventEmitter<any>();
  @Output() cancelEmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.categoriaSelecionada = this.categorias[0].category_title;
  }

  buildForm() {
    this.novoProdutoForm = this.fb.group({
      id: null,
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      picture: ['', [Validators.required]],
      thumbnail: '',
    });
  }

  selecionarCategoria(valor: string) {
    this.categoriaSelecionada = valor;
  }

  submit() {
    const rawValue = this.novoProdutoForm.getRawValue() as Produto;

    const produtoCategoria = {
      produto: rawValue,
      categoria: this.categoriaSelecionada,
    };

    this.saveEmit.emit(produtoCategoria);
  }

  cancelar() {
    this.cancelEmit.emit();
  }
}
