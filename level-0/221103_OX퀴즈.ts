const solution = (quiz : String[]) => {
  let answer = [];
  quiz.forEach((string) => {
      const [calc, sol] = string.split('=');
      Function(`return ${calc}`)() === Number(sol) 
          ? answer.push('O')
          : answer.push('X');
  });
  
  return answer;
}

export default solution;