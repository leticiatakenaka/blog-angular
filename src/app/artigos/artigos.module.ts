import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtigosRoutingModule } from './artigos-routing.module';
import { ArtigosComponent } from './artigos.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ArtigosComponent],
  imports: [CommonModule, ArtigosRoutingModule, MatCardModule],
})
export class ArtigosModule {}
