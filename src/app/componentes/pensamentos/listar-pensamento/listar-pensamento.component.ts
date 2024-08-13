import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Fazendo passagem de informações',
      autoria: 'Ana',
      modelo: 'modelo3',
    },
    {
      conteudo:
        'Algo escrito aqui',
      autoria: 'Clara',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular Uhuuul Angular',
      autoria: 'Componente pai',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
