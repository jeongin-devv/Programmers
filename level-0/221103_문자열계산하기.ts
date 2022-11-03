const solution = (my_string : string) => {
  let answer = 0;
  answer = Function(`return ${my_string}`)();
  
  return answer;
}

export default solution;