function isPerfect(x){
    if (x <= 0) {
        return "Invalid";
    }
    let sum=0;
    for(let i=1; i<x; i++){
        if(x % i === 0){
            sum += i;
        }
    }
    if(sum === x){
        return "Perfect";
    }else if(sum > x){
        return "Abundant";
    }else{
        return "Deficient";
    }
}
const num = parseInt(prompt("Enter a number:"));
const result = isPerfect(num);
console.log(result);
