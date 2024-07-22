# Expresso

This library provides a quick setup for express
. 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Expresso.

```bash
npm install @Expresso/expresso
```

## Usage
### main.js
```
const { expresso, setMiddleware, setVals, serveStaticFiles } = require('@Expresso/expresso');
const {middlewares} = require('your-path/setMiddlewares.js');
const {vals} = require('your-path/setVals.js');

// Create and configure the server
const app = expresso(port); // Pass an HTTP server instance as the second argument if needed
setMiddleware(app,middlewares);
setVals(app,vals);

// Serve static files (optional)
serveStaticFiles(app, 'public'); // 'public' is the folder containing static files
```
### setMiddlewares.js
```
const express = require('express')
let expressJson = express.json()

//add more middlewares


const middlewares = [expressJson];
module.exports = {middlewares}
```
### setVals.js
```
const setEngine = {
    'view engine':'ejs',
}
//set your values

const setVals = [setEngine]

module.export = {setVals}
```
##  Reference
`expresso(port, http)`

Creates an Express server instance. If `http` is provided, an HTTP server will be created.

- `port`: The port number for the server.

- `http`: Optional. An HTTP server instance.

   Returns an object with the server and app instances if http is provided, or just the app instance otherwise.

`setMiddleware(app, middlewares)`

Sets up middlewares for the Express app.

- `app`: The Express app instance.

- `middlewares`: 
An array of middleware functions.

`serveStaticFiles(app, staticPath)`

Serves static files from the specified directory.

- `app`: The Express app instance.

- `staticPath`: Path to the directory containing static files.

`setVals(app, sets)`

Sets various application settings.

- `app`: The Express app instance.

- `sets`: An array of objects with settings.

## Logging
The library includes built-in logging with Winston and Morgan:

##### Winston: 
Logs messages to both console and a file (logs/app.log).
#### Morgan: 
Middleware for HTTP request logging.
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.



## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments
Express for the web framework.

Winston for logging.
 
Morgan for HTTP request logging.


