import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy{

  movies: Movie[]=[]
  moviesSlideShow: Movie[]=[]

  @HostListener('window:scroll',['$event'])
  onScrol(){
    const pos = document.documentElement.scrollTop + 1000;
    const max = document.documentElement.scrollHeight;
    
    if (pos > max){

      if(this._ps.cargando){return;}

      this._ps.getCartelera().subscribe(movies=>{
        this.movies.push(...movies);
      });
    }


  }


  constructor(private _ps:PeliculasService) { }

  ngOnInit(): void {
    this._ps.getCartelera().subscribe(movies=>{
      
      this.movies = movies;
      this.moviesSlideShow = movies;
    })
  }

  ngOnDestroy(){
    this._ps.carteleraReset()
  }

}
