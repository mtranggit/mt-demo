import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNgbootstrapComponent } from './home-ngbootstrap.component';
import HomeNgbootstrapRoutesModule from './home-ngbootstrap.routes';

@NgModule({
    imports: [CommonModule, HomeNgbootstrapRoutesModule],
    declarations: [HomeNgbootstrapComponent]
})
export default class HomeNgbootstrapModule {}
