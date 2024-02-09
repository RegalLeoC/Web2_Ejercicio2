import { Component, inject } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  listUsers = [
    {name: "Francisco"},
    {
      name: "Alberto"
    },
    {
      name: "Juan"
    },
  ]


  count = 0;
 
  route = ActivatedRoute;
  private activatedRoute = inject(ActivatedRoute)
  id = this.activatedRoute.snapshot.params['id'] || "No hay valor";

  countSum(value: number) {
    this.count = value;
  }

}
