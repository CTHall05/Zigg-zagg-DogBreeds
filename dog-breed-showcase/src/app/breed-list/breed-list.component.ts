import { Component, OnInit } from '@angular/core';
import { BreedService } from '../breed.service';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {
  breeds: any[] = [];
  currentIndex: number = 0;

  constructor(private breedService: BreedService) {}

  ngOnInit() {
    this.breeds = this.breedService.getBreeds();
  }

  nextBreed() {
    this.currentIndex = (this.currentIndex + 1) % this.breeds.length;
  }

  previousBreed() {
    this.currentIndex = (this.currentIndex -1 + this.breeds.length) % this.breeds.length;
  }
}
