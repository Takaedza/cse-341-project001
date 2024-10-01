/*const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));



mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log('Database is listening on node is Running on port' + port)});
    }
});
*/
/* const express = require('express');
const mongodb = require('./data/database');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.error('Failed to connect to the database:', err);
        process.exit(1); // Exit the process if the database connection fails
    } else {
        app.listen(port, () => {
            console.log(`Server is running on port ${port} and connected to the database.`);
        });
    }
}); */

// app.js
/*const express = require('express');
const { initDb } = require('./data/database');
const userRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
//app.use(express.json());

// Use the user routes
app.use('/', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Initialize the database and start the server
initDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}); */

const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));


mongodb.initDb ((err) => {
 if (err) {
    console.log(err);
 }
 else {
    app.listen(port, () => {console.log('Database is listening and node is running on port ' + port)});
 }
})

//app.listen(port, () => { console.log(`Server is running on port ${port}`)});