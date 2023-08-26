function detectVal(x){
    const result = [];
    for(let row=0; row<x.length;row++)
    {
        for(let col=0;col<x[row].length;col++)
        {
            const currVal = x[row][col];
            let n = true;
            for(let c=0;c<x[row].length;c++)
            {
                if(currVal<x[row][c])
                {
                    n = false;
                    break;
                }
            }
            for(let r=0;r< x.length;r++)
            {
                if(currVal>x[r][col]) 
                {
                    n = false;
                    break;
                }
            }
            if(n)
            {
                result.push(currVal);
            }
        }
    }
    return result;
}
const rows = parseInt(prompt("Enter the number of rows:"));
const cols = parseInt(prompt("Enter the number of columns:"));
const matrix = [];
for(let i=0; i<rows;i++)
{
    matrix.push([]);
    for(let j=0;j<cols;j++)
    {
        const val = parseInt(prompt(`Enter the value at row ${i + 1}, column ${j + 1}:`));
        matrix[i].push(val);
    }
}
console.log("Detected values:", detectVal(matrix));
