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
    expect(breeds[0].image.url).toBe('https://images.unsplash.com/photo-1524401033441-e87cab019093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
  });
  
});

