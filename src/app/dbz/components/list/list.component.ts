import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public listCharacter:Character[]=[];

  @Output()
  public deleteCharacterById: EventEmitter<string> = new EventEmitter();

  deleteItem(id:string){

    this.deleteCharacterById.emit(id);
  }
}
