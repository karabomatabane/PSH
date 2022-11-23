import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { trigger, transition, style, animate } from '@angular/animations';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pic = "team1";
  count = 1;
  id: any;
  constructor() { }

  ngOnInit(): void {
    this.id = setInterval(() => {
      this.next(); 
    }, 5000);
  }
  
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }


  prev() {
    if (this.count < 6) {
      this.count -= 1;
    }
    else {
      this.count = 1;
    }
    document.getElementsByClassName('carousel-control-next')[0].classList.add('fade-out');
    this.pic = `team${this.count}`
  }

   next() {
    document.querySelector('.img-box img').classList.add('fade-out');
    if (this.count < 6) {
      this.count += 1;
    }
    else {
      this.count = 1;
    }
    setInterval(() => {
      document.querySelector('.img-box img').classList.remove('fade-out');
    }, 500);
    
    this.pic = `team${this.count}`
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

}
