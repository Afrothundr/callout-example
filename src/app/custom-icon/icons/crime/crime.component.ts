import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crime-icon',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.scss']
})
export class CrimeComponent implements OnInit {

  @Input() color = '#FFFFFF';

  constructor() { }

  ngOnInit() {
  }

}
