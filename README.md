# Challenge Nutual - API

## Introduction

This application is a Rest API. It fulfills the function of the main component of obtaining the average valuation of a property in a city.
The application uses a non-relational database (MongoDB).

The API is online on Heroku if you want to test it before cloning the source code.

> [https://challenge-nutual-api.herokuapp.com/api-docs/](https://challenge-nutual-api.herokuapp.com/api-docs/)

## About the code

The application is made from scratch. The technology stack is full Javascript with [NodeJS](https://nodejs.org).

The project uses the following dependencies (libraries), fundamental for the solution:

- [**N**odeJs](https://nodejs.org): Runtime environment
- [**E**xpress](http://expressjs.com): Backend framework
- [**M**ongoose](https://mongoosejs.com/): Object modeling for NodeJS

## Setting

### Requirements

1. [Node.js](https://nodejs.org) installed.

### Installing dependencies (libraries)

First, enter the root folder of the project:

```sh
$ cd challenge-nutual-api
```

Then install the dependencies:

```sh
$ npm install
```

### Properties configuration

You have to place an `.env` file at the root of the project directory, with the properties for your environment.

In this file you can configure:

- Environment
- Application port
- Log level
- Database URL

        # Env
        NODE_ENV = development

        # Port
        PORT = 4000

        #Log
        LOG_LEVEL = silly

        #batabase
        DATABASE_URL = mongodb+srv://nutual:NrRW!24P8VYc5bP@cluster0.hrdf2.mongodb.net/nutual?retryWrites=true&w=majority

#### Properties considerations

###### NODE_ENV

It's the environment of NodeJS. Possible values `development` | `production`

###### PORT

It's the port that the app will use to run. Change value to the desired port.

###### LOG_LEVEL

Log levels of the app. Each level has a specific priority. The higher the priority, the more important the message is considered.
The levels are:

        [
            error,
            warn,
            info,
            http,
            verbose,
            debug,
            silly
        ]

###### DATABASE_URL

Connection URL to the MongoDB database. With the default configuration it will connect to a database in the MongoDB cloud that is already created and with data.

## Running the application

```sh
$ npm run start
```

If in the configuration the port was set with the number 4000, the api will run in the following url: `http://localhost:4000`.

### Live app monitoring

The app has two endpoints that respond to an http status code: `200` to monitor if it is alive.

> `GET:` [http://localhost:3000/status](http://localhost:3000/status) > `HEAD:` [http://localhost:3000/status](http://localhost:3000/status)

### Display of test results

The app has an endpoint to view the status of the last iteration of tests executed.

> [http://localhost:4000/tests-report](http://localhost:4000/tests-report)

![Tests Result](/assets/images/tests-result.jpg)

### Viewing the documentation

The app has an endpoint to view the documentation of the services. It is generated with [Swagger](https://swagger.io/).

> [http://localhost:4000/api-docs](http://localhost:4000/api-docs)

![Swagger Documentation](/assets/images/documentation.jpg)

## Running the app with Docker

The project is ready to be built with Docker if necessary.

### Requirements

1. Install [Docker](https://www.docker.com/)
2. Install [Docker-compose](https://docs.docker.com/compose/install/)

### Build and push Docker image

```sh
$ docker build -t nombreImagen:1.0.0 .

$ docker push repositorio/nombreImagen:1.0.0
```

### Running the app with Docker Compose

The following command will do everything needed, including creating and maintaining the services:

```sh
$ docker-compose up
```

When you see that the console indicates that everything has been created and is ready, you can check the status of the api at [http://localhost:4000/status](http://localhost:4000/status).

In the `docker-compose.yml` file you will be able to change the application settings.

They are as follow:

        environment:
            - NODE_ENV=development
            - PORT=4000
            - LOG_LEVEL=silly
            - DATABASE_URL=mongodb+srv://nutual:NrRW!24P8VYc5bP@cluster0.hrdf2.mongodb.net/nutual?retryWrites=true&w=majority
