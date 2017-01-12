# url-shortener
URL Shortener by Melony Smith for Full Sail University: Deployment of Web Applications Online

## Purpose
URL Shortener is a NodeJS based RESTful API that allows you to provide a long, cumbersome link to be returned as a convenient six digit  URL. The shortened URL will redirect to the page provided by the original link. This is especially useful for sharing links on social media sites that limit the number of characters you are allowed to post.

## Installation
Clone or download this repository using the green "Clone or download" button for this repository. The button can be found up and to the right.

Once cloned, install using:
```javascript
npm install
```

## Start Server
Start the server using:
```javascript
node src/server.js
```

If you would like your server to watch for changes and run continuously you can use nodemon.
```javascript
npm install nodemon
```
Start the server using:
```javascript
nodemon src/server.js
```

## Local Host
![Local Host Image 01]
(https://github.com/melonysmith/url-shortener_DWA/blob/master/img/localhost01.png)

## Endpoints
CRUD for URLs

Method | Path | Result
------------ | ------------- | -------------
POST  |  /api/v1/urls  |  Create a shortened URL
GET  |  /api/v1/urls  |  Display all URLS
GET  |  /api/v1/urls/:id  |  Displays URL based upon id
POST  |  /api/v1/urls/:id  |  Update URL based upon id
DELETE  |  /api/v1/urls/:id  |  Delete url based upon id

## Routes
Route | Result
---------- | -------------
/go/:shortURL  |  Redirect user to original URL based on the short URL

## Working with the API
There are various ways to work with the API but I recommend using [Postman](https://www.getpostman.com/docs/introduction).

![Postman Image 01]
(https://github.com/melonysmith/url-shortener_DWA/blob/master/img/postman01.png)

![Postman Image 02]
(https://github.com/melonysmith/url-shortener_DWA/blob/master/img/postman04.png)

![Postman Image 03]
(https://github.com/melonysmith/url-shortener_DWA/blob/master/img/postman05.png)

## dotenv
Installation:
```javascript
npm install dotenv --save
```

Create and upload a .env (dotenv) file with the following information:
```javascript
DB_NAME="your_db_name"
DB_USER="username"
DB_PASS="password"
DB_HOST="000.0.0.0"
DB_SCHEMA=mysql
DB_PORT=“0000”
```

Include and require .env:
```javascript
require('dotenv').config()
```

## Usage (Debugging)
Debugging = true (on; messages will appear within the console):
```javascript
DEBUG=true node src/server.js
```
Debugging = false (off; messages will not appear within the console):
```javascript
DEBUG=false node src/server.js
```
