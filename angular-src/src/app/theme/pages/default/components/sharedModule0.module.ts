import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LacadoresComponent } from "./lacadores/lacadores.component"
import { LacadoresViewComponent } from "./lacadores/lacadoresView/lacadoresView.component"
import { ClubesdelacoComponent } from "./clubesdelaco/clubesdelaco.component"
import { ClubesdelacoViewComponent } from "./clubesdelaco/clubesdelacoView/clubesdelacoView.component"


@NgModule({
    imports: [
        CommonModule,
        FormsModule,

    ],
    declarations: [
      LacadoresComponent,
      LacadoresViewComponent,
      ClubesdelacoComponent,
      ClubesdelacoViewComponent,

    ],
    providers: [
    ],
    exports: [
      LacadoresComponent,
      LacadoresViewComponent,
      ClubesdelacoComponent,
      ClubesdelacoViewComponent,
    ]
})
export class SharedModule {}

 export const SharedLacadoresComponent = LacadoresComponent ;
 export const SharedLacadoresViewComponent = LacadoresViewComponent ;
export const SharedClubesdelacoComponent = ClubesdelacoComponent ;
export const SharedClubesdelacoViewComponent = ClubesdelacoViewComponent ;
