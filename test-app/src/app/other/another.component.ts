import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>
      another Works!
    </p>
  `,
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
