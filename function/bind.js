const person = {
    greeting: 'Morning',
    speak() {
        console.log(this.greeting);
    }
}

person.speak();
const speak = person.speak;
speak() // this change context

const speakOfPerson = person.speak.bind(person); // pass the corrent contexto to the this
speakOfPerson() 


function Person() {
    this.age = 0;
    
    const self = this;
    setInterval(function(){
        self.age++;
        console.log(self.age);
    }/*,bind(this)*/, 1000 );
}

new Person