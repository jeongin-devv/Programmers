const solution = (s : string, n : number) => {
    let answer = '';
    const a = Array.from(s).map((word) => {
        const num = word.charCodeAt(0);
        if(num===32) return 32;
        if(num >=65 && num <= 90){
            if(num+n > 90){
                return num+n-26;
            }else{
                return num+n;
            }
        }else{
            if(num+n > 122){
                return num+n-26;
            }else{
                return num+n;
            }
        }
    })
    answer = String.fromCharCode(...a);
    return answer;
}

export default solution;