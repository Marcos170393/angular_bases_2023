import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService{

  constructor() { }

  public characters:Character[]=[
    {
      id:uuid(),
      name:"Pedro",
      power:100
    },
    {
      id:uuid(),
      name:"Javier",
      power:1090
    }
  ];


  addCharacter(character:Character):void{
    const newCharacter:Character = {
      id:uuid(),...character
    }
      this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string):void{

      this.characters = this.characters.filter((item:Character)=>item.id! != id);
      
  }
}
