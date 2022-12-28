const solution = (a : number, b : number) => {
    let answer = '';
    const weekly = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    const end = new Date(2016, a-1, b);
    
    answer = weekly[end.getDay()];
    
    return answer;
}

export default solution;