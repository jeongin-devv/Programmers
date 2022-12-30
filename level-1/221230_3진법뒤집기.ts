const solution = (n : number) => {
    let answer = 0;
    const parse = n.toString(3).split('').reverse().join('');
    answer = parseInt(parse, 3);
    return answer;
}

export default solution;