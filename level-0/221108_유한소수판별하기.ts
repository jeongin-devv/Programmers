const solution = (a: number, b: number) => {
    let answer = 0;
    
    const gcd = (a : number, b : number) => a % b === 0 ? b : gcd(b, a % b);

    const calc = (num : number) => {
        let p = [];
        for(let i = 2; i <=Math.sqrt(num); i++){
            while(num%i===0){
                p = [...p, i];
                num /= i;
            }
        }
        if(num >2) p = [...p, num];
        return p;
    }
    
    answer = calc(b / gcd(a, b)).find(n => n !== 2 && n !== 5) ? 2 : 1;;
    
    return answer;
}

export default solution;