import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-icon',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() color = '#FFFFFF';

  constructor() { }

  ngOnInit() {
  }

}
