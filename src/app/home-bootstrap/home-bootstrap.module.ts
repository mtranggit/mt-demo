import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBootstrapComponent } from './home-bootstrap.component';
import homeBootstrapRoutesModule from './home-bootstrap.routes';

@NgModule({
    imports: [CommonModule, homeBootstrapRoutesModule],
    declarations: [HomeBootstrapComponent]
})
export default class HomeBootstrapModule { }
