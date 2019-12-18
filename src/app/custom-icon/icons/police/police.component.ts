import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-police-icon',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.scss']
})
export class PoliceComponent implements OnInit {

  @Input() color = '#FFFFFF';

  constructor() { }

  ngOnInit() {
  }

}
