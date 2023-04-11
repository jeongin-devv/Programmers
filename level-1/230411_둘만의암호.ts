const solution = (s : string, skip: string, index: number) => {
    let answer : string | string[] = '';
    // a = 97, z = 122
    const alphabetList = [];
    for(let i = 97; i<=122; i++) {
        if(!skip.includes(String.fromCharCode(i))) {
            alphabetList.push(String.fromCharCode(i));
        }
    }
    answer = Array.from(s).map((w) => {
        let numbering = alphabetList.indexOf(w) + index;
        return alphabetList[numbering % alphabetList.length];
    });
    
    return answer.join('');
}

export default solution;