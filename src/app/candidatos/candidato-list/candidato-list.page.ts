import { Component, OnInit } from '@angular/core';
import { Candidato } from '../shared/candidato';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.page.html',
  styleUrls: ['./candidato-list.page.scss'],
})
export class CandidatoListPage implements OnInit {
  condidatos: Candidato[] = [];
  constructor() { }

  ngOnInit() {
  }

}
