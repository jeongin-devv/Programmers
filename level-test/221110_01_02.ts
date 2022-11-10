const solution = (a : number, b : number) => {
  let answer = 0;
  const startIndex = Math.min(a,b);
  const endIndex = Math.max(a,b);

  for(let i = startIndex; i<=endIndex; i++){
      answer += i;
  }

  return answer;
}