import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Digite um conteúdo',
    autoria: 'Digite a autoria',
    modelo: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {

  }

}
