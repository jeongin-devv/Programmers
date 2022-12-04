const solution = (s : string) => {
    let answer = 0;
    const array = s.split(" ");
    array.forEach((element, index) => {
        if(element!="Z"){
            answer += Number(element);
        }else{
            answer -= Number(array[index-1]);
        }
    });
    return answer;
}

export default solution;