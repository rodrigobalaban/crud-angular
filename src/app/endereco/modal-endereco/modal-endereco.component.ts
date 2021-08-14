import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/shared';

@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.component.html',
  styleUrls: ['./modal-endereco.component.scss']
})
export class ModalEnderecoComponent {
  @Input()
  endereco!: Endereco;

  constructor(public activeModal: NgbActiveModal) {}
}
