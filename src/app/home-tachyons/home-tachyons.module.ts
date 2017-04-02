import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTachyonsComponent } from './home-tachyons.component';
import HomeTachyonsComponentRoutesModule from './home-tachyons.routes';

@NgModule({
    imports: [CommonModule, HomeTachyonsComponentRoutesModule],
    declarations: [HomeTachyonsComponent]
})
export default class HomeTachyonsModule {}
