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

## Endpoints
CRUD for URLs

Method | Path | Result
------------ | ------------- | -------------
POST  |  /api/v1/urls  |  Create a shortened URL

## Working with the API
There are various ways to work with the API but I recommend using [Postman](https://www.getpostman.com/docs/introduction).

![Postman Image 01]
(https://github.com/melonysmith/url-shortener_DWA/blob/master/img/postman01.png)

![Postman Image 02]
(https://github.com/melonysmith/url-shortener_DWA/blob/master/img/postman02.png)

![Postman Image 03]
(https://github.com/melonysmith/url-shortener_DWA/blob/master/img/postman03.png)
