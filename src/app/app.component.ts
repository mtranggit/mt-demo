import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navs = [
    {url: '', label   : 'Bootstrap'},
    {url: 'ngbootstrap', label : 'Ng Bootstrap'},
    {url: 'ngflexlayout', label: 'Ng FlexLayout'},
    {url: 'ngmaterial', label  : 'Ng Material'},
    {url: 'tachyons', label    : 'Tachyons'}
 ];
}
