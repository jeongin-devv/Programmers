const solution = (n : number) => {
  let answer = 0;
  const arrayN = Array.from(n.toString());
  
  arrayN.forEach((num) => {
      answer = answer + Number(num);
  });

  return answer;
}

export default solution;