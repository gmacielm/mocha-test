function helloWorld(state){
    return `Hello World ${state} testing`;
}

function addition(int1, int2){
    return int1 + int2;
}

function lessThan(int1, int2){
    if(int1 < int2) { return true; }
    else { return false; }
}

module.exports= {
    helloWorld, addition, lessThan
}