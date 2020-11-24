const x = 'Global';

function outSide(){
    const x = 'Local';
    function inside() {
        return x;
    }
    return inside;
}

const myFunction = outSide()
console.log(myFunction());