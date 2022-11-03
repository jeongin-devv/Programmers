const solution = (n : number) => {
  let answer = 0;
  answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2;
  
  return answer;
}

export default solution;