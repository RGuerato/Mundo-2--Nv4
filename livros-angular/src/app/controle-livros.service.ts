import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[];

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: "O Cérebro Autista",
        resumo:
          "O autismo sendo abortado de forma direta e clara em todos os aspectos, tanto cultural como clinico e todos os rotulos envolvido nas pessoas que estão dentro do Espectro.",
        autores: ["Marijn Haverbeke"],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: "Pro JavaScript with MooTools",
        resumo:
          "Um mergulho profundo em uma estrutura JavaScript muito conhecida e aplicada por muito tempo de forma bem explicada e detalhada.",
        autores: ["Mark J. Obcena"],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: "React - Aprenda Praticando",
        resumo:
          "React é uma biblioteca para a criação de sites, interfaces gráficas e aplicações web, criada pelo Facebook, e seu uso tem crescido muito, sendo usada por grandes empresas, como Netflix, Walmart e The New York Times. Neste livro, eminentemente prático, Maujor, com sua reconhecida didática, fornece ao leitor uma visão detalhada dos conceitos básicos e recursos da biblioteca React. Você aprenderá a desenvolver aplicativos React completos, passo a passo, desde o zero até a hospedagem em um servidor remoto. Cada capítulo apresenta um novo recurso do React, com exercícios práticos para consolidar os conceitos estudados. Destina-se a desenvolvedores com conhecimentos básicos de HTML, CSS3 e JavaScript, interessados na criação de sites tanto na área de design quanto na de desenvolvimento e programação. O livro também poderá ser útil como material de referência do React.",
        autores: ["Maurício Samy Silva"],
      },
    ];
  }

  obterLivros = (): Livro[] => {
    return this.livros;
  };

  incluir = (livro: Livro): void => {
    const codigo =
      this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    this.livros.push({ ...livro, codigo });
  };

  excluir = (codigo: number): void => {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    );
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  };
}
