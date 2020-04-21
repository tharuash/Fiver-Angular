import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-car',
  templateUrl: './popular-car.component.html',
  styleUrls: ['./popular-car.component.css']
})
export class PopularCarComponent implements OnInit {
  @Input() image: string;
  @Input() left: string;
  @Input() car_name: string;
  @Input() price: string;
  constructor() { }

  ngOnInit() {
  }

}
