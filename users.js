const locationCoordinatesModule = require('../node_project/locationCoordinates');


let userID = 0;
const myUsers = new Array();
let nearestUsersArr = new Array();

class User extends locationCoordinatesModule {

    constructor() {
    super();
    this.id = ++userID;
    this.rotation = randRotation();
    
    }

    getUserObject(){
        return {
             [`user${this.id}`] : { position : {x: this.x,
                                    y: this.y,
                                    z: this.z},
                        rotation : this.rotation}
             }
    }

}


function randRotation(){
    return Math.floor((Math.random() * 360))
}



function findKNearstUsers(usersArr, myLoacation, k, distanceLimit){
    nearestUsersArr = [];
    let kNearstUsers = new Array();

    usersArr.forEach(function (user) {
        var dist = calculateDistance(myLoacation, user);
        if(dist < distanceLimit)
            nearestUsersArr.push([user , dist]);
        
        
    });

    nearestUsersArr.sort((a,b) => a[1] - b[1]);

    k = (nearestUsersArr.length > k) ? k : nearestUsersArr.length;
        for(let i = 0 ; i < k ; i++){
            kNearstUsers.push(nearestUsersArr[i][0].getUserObject());
            console.log(nearestUsersArr[i][0]);
        }

    return kNearstUsers;

}

function calculateDistance(pointA, pointB){
    return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y, pointA.z - pointB.z);
}

exports.User = User;
exports.getUsersObjects = function getUsersObjects(locationCord, k, dist){
    return findKNearstUsers(myUsers, locationCord, k, dist);
}
exports.startCreatinUsers = () => setInterval(() =>{
                                let newUser = new User();
                                myUsers.push(newUser);
                                myUsers[0]
                            }, 500);