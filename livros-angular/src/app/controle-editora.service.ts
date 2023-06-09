import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: "Record",
        autor: "Temple Grandin",
      },
      {
        codEditora: 2,
        nome: "Apress",
        autor: "Mark Joseph Obcena",
      },
      {
        codEditora: 3,
        nome: "Novatec",
        autor: "Maurício Samy Silva",
      },
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}
