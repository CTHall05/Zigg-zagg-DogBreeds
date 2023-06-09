import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedListComponent } from './breed-list.component';
import { BreedService } from '../breed.service';

describe('BreedListComponent', () => {
  let component: BreedListComponent;
  let fixture: ComponentFixture<BreedListComponent>;
  let breedService: BreedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedListComponent],
      providers: [BreedService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedListComponent);
    component = fixture.componentInstance;
    breedService = TestBed.inject(BreedService); // Inject the BreedService instance

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize breeds array on component initialization', () => {
    expect(component.breeds).toEqual([
      {
        name: 'Labrador Retriever',
        description: 'The Labrador Retriever is a friendly, outgoing, and versatile dog breed. Labradors are often used as guide dogs, therapy dogs, and search and rescue dogs. They have a life span of 10-12 years and weigh between 55-80 pounds.',
        characteristics: ['Friendly', 'Active', 'Intelligent'],
        ageSpan: '10-12 years',
        weight: '55-80 pounds',
        image: {
          url: 'https://images.unsplash.com/photo-1524401033441-e87cab019093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          altText: 'A picture of a Labrador Retriever'
        }
      },
      {
        name: 'German Shepherd',
        description: 'The German Shepherd is a loyal, courageous, and highly intelligent dog breed. German Shepherds are known for their protective instincts and versatility. They have a life span of 9-13 years and weigh between 50-90 pounds.',
        characteristics: ['Loyal', 'Courageous', 'Intelligent'],
        ageSpan: '9-13 years',
        weight: '50-90 pounds',
        image: {
          url: 'https://images.unsplash.com/photo-1575796267277-8728d6a36aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          altText: 'A picture of a German Shepherd'
        }
      },
      // Add more breeds with updated image properties
      {
        name: 'Springer Spaniel',
        description: 'The Springer Spaniel is a lively, affectionate, and intelligent dog breed. Springer Spaniels make great companions for active individuals or families. They have a life span of 12-14 years and weigh between 40-50 pounds.',
        characteristics: ['Lively', 'Affectionate', 'Intelligent'],
        ageSpan: '12-14 years',
        weight: '40-50 pounds',
        image: {
          url: 'https://images.unsplash.com/photo-1590590024926-6eece48bf24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          altText: 'A picture of a Springer Spaniel'
        }
      },
      // Add more breeds with updated image properties
      {
        name: 'Bulldog',
        description: 'The Bulldog is a sturdy, muscular, and docile dog breed. Bulldogs are known for their gentle and easygoing nature, making them great family pets. They have a life span of 8-10 years and weigh between 40-50 pounds.',
        characteristics: ['Sturdy', 'Muscular', 'Docile'],
        ageSpan: '8-10 years',
        weight: '40-50 pounds',
        image: {
          url: 'https://images.unsplash.com/photo-1517723223973-e41138b7cad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
          altText: 'A picture of a Bulldog'
        }
      },
      // Add more breeds with updated image properties
      {
        name: 'Poodle',
        description: 'The Poodle is an intelligent, active, and alert dog breed. Poodles are highly trainable and often excel in obedience and agility competitions. They have a life span of 12-15 years and weigh between 45-70 pounds.',
        characteristics: ['Intelligent', 'Active', 'Alert'],
        ageSpan: '12-15 years',
        weight: '45-70 pounds',
        image: {
          url: 'https://images.unsplash.com/photo-1619979842913-08603df442de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          altText: 'A picture of a Poodle'
        }
      },
      // Add more breeds with updated image properties
      {
        name: 'Beagle',
        description: 'The Beagle is a friendly, curious, and merry dog breed. Beagles are known for their sociable and playful nature, making them great companions. They have a life span of 12-15 years and weigh between 20-30 pounds.',
        characteristics: ['Friendly', 'Curious', 'Merry'],
        ageSpan: '12-15 years',
        weight: '20-30 pounds',
        image: {
          url: 'https://images.unsplash.com/photo-1599130412070-9a4a4249a270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          altText: 'A picture of a Beagle'
        }
      },
      // Add more breeds with updated image properties
      {
        name: 'Boxer',
        description: 'The Boxer is an energetic, playful, and friendly dog breed. Boxers are great family pets and are known for their loyalty and protective instincts. They have a life span of 10-12 years and weigh between 50-80 pounds.',
        characteristics: ['Energetic', 'Playful', 'Friendly'],
        ageSpan: '10-12 years',
        weight: '50-80 pounds',
        image: {
          url: 'https://images.unsplash.com/photo-1558349699-1e1c38c05eeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          altText: 'A picture of a Boxer'
        }
      },
      // Add more breeds with updated image properties
      {
        name: 'Siberian Husky',
        description: 'The Siberian Husky is a friendly, adventurous, and outgoing dog breed. Huskies have a strong sled-dog heritage and are known for their endurance. They have a life span of 12-14 years and weigh between 35-60 pounds.',
        characteristics: ['Friendly', 'Adventurous', 'Outgoing'],
        ageSpan: '12-14 years',
        weight: '35-60 pounds',
        image: {
          url: 'https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
          altText: 'A picture of a Siberian Husky'
        }
      }
    ]); // Initial breeds array should be empty

    fixture.detectChanges();

    expect(component.breeds).toEqual(breedService.getBreeds()); // Verify that breeds array is populated with data from BreedService
  });

  it('should increment currentIndex on nextBreed', () => {
    const initialIndex = component.currentIndex;

    component.nextBreed();

    expect(component.currentIndex).toEqual((initialIndex + 1) % component.breeds.length);
  });

  it('should decrement currentIndex on previousBreed', () => {
    const initialIndex = component.currentIndex;

    component.previousBreed();

    expect(component.currentIndex).toEqual((initialIndex - 1 + component.breeds.length) % component.breeds.length);
  });
});
