const heights = [167, 190, 120, 165, 137,200];
const lowestNumber = heights.reduce((num, min) =>{
    if(num < min){
       return min = num
    }
    else{
       return num = min
    }
},heights[0]);

const lowestNum =Math.min(...heights);
