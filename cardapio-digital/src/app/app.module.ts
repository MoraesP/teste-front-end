import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { HeaderComponent } from './components/header/header.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { TelaInicioComponent } from './components/tela-inicio/tela-inicio.component';
import { CardapioService } from './services/ cardapio.service';
import { UpdateCardapioService } from './services/update-cardapio.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicioComponent,
    HeaderComponent,
    CardInfoComponent,
    NovoProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RatingModule.forRoot(),

  ],
  providers: [CardapioService, UpdateCardapioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
