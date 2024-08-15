import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  isPaginaFavorito: boolean = false;
  listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual,this.filtro, this.isPaginaFavorito).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.isPaginaFavorito).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length) this.haMaisPensamentos = false
    });
  }

  buscarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.isPaginaFavorito).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  changeListagemFavoritos(isFavorito: boolean) {
    this.isPaginaFavorito = isFavorito;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.isPaginaFavorito).subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos;
      if(isFavorito) this.listaFavoritos = listaPensamentos;
    })
  }

}
