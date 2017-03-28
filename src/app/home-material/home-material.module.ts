import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMaterialComponent } from './home-material.component';
import materialRoutesModule from './home-material.routes';
@NgModule({
    imports: [CommonModule, materialRoutesModule ],
    declarations: [HomeMaterialComponent]
})
export default class HomeMaterialModule {}
