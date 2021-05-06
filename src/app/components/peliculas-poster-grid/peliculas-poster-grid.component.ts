import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-interface';


@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})

export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies:Movie[];

  constructor(private router:Router) {
    
   }

   onMovieClick(movie:Movie){
     console.log(movie)
     this.router.navigate(['/pelicula',movie.id])
   }

  ngOnInit(): void {
    
    
  }
  
}
