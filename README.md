Dog Breed Explorer - Angular Application
This Angular application allows users to explore different dog breeds and view a short bio for each breed. The application is designed with a focus on web accessibility and follows best practices such as test-driven development and SOLID principles. It utilizes a NestJS API to retrieve dog breed data, but also includes a fallback mechanism to retrieve data from the frontend in case the API is not available.

Features
Display a list of different dog breeds
Click on a breed to view a short bio and details about the breed
Navigate through breeds using next and previous buttons
Responsive design for optimal viewing on different devices
Technologies Used
Angular framework
TypeScript programming language
HTML and CSS for markup and styling
Jest framework for unit testing
NestJS API (optional, can be replaced with frontend data retrieval)
Installation
Clone the repository:
git clone <repository_url>
Navigate to the project directory:
cd dog-breed-explorer
Install the dependencies:
npm install
Usage
Start the application:
ng serve
Open a web browser and navigate to http://localhost:4200 to access the Dog Breed Explorer application.
Development
Frontend
The frontend of the application is built using Angular, which provides a scalable and modular structure for building web applications. The components, services, and models are organized in a logical manner to facilitate code readability and maintainability. The application follows the SOLID principles to ensure a clean and extensible architecture.

The main components of the frontend are:

BreedListComponent: Responsible for displaying the list of dog breeds and handling breed selection events.
BreedDetailsComponent: Displays the details of the selected breed, including a short bio and other characteristics.
BreedService: Communicates with the NestJS API (or retrieves data from the frontend) to fetch the dog breeds and provide them to the components.
BreedModel: Represents the data structure of a dog breed, including its name, description, characteristics, age span, and weight.
Testing
The application includes comprehensive unit tests to ensure code quality and reliability. The tests are written using the Jest framework and cover critical components and services. The unit tests can be run using the following command:

ng test
Conclusion
The Dog Breed Explorer is a simple yet functional Angular application that allows users to explore different dog breeds and view breed details. The application can serve as a starting point for further enhancements and features to create a comprehensive dog breed resource.
