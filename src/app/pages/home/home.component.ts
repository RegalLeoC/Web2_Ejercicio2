import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';
import { MusicComponent } from '../../components/music/music.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MoviesComponent, MusicComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  componentView = "movies"
  message = ''
  onMouseOver() {
    this.message = "Me econtraste!!!"
  }

  onMouseOff() {
    this.message = ""
  }

}
