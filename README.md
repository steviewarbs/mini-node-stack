# Get Started with the Mini-Node-Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is intended to show the simplicity of the MERN stack. It is purposefully simple and can be cloned as a starter project. The application uses a REACT FE, Node.js/Express for the API framework and Mongo for the DB.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Mongo`

To run Mongo for this application install the following dependencies. 

- `npm install mongodb`
- `npm install mongoose`

Start the server by running `sudo mongod` inside your server directory. Once that is started navigate to a new terminal and run `mongo` this will allow the user to start viewing databases and collections. To see DBs run `show databases` and to view collections run `show collections` after you have ran `use mydatabase`. Be sure to ensure the right directories are available on the server by running `sudo mkdir -p /data/db`.

### `Node JS`

To run this application run `node server.js` or better still, install `nodemon` for live server refresh.


 
