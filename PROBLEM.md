## Exercise: Deploy an Angular SPA that communicate with Spring Boot application a K8s Cluster 

* In this Exercise, you will deploy an Angular SPA that communicate with Spring Boot application K8s Cluster. 

This exercise contains following folders:

	- AngularFrontend - An angular SPA
	- k8s - Contains manifest files, these files are explained below
	- SbService - A SpringBoot application

This exercise contains following files in k8s folder: 

	- angular.yml - To create the deployment, service of type NodePort for angular SPA
	- springboot.yml - To create the deployment, service of type NodePort for springboot application

Understand and perform the following steps to complete this exercise:

	1. Push SbService image to Docker Hub.
	2. Follow the instructions given in the springboot.yml file, once it is done, run command kubectl apply -f springboot.yml.
	3. Test the service, open browser and check for `http://<minikube-ip>:<nodePort-of-springboot>/message` url.
	4. Make changes in `environments/environment.ts` file in AngularFrontend. Change API as follows `http://<minikube-ip>:<nodePort-of-springboot>`.
	5. Run command `ng build`, push AngularFrontend image to Docker Hub.
	6. Follow the instructions given in the angular.yml file, once it is done, run command kubectl apply -f angular.yml.
	7. Test the service , open browser and check for `http://<minikube-ip>:<nodePort-of-angular>` url, you will be able to see the button and on clicking it, you can see data being fetched from springboot.


### Instructions

- Take care of whitespace/trailing whitespace
- Do not change the provided code unless instructed
- Ensure your code compiles without any errors/warning/deprecations
- Follow best practices while coding