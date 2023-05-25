import { NgModule } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        HeroComponent,
        ListComponent
    ],
    declarations: [
        HeroComponent,
        ListComponent
        ],
    providers: [],
    imports:[
        CommonModule
    ]
})
export class HeroesModule { }
