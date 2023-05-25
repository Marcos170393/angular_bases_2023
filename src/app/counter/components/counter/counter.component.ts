import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    public counter:number =10;
    
    sumar():void{
    this.counter++;
    }

    restar():void{
    this.counter--;
    }

    reset():void{
    this.counter = 10;
    }
}