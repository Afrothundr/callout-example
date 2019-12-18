import { Component, OnInit, Input } from '@angular/core';
import { Callout } from '../form/callout.interface';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent implements OnInit {

  @Input() displayValues: Callout;

  constructor() { }

  ngOnInit() {
  }

}
