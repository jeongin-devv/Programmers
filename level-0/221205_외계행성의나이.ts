const solution = (age: number) => {
    let answer = '';
    answer = 
        Array.from(age.toString())
            .map((string) => String.fromCharCode(Number(string)+97))
            .join('');
    
    return answer;
}

export default solution;