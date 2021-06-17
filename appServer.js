const express = require('express');
const userModule = require('../node_project/users');
const locationCoordinatesModule = require('../node_project/locationCoordinates');

const app = express();
app.use(express.static('public'));
app.use(express.json({ limit : '1mb'}));
app.use(express.urlencoded({ extended: true }));



app.listen(3000, () => {
    console.log('Creating users...');
    userModule.startCreatinUsers();
});

app.post('/addUser', (request, response) => {
    let a = request.body.user;
    let locationCord = new locationCoordinatesModule(a.x, a.y, a.z);
    console.log("Your location is:");
    console.log(locationCord);
    response.json(userModule.getUsersObjects(locationCord, a.k, a.dist));
})

