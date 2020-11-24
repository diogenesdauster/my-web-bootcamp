function Car (maxSpeed = 200, delta = 5) {
    let currentSpeed = 0;

    this.accelerate = function () {
        if(currentSpeed + delta <= maxSpeed){
            currentSpeed += delta;
        }else {
            currentSpeed = maxSpeed;
        }
    }

    this.getCurrentSpeed = function () {
        return currentSpeed;
    }

}

const bmw = new Car
bmw.accelerate();
console.log(bmw.getCurrentSpeed());

const mercedes = new Car(350, 20)
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
console.log(mercedes.getCurrentSpeed());

console.log(typeof Car);
console.log(typeof bmw);