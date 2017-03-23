import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  testString = 'teest';
  testNumber = 2;
  constructor() { }

  ngOnInit() {
  }

}
