function vypis(){
    return 'Hello World !!'
}

function vypis2(){
    return 'Vypisane 2'
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
      console.log("skoncilo")
    });
  }

  console.log(vypis())

sleep(15000)
setTimeout(function(){ 
    console.log("Po 10 sekundach")
}, 10000);
  console.log(vypis2())