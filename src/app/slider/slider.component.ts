import {Component, NgModule, Input, AfterViewInit, ViewChild, Renderer2} from '@angular/core';
import { CarouselModule, CarouselComponent } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [ CarouselModule ],
  declarations: [ SliderComponent ]
})

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit  {
  @ViewChild(CarouselComponent) owl = CarouselComponent;
  @Input() slides: [{src: string, alt: string, title: string, id: string}];

  started = false;

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
  };

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Hack for case when initial width of carousel equals to 0 (hidden carousel).
    setInterval(() => {
      const currentWidth = this.owl['el'].nativeElement.querySelector(
        '.owl-carousel'
      ).clientWidth;
      // Emulate resize event to trigger reinitialize sliders.
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', true, false);
      document.dispatchEvent(event);

      if (currentWidth > 0 && !this.started) {
        this.owl['next']();
        this.started = true;
      }
      if (!currentWidth) { this.started = false; }
    }, 100);
  }
}
