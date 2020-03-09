## What's this?

This project was created as an exercise for a [Docker and Kubernetes course on Udemy](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/), in which I learned how to set up CI and CD for a multi-container Docker application.

The app is a somewhat contrived example from the course, but nonetheless was a good way to learn how a multi-container application could be architected.

The app uses an nginx server for routing traffic to the client and the server. The client is built in React, and the backend is in Node/Express. The server saves "seen indices" to a Postgres database from RDS, and a Node worker process running in a separate container calculates the Fibonacci values then saves the result to a Redis store provided by Elasticache.

The deploy pipeline looks like: TravisCI --> DockerHub --> Elastic Beanstalk.

![](https://cldup.com/Nev_3vCyW7.png)
