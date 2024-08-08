# DevOps Project: Automated Testing and Deployment with GitHub Actions and Docker Hub

## Project Overview

This project demonstrates how to use GitHub Actions to automate the testing and deployment of a Dockerized application to Docker Hub upon pull request triggers. 

### **Project Structure**

- **Dockerfile:** Defines the container image for the application.
- **.github/workflows/ci-cd.yml:** Contains the GitHub Actions workflow to automate the CI/CD pipeline.

### **GitHub Actions Workflow**

The workflow automates the following tasks:
1. **Code Checkout:** Retrieves the code from the repository.
2. **Docker Setup:** Configures Docker Buildx for multi-platform builds.
3. **Build Docker Image:** Builds the Docker image based on the Dockerfile.
4. **Run Tests:** Executes tests on the Docker container to ensure functionality.
5. **Docker Hub Login:** Authenticates with Docker Hub using secrets.
6. **Push Docker Image:** Pushes the Docker image to Docker Hub.

### **Setup Instructions**

1. **Clone the Repository:**
   - Fork this repository to your GitHub account or clone it to your local machine.

2. **Configure Secrets:**
   - Go to the repository settings on GitHub.
   - Navigate to `Secrets and variables` > `Actions`.
   - Add the following secrets:
     - `DOCKER_HUB_USERNAME`: Your Docker Hub username.
     - `DOCKER_HUB_ACCESS_TOKEN`: Your Docker Hub access token.

3. **Create a Pull Request:**
   - Make changes to your project and open a pull request to the `main` branch.
   - The workflow will be triggered, executing the defined steps.

4. **Monitor Workflow Execution:**
   - Go to the `Actions` tab in your GitHub repository to view the workflow execution and logs.

### **Dockerfile**

The Dockerfile in this project defines how the application is containerized. Ensure to update it according to your application’s requirements.
