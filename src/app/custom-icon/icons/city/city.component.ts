import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-icon',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() color = '#FFFFFF';

  constructor() { }

  ngOnInit() {
  }

}
