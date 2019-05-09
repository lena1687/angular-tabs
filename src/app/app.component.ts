import { Component, NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [ CarouselModule ],
  declarations: [ SliderComponent ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
