import { Component, NgModule, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [ CarouselModule ],
  declarations: [ SliderComponent ]
})

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  {
  @Input() slides: [{src: string, alt: string, title: string, id: string}];

  customOptions: any = {
    autoplay: true,
    autoplayTimeout: 1000,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      }
    },
    nav: true
  }

}
