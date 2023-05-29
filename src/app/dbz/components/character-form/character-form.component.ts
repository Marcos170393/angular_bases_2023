import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent {
  
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  
  public character:Character={
    name:'',
    power:0
  }
  
  saveCharacter(){
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name : '',power:0};
  }

}
