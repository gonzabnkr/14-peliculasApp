import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  movies : Movie[] = [];
  pelicualTxt :string = '';

  constructor(private activatedRoute:ActivatedRoute,
              private _ps:PeliculasService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      console.log(params.texto)
      this.pelicualTxt = params.texto
       this._ps.buscarPeliculas(params.texto).subscribe(resp=>{
        console.log(resp)
      });
    })

    this._ps.buscarPeliculas(this.pelicualTxt).subscribe(movies=>{
      this.movies = movies;
    })
  }

}
