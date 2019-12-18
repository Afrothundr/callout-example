import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alarm-icon',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {

  @Input() color = '#FFFFFF';

  constructor() { }

  ngOnInit() {
  }

}
