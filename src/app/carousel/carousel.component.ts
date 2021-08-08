import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IDocuments } from '../app.component';

export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('2s', style({ opacity: 1 }))
])

export const scaleIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }),
  animate('2s', style({ opacity: 1, transform: "scale(1)" }))
])

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations:[
    trigger('carouselAnimation',[
      transition('void=>*',[
       useAnimation(fadeIn)
      ])
    ])
  ]
})

export class CarouselComponent implements OnInit {
  @Input()
  slides!: IDocuments[];
  currentIndex: number = 0;
  counterValue!: string;
  time = 5;
  constructor() { }

  ngOnInit(): void {
    
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++
    } else {
      this.currentIndex = 0;
    }
    

  }

  pre() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
    
  }

}
