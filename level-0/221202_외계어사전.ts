const solution = (spell : string[], dic : string[]) => {
    let answer = 2;
    
    dic.forEach((word,index) => {
        spell.forEach((sp) => {
            dic[index] = dic[index].replace(sp,"");
        });
        if(dic[index] === "" && word.length === spell.length) {
            answer = 1;
            return;
        }
    });
    
    return answer;
}

export default solution;