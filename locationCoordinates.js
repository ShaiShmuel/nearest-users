
class locationCoordinates{

    constructor(x,y,z) {
        if(arguments.length !== 3) {
        this.x = randCoordinate();
        this.y = randCoordinate();
        this.z = randCoordinate();
        } else {
        this.x = x;
        this.y = y;
        this.z = z;
        }
    }    
}

function randCoordinate(){
    return Math.floor((Math.random() * 800) - (Math.random() * 800));
}

module.exports = locationCoordinates;
