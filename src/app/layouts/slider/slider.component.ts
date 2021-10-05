import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  images = ["s1.webp", "s2.webp", "s3.webp", "s4.webp"].map((n) => `../../../assets/img/${n}`);

  constructor() { }

  ngOnInit(): void {
  }

}
