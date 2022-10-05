import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activate(i: number) {
    let links = document.getElementsByClassName('nav-item');
    console.log(links);
    for (let x = 0; x < links.length; x++) {
      links[x].classList.remove('active');
    }
    links[i].classList.add('active')
  }
}
