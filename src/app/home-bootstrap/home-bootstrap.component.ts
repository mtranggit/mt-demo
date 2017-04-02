import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-bootstrap',
  templateUrl: './home-bootstrap.component.html',
  styleUrls: [
    // 'https://bootswatch.com/cerulean/bootstrap.min.css',
    './home-bootstrap.component.css']
})
export class HomeBootstrapComponent implements OnInit {
  title = 'Home of Boostrap 3 Demo';
  constructor() { }

  ngOnInit() {
  }

}
