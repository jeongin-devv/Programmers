const solution = (i : number, j : number, k : number) => {
  let answer = 0;
  let temp : string = '';
  
  for(let l = i; l <= j; l++){
      temp += l;
  };
  
  answer = Array.from(temp).filter(
    (num) => num === k.toString()
  ).length;
  
  return answer;
}

export default solution;