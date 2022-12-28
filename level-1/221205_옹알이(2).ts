const solution = (babbling : string[]) => {
    let answer = 0;
    let array = []
    const bulb = ["aya", "ye", "woo", "ma"];
    const bulb2 = ["ayaaya", "yeye", "woowoo", "mama"];
    
    array = [...babbling].filter((string) => {
        let flag = true;
        bulb2.forEach((b) => {
            if(string.includes(b)){
                flag = false;
            }
        })
        return flag;
    });
    
    array.forEach((string) => {
        let temp = string;
        bulb.forEach((b) => {
            temp = temp.split(b).join('A')
        })
        if(temp.split("A").join('') === '') answer++;
    });
    
    return answer;
}

export default solution;