import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-interface';
import { CreditsResponse } from '../interfaces/credits-response';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private baseUrl: string ='https://api.themoviedb.org/3';
  private carteleraPage = 1;
  private searchPage = 1;
  public cargando:boolean = false;

  constructor(private httpClient:HttpClient) { }

  get params(){
    return {
      api_key:'6d470d1c9d481673ec32371b604d7acd',
      language:'es-ES',
      page:this.carteleraPage.toString()
    }
  }

  carteleraReset(){
    this.carteleraPage = 1;
  }
  
  getPeliculaDetalle(id:string){
    
    return this.httpClient.get<MovieResponse>(`${this.baseUrl}/movie/${id}`,{
      params : this.params
    }).pipe(
      catchError(err=>of(null))
    )
    
  }

  getCast(id:string){
    
    return this.httpClient.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`,{
      params : this.params
    }).pipe(
      map(resp=>resp.cast),
      catchError(err=>of([]))
    )
    
  }

  getCartelera():Observable<Movie[]>{
    
    if(this.cargando){
      return of([]);
    }
   
    this.cargando = true;
    return this.httpClient.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params:this.params
    }).pipe(
      map((resp)=>resp.results),
      tap(()=>{
        this.carteleraPage += 1;
        this.cargando = false;
      })
    )
  }

  buscarPeliculas(texto):Observable<Movie[]>{

    let params = {...this.params,page:'1',query:texto}

    return this.httpClient.get<CarteleraResponse>(`${this.baseUrl}/search/movie?`,{
      params
    }).pipe(
      map((resp)=>resp.results),
    )

  }
  
  
}
