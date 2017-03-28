import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFlexLayoutComponent } from './home-flex-layout.component';
import flexLayoutRoutesModule from './home-flex-layout.routes';

@NgModule({
    imports: [CommonModule, flexLayoutRoutesModule],
    declarations: [HomeFlexLayoutComponent]
})
export default class HomeFlexLayoutModule {}

