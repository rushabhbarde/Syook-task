function chaiSeq(n, g, b, k) {
    if(g===0 || b===0 ){
        return [];
    }
    let chai = [];
    for(let i=0;i<n;i++)
    {
        if(g !== 0 ){
            chai[i] = "Green";
            i = i+k;
            g--;
        }
    }
    for(let j=0;j<n;j++)
    {
        if(b!==0 && chai[j] !== "Green")
        {
            chai[j] = "Black";
            b--;
        }
    }
    return chai;
}
const n = parseInt(prompt("Enter the number of chai cups (n):"));
const g = parseInt(prompt("Enter the number of green chai bags (g):"));
const b = parseInt(prompt("Enter the number of black chai bags (b):"));
const k = parseInt(prompt("Enter the maximum consecutive times (k):"));
const sequence = chaiSeq(n, g, b, k);
console.log(sequence);
