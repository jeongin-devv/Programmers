const solution = (n : number) => {
  let answer = 0;
  const numberArray = Array.from(n.toString());

  numberArray.forEach((stringNumber) => {
      answer += Number(stringNumber); 
  });

  return answer;
}

export default solution;