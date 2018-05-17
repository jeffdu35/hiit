import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { COUNTERS } from '../mock-counters';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  counters = COUNTERS;

  selectedCounter: Counter;

  constructor() { }

  ngOnInit() {
  }

  onSelect(counter: Counter): void {
    this.selectedCounter = counter;
  }
}

