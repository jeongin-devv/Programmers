const solution = (str1 : string, str2 : string) => {
  let answer = 0;
  answer = str1.includes(str2) ? 1 : 2;

  return answer;
}

export default solution;