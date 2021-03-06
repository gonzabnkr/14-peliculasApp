import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies:Movie[];
  mySwiper:Swiper
 
  constructor() { 
    
  }
  
  ngOnInit(): void {

    
  }

  ngAfterViewInit(): void {

    this.mySwiper = new Swiper('.swiper-container',{loop:true,});

    
  }
   
  onSlideNext(){

  this.mySwiper.slideNext();
    
  }
  onSlidePrev(){
    this.mySwiper.slidePrev();
  }


  
}
