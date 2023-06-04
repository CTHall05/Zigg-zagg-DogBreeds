import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  getBreeds() {
    return [
      {
        name: 'Labrador Retriever',
        description: 'The Labrador Retriever is a friendly and outgoing dog breed.',
        characteristics: ['Friendly', 'Active', 'Intelligent'],
        ageSpan: '10-12 years',
        weight: '55-80 pounds',
        image: 'https://images.unsplash.com/photo-1524401033441-e87cab019093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      },
      {
        name: 'German Shepherd',
        description: 'The German Shepherd is a loyal and courageous dog breed.',
        characteristics: ['Loyal', 'Courageous', 'Intelligent'],
        ageSpan: '9-13 years',
        weight: '50-90 pounds',
        image: 'https://images.unsplash.com/photo-1575796267277-8728d6a36aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      },
      {
        name: 'Springer Spaniel',
        description: 'The Springer Spaniel is a lively and affectionate dog breed.',
        characteristics: ['Lively', 'Affectionate', 'Intelligent'],
        ageSpan: '12-14 years',
        weight: '40-50 pounds',
        image: 'https://images.unsplash.com/photo-1590590024926-6eece48bf24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      },
      {
        name: 'Bulldog',
        description: 'The Bulldog is a sturdy and muscular dog breed.',
        characteristics: ['Sturdy', 'Muscular', 'Docile'],
        ageSpan: '8-10 years',
        weight: '40-50 pounds',
        image: 'https://images.unsplash.com/photo-1517723223973-e41138b7cad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
      },
      {
        name: 'Poodle',
        description: 'The Poodle is an intelligent and active dog breed.',
        characteristics: ['Intelligent', 'Active', 'Alert'],
        ageSpan: '12-15 years',
        weight: '45-70 pounds',
        image: 'https://images.unsplash.com/photo-1619979842913-08603df442de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      },
      {
        name: 'Beagle',
        description: 'The Beagle is a friendly and curious dog breed.',
        characteristics: ['Friendly', 'Curious', 'Merry'],
        ageSpan: '12-15 years',
        weight: '20-30 pounds',
        image: 'https://images.unsplash.com/photo-1599130412070-9a4a4249a270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      },
      {
        name: 'Rottweiler',
        description: 'The Rottweiler is a loyal and protective dog breed.',
        characteristics: ['Loyal', 'Protective', 'Confident'],
        ageSpan: '8-10 years',
        weight: '80-135 pounds',
        image: 'https://example.com/rottweiler.jpg'
      },
      {
        name: 'Boxer',
        description: 'The Boxer is an energetic and playful dog breed.',
        characteristics: ['Energetic', 'Playful', 'Friendly'],
        ageSpan: '10-12 years',
        weight: '50-80 pounds',
        image: 'https://example.com/boxer.jpg'
      },
      {
        name: 'Siberian Husky',
        description: 'The Siberian Husky is a friendly and adventurous dog breed.',
        characteristics: ['Friendly', 'Adventurous', 'Outgoing'],
        ageSpan: '12-14 years',
        weight: '35-60 pounds',
        image: 'https://example.com/siberian-husky.jpg'
      }
    ]
  }
}
