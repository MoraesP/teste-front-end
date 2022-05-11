import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CardInfoComponent } from './card-info/card-info.component';
@NgModule({
  declarations: [HeaderComponent, CardInfoComponent],
  imports: [CommonModule, FormsModule],
  exports: [],
})
export class ComponentsModule {}
