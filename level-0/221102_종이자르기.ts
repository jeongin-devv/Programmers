const solution = (M : number, N : number) => {
  let answer = 0;
  let w = M - 1;
  let h = M*(N - 1);

  answer = w+h;
  
  return answer;
}

export default solution;