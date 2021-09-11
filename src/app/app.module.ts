import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AuthModule } from './auth';
import { EnderecoModule } from './endereco';
import { PessoaModule } from './pessoa';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    NgSelectModule,
    EnderecoModule,
    PessoaModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
