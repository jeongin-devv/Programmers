const solution = (n : number, t : number) => {
  let answer = 0;
  answer = n*(2**t);
  
  return answer;
}

export default solution;