const solution = (order : number) => {
  let answer = 0;
  const array = ['3','6','9'];
  const stringArray = Array.from(order.toString());
  stringArray.forEach((string) => {
      if(array.includes(string)) answer++;
  })
  return answer;
}

export default solution;