<h1 align="center">Welcome to Code Infinity - Test 1 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-16.2.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-8.3.0-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Code Infinity - Proficiency Test 1 - Completed Using the MERN Stack

## Table of Contents:

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions)
- [Run Tests](#runtests)
- [Application Security](#application-security)
- [Handling of User Credentials and Other Secure Information](#handling-of-user-credentials-and-other-secure-information)
- [Instructions for Modifying Secret Keys](#instructionsformodifyingsecretkeys)
- [Application Deployment](#applicationdeployment)
- [Credits](#credits)
  - [Images](#images)
- [Author Details](#author-details)

## Prerequisites

- node 16.2.0
- npm 8.3.0

## Installation

To run this project, do the following:

1. Select the directory that you wish to clone the project into. Example below:

```sh
cd folder/to/clone-into/`
```

2. Enter git clone [repository_URL] into the terminal or command prompt. Code and link below:

```sh
gh repo clone ChanBos/MERN-User-Database-Test-1`
```

3. If you want a different folder name, simply specify it as the last parameter. Example below:

```sh
gh repo clone ChanBos/MERN-User-Database-Test-1`
```

This will create a new directory which will initialize a .git directory within it, pulling all of the data from this project. You will find all of the files and folders in this directory, enabling you to use and edit it to your liking.

4. Navigate to this directory from the command line interface.

```sh
cd "C:\Users\user\...
```

5. Navigate to both the server and the client's directories in the command line interface and type the following to install all of the necessary node modules:

```sh
npm install
```

7. Open the server and the client to view the application in the browser. The server runs on http://localhost:8000/search and the client on http://localhost:3000.

## Usage Instructions

In the command line interface respectively type the following to run the client and server in development mode:

- Client

```
npm start
```

- Server

```
nodemon server.js
```

## Run Tests

```sh
npm run test
```

## Application Security

Helmet.js has been utilized to increase the security of the application. Helmet is a middleware for Express applications. It sets many different HTTP headers and aims to make applications more secure.

Adding these headers can help in avoiding attacks such as Cross-Site-Scripting (XSS), clickjacking, etc.

## Handling of User Credentials and Other Secure Information

1. Created a .env file in the root of the project, outside of the src folder.
2. Added the information to this file.
3. The .env file has been added to the .gitignore file. This file stipulates what files not to upload.

Click here for more information: https://dev.to/eprenzlin/env-gitignore-and-protecting-api-keys-2b9l

## Instructions for Modifying Secret Keys

To enter your own key-value pair for the backend of the application, in order to access the MongoDB Database, create a .env file in the root folder and enter your credential values of the following keys:

```
DB_USERNAME=EnterValueHere
DB_PASSWORD=EnterValueHere
```

## Application Deployment

Heroku allows running two applications on the same dyno. I have deployed my applications client and backend together by pushing the complete application to GitHub and through GitHub and Heroku's integrations deploying the application via the Heroku dashboard.

Each local push that is made to GitHub will automatically update the deployed Heroku application, which in turn decreases the time updating the application on multiple platforms.

For more information on how to deploy an application to Heroku via GitHub Integration: https://devcenter.heroku.com/articles/github-integration

## Credits

- HyperionDev: https://www.hyperiondev.com/
- Stack Overflow: https://stackoverflow.com/
- Mongoose.js: https://mongoosejs.com/docs/validation.html

## Author

👤 **Chanelle Bösiger**

- Website: [@Chanelle Bösiger](https://my-developer-portfolio-sand.vercel.app/)
- GitHub: [@ChanBos](https://github.com/ChanBos)
- LinkedIn: [@Chanelle Bösiger](https://www.linkedin.com/in/chanelle-bosiger/)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
