function trailsteps(x){
    let n = 0;
    while(x !== 1){
        if(x % 2 === 0){
            x /= 2;
        }
        else{
            x = 3*x+1;
        }
        n++;
    }
    return n;
}
const inputNumber = parseInt(prompt("Enter a positive integer:"));
if (inputNumber > 0){
    const steps = trailsteps(inputNumber);
    console.log(`Number of steps to reach 1: ${steps}`);
}
else{
    console.log("Please enter a valid positive integer");
}

