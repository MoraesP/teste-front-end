import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.scss'],
})
export class NovoProdutoComponent implements OnInit {
  novoProdutoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
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

  submit() {
    const rawValue = this.novoProdutoForm.getRawValue() as Produto;
    console.group(rawValue);
  }
}
