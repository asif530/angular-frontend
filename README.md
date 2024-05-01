# Angular 15 example project: CRUD with Rest API

An Angular 15 CRUD example App to consume Rest APIs, display, modify data.

# Why this
This angular project will be used as frontend application. It will consume rest api which will be provided by a spring-boot application. Initially both of them will be running in local development pc. Final goal is to deploy both of those in docker and run from there.  

- - - -
# What this angular application does:
- Each employee has id, name, age.
- We can create, retrieve, update, delete employee.

- - - -
# Pre-requisite
- Knowledge on angular
  - Initiate project
  - Basics of angular i.e. component, service, routing
  - Send rest call and receive/consume response
  - Build for production
    
- Basic Docker commands
  
- - - - 
# Run the project locally
Run `ng serve --port 8081` for a dev server. Navigate to `http://localhost:8081/`. The app will automatically reload if you change any of the source files.

- - - -
# Run the project in docker
### Step 1
   Create a build with following command </br>
   $~~$**ng build --configuration production**  </br>
  This will create a dist folder in the working directory and inside that there will be another folder containing build distribution of application. Give a meaningfull name. We will be using it later.  </br>
  
### Step 2
  In the root directory of your Angular project, create a file named Dockerfile (without any file extension) and open it in a text editor(notepad++ is preferred).

### Step 3
  See the Dockerfile of this repo. Copy and Paste the instructions. In the second instruction you give the name of your project which was given in the dist. </br>
  These instructions illustrate that 
  - we want to use the official Nginx image as the base for our Docker image.
  - Then copy the built app (located in the dist/{name-of-app} directory) into the proper location within the container.
  - Expose port 80, the default port for Nginx
  - finally, we start the Nginx server when the container starts.

### Step 4
  Create a Docker Image  </br>
  $~~$**docker build -t {image-name}**  </br>
  For easier work name the image same as application name.  </br>

  

 

