import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './listdbz.component.html',
  styleUrl: './listdbz.component.css',
})
export class ListdbzComponent {
  @Input()
  public chracterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  // onDelete = Index value: number
  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   //TODO: Emitir el ID Personaje
  //   this.onDelete.emit(index);
  // }

  // onDelete = Id value: string
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteChracter(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id);
  }
}
