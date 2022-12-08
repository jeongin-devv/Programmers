const solution = (s : string) => {
    var answer : any = '';
    
    answer = s.split(' ');
    
    const calc = (string : string) => {
        return Array.from(string)
            .map((word,index) => 
                index % 2 === 0 
                    ? word.toUpperCase() 
                    : word.toLowerCase()
            ).join('');
    }
    
    answer = answer.map((word) => calc(word)).join(' ');
    
    return answer;
}

export default solution;