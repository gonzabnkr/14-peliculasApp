import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ng-starrating';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';




@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent, CastSlideshowComponent],
  imports: [
    CommonModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    RouterModule,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent
    
  ]
})
export class ComponentsModule { }
