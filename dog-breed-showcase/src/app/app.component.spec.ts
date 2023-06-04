import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BreedListComponent } from './breed-list/breed-list.component'; // Import the BreedListComponent

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Import the RouterTestingModule for routing
      declarations: [AppComponent, BreedListComponent], // Include the AppComponent and BreedListComponent
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy(); // Verify that the AppComponent instance is created
  });

  it(`should have as title 'dog-breed-showcase'`, () => {
    expect(component.title).toEqual('dog-breed-showcase'); // Verify that the title property is set correctly
  });

});
