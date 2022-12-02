const solution = (polynomial : string) => {
    let answer = '';
    
    const plus = (x, y) => {
        return eval(`${x}+${y}`);
    }
    
    const existX = polynomial.split(" + ")
                    .filter((string) => string.includes("x"))
                    .map((num) => num==="x" ? "1" : num.replace("x",""))
                    .reduce((a,b) => plus(a,b) , 0);
    
    const noneX = polynomial.split(" + ")
                    .filter((string) => !string.includes("x"))
                    .reduce((a,b) => plus(a,b), 0);
    
    if(existX === 0) {
        return `${noneX}`;
    }else{
        return `${existX === 1 ? "" : existX}${noneX !== 0 ? "x + "+ noneX : "x"}`;
    }

}

export default solution;