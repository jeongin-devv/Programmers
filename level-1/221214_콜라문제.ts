const solution = (a:number, b:number, n:number) => {
    let answer = 0;

    const calc = (num: number) => {
        return Math.floor(num/a)*b;
    };
    
    while(true){
        if(n<a) break;
        console.log(calc(n));
        answer += calc(n);
        n = calc(n) + n%a;
    }
    
    return answer;
}

export default solution;