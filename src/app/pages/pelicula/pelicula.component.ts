import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  public pelicula:MovieResponse;
  public casting:Cast[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private _ps:PeliculasService,
              private location:Location,
              private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this._ps.getPeliculaDetalle(id).subscribe(movie=>{
      if (!movie){
        this.router.navigateByUrl('/home');
      }
      console.log(movie)
      this.pelicula = movie;
    });

    this._ps.getCast(id).subscribe(cast=>{
      console.log(cast)
      this.casting = cast;
    });
  }

  regresar(){
    this.location.back();
  }

}
