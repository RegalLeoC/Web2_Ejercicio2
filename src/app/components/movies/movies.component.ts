import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  count = 0;
  @Output() countEventEmitter = new EventEmitter();

  sum() {
    this.count ++;
    this.countEventEmitter.emit(this.count);
  }

}
