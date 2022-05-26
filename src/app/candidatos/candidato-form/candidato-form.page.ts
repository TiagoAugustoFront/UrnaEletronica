import { Component, OnInit } from '@angular/core';
import { Candidato } from '../shared/candidato';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.page.html',
  styleUrls: ['./candidato-form.page.scss'],
})
export class CandidatoFormPage implements OnInit {
  title: string = 'Novo candidato';
  candidato: Candidato;

  constructor() { }

  ngOnInit() {
    this.candidato = new Candidato();
  }

}
