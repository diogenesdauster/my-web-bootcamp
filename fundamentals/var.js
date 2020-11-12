 {{{ var wtf = 'wtf' }}}
 console.log(wtf)

 function test() {
    var local = 123;
    console.log(local);
 }

 test();
 //console.log(local) // Error

 var myNumber = 1 
 {
     var myNumber = 2
     console.log('inside = ', myNumber)
 }
 console.log('outside = ', myNumber)