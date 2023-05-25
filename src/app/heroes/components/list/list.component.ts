import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public  list:string[]= ["Batman","Spiderman","Superman"];
  public heroeBorrado:string|undefined="";

  deleteItem():void{
    this.heroeBorrado = this.list.pop();
  }}
