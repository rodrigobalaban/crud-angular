import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuPipePipe } from './pipes';
import { MinimoValidatorDirective, NumericoDirective } from './directives';

@NgModule({
  declarations: [NumericoDirective, MinimoValidatorDirective, MeuPipePipe],
  imports: [CommonModule],
  exports: [NumericoDirective, MinimoValidatorDirective, MeuPipePipe],
})
export class SharedModule {}
