import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() produto: Produto;

  constructor() {}

  ngOnInit(): void {}
}
