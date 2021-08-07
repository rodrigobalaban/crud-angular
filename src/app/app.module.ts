import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { PessoaModule } from './pessoa';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModule } from './endereco';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    EnderecoModule,
    PessoaModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
