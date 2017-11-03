import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LacadoresComponent } from "./lacadores/lacadores.component"
//import { LacadoresViewComponent } from "./lacadores/lacadoresView/lacadoresView.component"
//import { ClubesdelacoComponent } from "./clubesdelaco/clubesdelaco.component"
//import { ClubesdelacoViewComponent } from "./clubesdelaco/clubesdelacoView/clubesdelacoView.component"


@NgModule({
    imports: [
        CommonModule,
        FormsModule
        //LacadoresComponent
    ],
    declarations: [
      LacadoresComponent
//      LacadoresViewComponent,
//      ClubesdelacoComponent,
//      ClubesdelacoViewComponent,

    ],
    providers: [
    ],
    exports: [
      LacadoresComponent
      //CommonModule,
      //FormsModule

      //LacadoresViewComponent,
      //ClubesdelacoComponent,
      //ClubesdelacoViewComponent,
    ]
})
export class SharedModule {}
