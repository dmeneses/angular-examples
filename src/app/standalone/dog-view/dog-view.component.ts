import {Component, OnInit} from '@angular/core';
import {Dog, DogsService} from '../dogs.service';
import {map, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-dog-view',
  standalone: true,
  imports: [
    AsyncPipe, NgIf, NgOptimizedImage
  ],
  templateUrl: './dog-view.component.html',
  styleUrl: './dog-view.component.scss'
})
export class DogViewComponent implements OnInit {
  dog$!: Observable<Dog | undefined>;

  constructor(private dogsService: DogsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(map(params => {
      return this.dogsService.dogs[Number(params.get('index'))]
    }))
  }

}
