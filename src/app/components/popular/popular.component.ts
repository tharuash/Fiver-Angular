import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  imageDetails = [
    {path : '../../../assets/img/popular1.jpeg', left : '200px', name: 'Lamborghini', price: '450'},
    {path : '../../../assets/img/popular2.jpg', left : '650px', name: 'Jaguar', price: '350'},
    {path : '../../../assets/img/popular3.jpeg', left : '1050px', name: 'Camaro', price: '250'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
