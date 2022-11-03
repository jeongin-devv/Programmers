const solution = (s1 : String[], s2 : String[]) => {
  let answer = 0;
  answer = s1.filter((s) => s2.includes(s)).length;
  
  return answer;
}

export default solution;