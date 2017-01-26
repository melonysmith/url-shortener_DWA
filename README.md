# url-shortener_DWA
Built with NodeJS and Express, this URL Shortener API was developed for my Deployment of Web Applications class at Full Sail University.

## About
[url-shortener_DWA](https://github.com/melonysmith/url-shortener_DWA) allows you to take a long, cumbersome URL and convert it into something much smaller in one simple step. This is especially useful for social media use where post character allowance may be limited.

Having knowledge of and/or experience with database operations is required. Original long and newly shortened URLs are saved to the database along with the date they were created and updated. RESTful API functionality includes full CRUD capabilities.

## First Things First
Begin by cloning or downloading url-shortener_DWA. Up and to your right you will see a green button that says "Clone or download" with a drop down triangle. Clone or download using your preferred method.

## Next Up
You will need to install [Node.js](https://nodejs.org).

## Before You Go On
You will need [npm](https://www.npmjs.com/package/npm) to install dependencies. In your CLI, run the following command to install npm:
```javascript
curl -L https://www.npmjs.com/install.sh | sh
```

## url-shortener_DWA Dependencies
After installation, run the following to install the dependencies required to properly run url-shortener_DWA:
```javascript
npm install
```
(chai, chalk, dotenv, express, istanbul, log-timestamp, mocha, mysql, sequelize, sinon, supertest, yargs)

## Connect
In your CLI, run the following to get started:
```javascript
node src/server.js
```
You will see a message in your CLI that says:
```javascript
On like Donkey Kong on Port 3000
```
If you would like your server to restart automatically through directory changes use [nodemon](https://www.npmjs.com/package/nodemon):
```javascript
npm install -g nodemon
```

## Database
### MySQL
Install a [MySQL](https://www.mysql.com/) Database.

### Environmental Variables
Create a .env file in the root of the url-shortener_DWA API that contains the following environmental variables:
```javascript
DB_NAME="your database name"
DB_HOST="your host"
DB_PORT="your port"
DB_SCHEMA=mysql
DB_DIALECT=mysql
DB_USER="your username"
DB_PASS="your password"
```

### Database Management
I use [Sequel Pro](https://www.sequelpro.com) for database management, but feel free to use the  database management application of your choice.

In addition to the message you will see in your CLI when you connect to the server, you will also see the following message once you have successfully connected to your database:
```javascript
Database connection successful. It's goin' down!
```

## Routes
Route | Result
---------- | -------------
localhost:3000 | Where it all begins
/go/:shortURL  |  Redirects user to original URL using the short URL

## Endpoints
Method | Path | Result
------------ | ------------- | -------------
POST  |  /api/v1/url  |  Creates a shortened URL
GET  |  /api/v1/urls  |  Displays all URLS
GET  |  /api/v1/url/:id  |  Displays one URL based on id
POST  |  /api/v1/url/:id  |  Updates one URL based on id
DELETE  |  /api/v1/url/:id  |  Deletes one URL based on id

## Postman
...coming soon

# Features
Includes an automated semantic version updating tool:
[vbumper](https://www.npmjs.com/package/vbumper).
Includes a debugging tool that displays colorful console messages in your CLI as well as logs messages to a .log file:
[debugutil](https://www.npmjs.com/package/debugutil).

## vbumper
A NodeJS API version increasing tool developed for my Deployment of Web Applications class at Full Sail University. This package will allow you to update your API semantic versioning and will also update "package.json" accordingly.

### vbumper Installation
In your CLI, ensure that you are in the directory containing your NodeJS API.

Run the following to add vbumper to your node_modules and your "package.json" file dependencies:
```javascript
npm install vbumper
```

### vbumper Dependencies
In your CLI, run the following to install vbumper dependencies:
```javascript
npm install
```

### vbumper Use
To execute the version bumper from your CLI use:
```javascript
node src/lib/vbumper.js -v { major | minor | patch } -n { Version_number }
```

For example, if you want to update the major version to 2:
```javascript
node src/lib/vbumper.js -v major -n 2
```

## debugutil
A NodeJS API debug utility tool with logging developed for my Deployment of Web Applications class at Full Sail University. This package will allow you to debug your API with success, alert, warn and error messages displayed colorfully in your CLI as well as appending timestamped messages to a .log file.

### debugutil Installation
In your CLI, ensure that you are in the directory containing your NodeJS API.

Run the following to add debugutil to your node_modules and your "package.json" file dependencies:
```javascript
npm install debugutil
```
### debugutil Variables
All variables are optional and definable. You can edit them to suit your needs.
Be sure to change the "logFile" variable in "src/lib/util.js" as necessary.
```javascript
const logFile = './logs/logFile.log';
```

### debugutil Use
You will need to require the debugutil package in each file you wish it to run. You can do this by adding the following to the top of each file:
```javascript
require('debugutil');
```

### debugutil Enable Debug and Log
To enable logging, use the following environmental variable:
```javascript
DEBUG=true
```

You will now receive green success, yellow warn and red error messages in your CLI as well as have them logged to the .log file located in the logs folder.

## Other
### Logging Information
You can change the name and/or path of the folder and the .log file, in src/lib/util.js. Just edit the following lines:
```javascript
fs.appendFile('./logs/logFile.log', function () {
  console.log('Data was successfully appended to file!');
});   
```

### Color Information
You can change the display color of messages in src/lib/util.js via [chalk](https://www.npmjs.com/package/chalk) by editing color in the following code:
```javascript
console.log(chalk.blue(msgLevel, ' ', msgFormat));
```

## Unit Test and Code Coverage
### Unit Testing
This package has been Unit Tested using [chai](https://www.npmjs.com/package/chai), [mocha](https://www.npmjs.com/package/mocha), [sinon](https://www.npmjs.com/package/sinon) and [supertest](https://www.npmjs.com/package/supertest). You will need to install these packages to your devDependencies to run tests.

In your CLI, run the following command to set the environmental variable DEBUG to equal true. This is the required process.env for running test(s) using debugutil:
```javascript
DEBUG=true mocha
```
In your CLI, run the following for testing without debugutil:
```javascript
npm test
```

### Code Coverage
Check out [istanbul](https://www.npmjs.com/package/istanbul) for more on code coverage.

In your CLI, run the following command to run test(s) with istanbul:
```javascript
istanbul cover src/lib/util.js
```

## Coding Style
This package complies with the Airbnb coding style and has been linted using the following packages and plugins:
[eslint](https://www.npmjs.com/package/eslint), [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) and [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

I used the [Atom](https://atom.io/) IDE with the linter and linter-eslint community packages installed.
