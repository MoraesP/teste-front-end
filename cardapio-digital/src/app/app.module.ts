import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicioComponent } from './components/tela-inicio/tela-inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { CardapioService } from './services/ cardapio.service';
import { HttpClientModule } from '@angular/common/http';
import { CardInfoComponent } from './components/card-info/card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicioComponent,
    HeaderComponent,
    CardInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CardapioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
