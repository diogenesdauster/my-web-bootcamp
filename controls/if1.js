function onlyGoodNews(news) {
    if(news >=7 ){
        console.log("It is a good news !!");
    }
}

onlyGoodNews(6)
onlyGoodNews(7)

function isItTrue(value) {
        if(value){
            console.log("It is true ..." + value);
        }
}

isItTrue()
isItTrue(false)
isItTrue('')
isItTrue(null)
isItTrue(undefined)
isItTrue(NaN)
isItTrue(0)

isItTrue(-1)
isItTrue('  ')
isItTrue(true)
isItTrue([])
isItTrue({})