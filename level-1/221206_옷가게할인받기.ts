const solution = (price : number) => {
    let answer = 0;
    let sale = 0;
    
    if(price >= 500000){
        sale = 0.8;
    }else if(price >= 300000) {
        sale = 0.9;
    }else if(price >= 100000) {
        sale = 0.95;
    }else{
        sale = 1;
    }
    
    answer = Math.floor(price*sale);
    
    return answer;
}

export default solution;