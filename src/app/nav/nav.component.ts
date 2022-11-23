import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
enabled : boolean = false;
  constructor() { }

  ngOnInit(): void { 
    $('#hidden').hide();
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled === true) {
      console.log("show menu");
      $('#hidden').show();
      $('#shown').hide();
      $('#navbar').addClass('sidebar').show();
    } else {
      console.log('hide menu');
      $('#hidden').hide();
      $('#shown').show();
      $('#navbar').hide();
    }
  }
}
