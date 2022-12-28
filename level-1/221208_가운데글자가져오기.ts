const solution = (s : string) => {
    var answer = '';
    const array = Array.from(s);
    if(s.length % 2 ===0){
        answer = array[s.length/2 -1] + array[s.length/2]
    }else{
        answer = array[(s.length-1)/2];
    }
    
    return answer;
}

export default solution;