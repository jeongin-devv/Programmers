const solution = (my_string : string, letter : string) => {
    let answer = '';
    
    answer = my_string.split(letter).join('');

    return answer;
}

export default solution;