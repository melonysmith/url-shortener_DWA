# url-shortener
URL Shortener by Melony Smith | Full Sail University: Deployment of Web Applications

## Purpose
URL Shortener is a NodeJS based RESTful API that allows you to provide a long, cumbersome link to be returned as a convenient six digit  URL. The shortened URL will redirect to the page provided by the original link. This is especially useful for sharing links on social media sites that limit the number of characters you are allowed to post.

## Installation
Clone or download this repository using the green "Clone or download" button for this repository. The button can be found up and to the right.

Once cloned, install using:
```javascript
npm install
```

## Database
dotenv is required in a development environment. To install dotenv:
```javascript
npm install dotenv --save-dev
```
Create a .env file containing the following:
```javascript
DB_NAME='name_of_your_database'
DB_USER='your_username'
DB_PASS='your_password'
DB_HOST='xxx.x.x.x'
DB_SCHEMA='mysql'
DB_PORT='3306'
```
Edit fields as necessary.

## Start Server
Start the server using:
```javascript
npm start
```

If you would like your server to watch for changes and run continuously you can use nodemon. To do so:
```javascript
npm install nodemon
```

## Endpoints
CRUD for URLs

Method | Path | Result
------------ | ------------- | -------------
POST  |  /api/v1/urls  |  Create a shortened URL
