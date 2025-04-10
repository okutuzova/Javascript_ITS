function mySetInterval() {
    console.log('hello');
    setTimeout(mySetInterval, 1000);
}

mySetInterval();