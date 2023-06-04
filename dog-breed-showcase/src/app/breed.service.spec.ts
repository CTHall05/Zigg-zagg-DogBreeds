import { BreedService } from './breed.service';

describe('BreedService', () => {
  let service: BreedService;

  beforeEach(() => {
    // Create an instance of the BreedService before each test
    service = new BreedService();
  });

  // Test cases go here
  it('should return an array of dog breeds', () => {
    // Call the `getBreeds` method and store the result
    const breeds = service.getBreeds();
  
    // Assert that the result is an array
    expect(Array.isArray(breeds)).toBe(true);
  
    // Add more specific assertions based on your requirements
    expect(breeds.length).toBeGreaterThan(0);
    expect(breeds[0].name).toBe('Labrador Retriever');
    expect(breeds[0].characteristics).toEqual(['Friendly', 'Active', 'Intelligent']);
    expect(breeds[0].ageSpan).toBe('10-12 years');
    expect(breeds[0].weight).toBe('55-80 pounds');
  });
  
});

